from rest_framework import viewsets, permissions, authentication

from . import models, serializers

class CartItemViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny,]
    authentication_classes = [authentication.SessionAuthentication, authentication.BasicAuthentication, ]
    queryset = models.CartItem.objects.all()
    serializer_class = serializers.CartItemSerializer