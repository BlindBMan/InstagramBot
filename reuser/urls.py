from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairWithColorView, ReuserCreate, \
    LogoutTokenView, BotView, GenerateToken, CreatePurchase, UpdateUserView, CreateCheckoutSession, ObtainExpiryDate

urlpatterns = [
    path('user/update/', UpdateUserView.as_view(), name='user_update'),
    path('user/create/', ReuserCreate.as_view(), name='user_create'),
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('blacklist/', LogoutTokenView.as_view(), name='blacklist'),
    path('instabot/', BotView.as_view(), name='bot'),
    path('braintree_obtain/', GenerateToken.as_view(), name='gen_token'),
    path('braintree_buy/', CreatePurchase.as_view(), name='create_purchase'),
    path('create_session/', CreateCheckoutSession.as_view(), name='create_session'),
    path('obtain_expiry_date/', ObtainExpiryDate.as_view(), name='obtain_expiry_date')
]
