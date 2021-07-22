from rest_framework import serializers

from . import models

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CartItem
        exclude = []
