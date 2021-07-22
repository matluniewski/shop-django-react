from django.urls import include, path

from rest_framework import routers

from . import views


router = routers.DefaultRouter(trailing_slash=False)
router.register('cart_item', views.CartItemViewSet, 'cart_item')


urlpatterns = [
    path('', include(router.urls)),
]