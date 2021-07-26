from rest_framework import viewsets, permissions

from . import models, serializers

class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny,]
    queryset = models.Product.products.all()
    serializer_class = serializers.ProductSerializer
    filterset_fields = ['category', ]
