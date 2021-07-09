from rest_framework import serializers

from . import models

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        exclude = []

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.BlogPost
        exclude =[]
        # lookup_field = 'slug'