from rest_framework import serializers

from . import models
from products.serializers import ProductSerializer

class CartItemSerializer(serializers.ModelSerializer):
    # product = ProductSerializer()

    class Meta:
        model = models.CartItem
        exclude = ['user']

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        models = models.Cart
        exclude = ['user']
