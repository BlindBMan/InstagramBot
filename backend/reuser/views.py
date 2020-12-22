from django.shortcuts import render
# from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import ReuserSerializer
from .models import Reuser


class ReuserView(APIView):
    serializer_class = ReuserSerializer

    def get(self, request):
        detail = [{"name": reuser.user.username} for reuser in Reuser.objects.all()]
        return Response(detail)

    def post(self, request):
        serializer = ReuserSerializer(data= request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
