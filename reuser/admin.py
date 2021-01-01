from django.contrib import admin
from .models import Reuser


class ReuserAdmin(admin.ModelAdmin):
    model = Reuser


admin.site.register(Reuser, ReuserAdmin)
