from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializer import MyTokenObtainPairSerializer, ReuserSerializer
from static import bot
import braintree
from worker import conn
from rq import Queue
import datetime
from .models import Reuser
from braces.views import CsrfExemptMixin


q = Queue(connection=conn)

gateway = braintree.BraintreeGateway(
    braintree.Configuration(
        braintree.Environment.Sandbox,
        merchant_id="gmzp5n3wy5xvxcjc",
        public_key="hbrchr2rvr7hf8ks",
        private_key="08289e1955df3e98f6eecac9ed0309ee"
    )
)


class ObtainTokenPairWithColorView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class ReuserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format=None):
        serializer = ReuserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
            return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateUserView(APIView):
    def post(self, request):
        try:
            new_date = datetime.date.fromisoformat(request.data['new_date'])
            user = Reuser.objects.get(username=request.data['username'])
            user.subscription_expiry_date = new_date + datetime.timedelta(days=30)
            user.save()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class LogoutTokenView(CsrfExemptMixin, APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = []

    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class BotView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        try:
            json = {
                "ac_lst": request.data['acc_list'],
                "com_lst": request.data['comm_list'],
                "mainacc": request.data['main_acc'],
                "mainpass": request.data['main_pass']
            }
            print(json)
            acc_lst = request.data['acc_list']
            comm_lst = request.data['comm_list']

            if len(acc_lst) > len(comm_lst):
                diff = len(acc_lst) - len(comm_lst)
                comm_lst.extend(comm_lst[:diff])

            for i in range(0, len(acc_lst), 2):
                q.enqueue(bot.main, request.data['main_acc'], request.data['main_pass'],
                          acc_lst[i:i+2], comm_lst[i:i+2])

            # bot.main(request.data['main_acc'], request.data['main_pass'],
            #          request.data['acc_list'], request.data['comm_list'])

            # result = q.enqueue(test.main, 4)

            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class GenerateToken(APIView):
    def get(self, request):
        token = gateway.client_token.generate()
        return Response(token, status=status.HTTP_200_OK)


class CreatePurchase(APIView):
    def post(self, request):
        try:
            client_nonce = request.data['nonce']
            result = gateway.transaction.sale({
                "amount": "15.00",
                "payment_method_nonce": client_nonce,
                "options": {
                    "submit_for_settlement": True
                }
            })
            if result.is_success:
                return Response({"result": 'success'}, status=status.HTTP_200_OK)
            else:
                return Response({"result": 'failed'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
