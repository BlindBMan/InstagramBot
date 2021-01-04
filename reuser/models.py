from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime


class Reuser(AbstractUser):
    fav_food = models.CharField(blank=True, max_length=100)
    subscription_expiry_date = models.DateField(default=datetime.date(1066, 12, 3))

    # def __str__(self):
    #     return self.username
