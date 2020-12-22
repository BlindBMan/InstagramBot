from rest_framework import serializers
from .models import Reuser


class ReuserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reuser
        fields = ['user']
