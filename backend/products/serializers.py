from rest_framework import serializers

from . import models
# from utility import Base64ImageField2

class ProductSerializer(serializers.ModelSerializer):
    # thumbnail = Base64ImageField2()

    class Meta:
        model = models.Product
        exclude = []
