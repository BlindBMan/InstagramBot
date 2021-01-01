from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairWithColorView, ReuserCreate, LogoutTokenView

urlpatterns = [
    path('user/create/', ReuserCreate.as_view(), name='user_create'),
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('blacklist/', LogoutTokenView.as_view(), name='blacklist'),
]
