from django.urls import include, path

from rest_framework import routers

from . import views


router = routers.DefaultRouter(trailing_slash=False)
router.register('cart_item', views.CartItemViewSet, 'cart_item')
router.register('cart', views.CartViewSet, 'cart')


urlpatterns = [
    path('', include(router.urls)),
]