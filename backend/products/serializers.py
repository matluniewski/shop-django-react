from rest_framework import serializers

from . import models
# from utility import Base64ImageField2


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        exclude = []

class ProductSerializer(serializers.ModelSerializer):
    # thumbnail = Base64ImageField2()
    images = serializers.StringRelatedField(many=True)
    class Meta:
        model = models.Product
        exclude = []
        include = ['images']
