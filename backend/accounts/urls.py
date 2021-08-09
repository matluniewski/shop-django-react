from django.urls import path, include

from rest_framework.authtoken import views
from .views import RegisterAPI, LoginAPI, UserAPI

urlpatterns = [
    path('obtain-auth-token', views.obtain_auth_token),
    path('register', RegisterAPI.as_view(), name='register'),
    path('login', LoginAPI.as_view(), name='login'),
    path('users', UserAPI.as_view(), name='users')
]
