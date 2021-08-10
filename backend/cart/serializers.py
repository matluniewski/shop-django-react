from rest_framework import serializers

from . import models
from products.serializers import ProductSerializer

class CartItemSerializer(serializers.ModelSerializer):
    # product = ProductSerializer()

    class Meta:
        model = models.CartItem
        exclude = ['user']
