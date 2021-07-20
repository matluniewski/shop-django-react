from rest_framework import viewsets, permissions

from . import models, serializers

class ProductViewSet(viewsets.ModelViewSet):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer
    permission_classes = [permissions.AllowAny,]

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = models.BlogPost.objects.all()
    serializer_class = serializers.BlogPostSerializer
    permission_classes = (permissions.AllowAny,)
