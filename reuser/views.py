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
import stripe


stripe.api_key = \
    'sk_test_51I6g4EAMDRvyRzjWN71NrmPSXPlICBZUAFbo1ZC15YESZKpUsrHK6bdNvs7DgKss0rJgwmmXTB7orVMZ1kK6WNE2002uGML4xU'


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


class ObtainExpiryDate(APIView):
    def post(self, request):
        try:
            reuser = Reuser.objects.get(username=request.data['username'])
            customers_data = stripe.Customer.list(email=reuser.email)['data']
            if customers_data:
                customer_id = customers_data[0]['id']

                charges = stripe.Charge.list(customer=customer_id)['data']
                charges_dates = \
                    [datetime.datetime.fromtimestamp(charge['created'], datetime.timezone.utc) for charge in charges]
                charges_dates.sort()
                most_recent_charge = charges_dates[-1]
                expiry_date = most_recent_charge + datetime.timedelta(days=30)
                response = expiry_date.isoformat()
            else:
                response = "1066-01-02T21:21:21+00:00"
            return Response({"exp_date": response}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({}, status=status.HTTP_400_BAD_REQUEST)


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


class CreateCheckoutSession(APIView):
    def post(self, request):
        try:
            reuser = Reuser.objects.get(username=request.data['username'])

            customers_data = stripe.Customer.list(email=reuser.email)['data']
            if customers_data:
                customer_id = customers_data[0]['id']

                session = stripe.checkout.Session.create(
                    customer=customer_id,
                    payment_method_types=['card'],
                    line_items=[{
                        'price_data': {
                            'currency': 'inr',
                            'product_data': {
                                'name': 'Instagram Bot',
                            },
                            'unit_amount': 110000,
                        },
                        'quantity': 1,
                    }],
                    mode='payment',
                    success_url='https://insta-bot1.herokuapp.com/login/',
                    cancel_url='https://insta-bot1.herokuapp.com/failure/',
                )
            else:
                session = stripe.checkout.Session.create(
                    customer_email=reuser.email,
                    payment_method_types=['card'],
                    line_items=[{
                        'price_data': {
                            'currency': 'inr',
                            'product_data': {
                                'name': 'Instagram Bot',
                            },
                            'unit_amount': 110000,
                        },
                        'quantity': 1,
                    }],
                    mode='payment',
                    success_url='https://insta-bot1.herokuapp.com/login/',
                    cancel_url='https://insta-bot1.herokuapp.com/failure/',
                )

            return Response(session, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({}, status=status.HTTP_400_BAD_REQUEST)


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
