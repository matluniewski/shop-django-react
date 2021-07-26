from rest_framework import viewsets, permissions, authentication

from . import models, serializers

class CartItemViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    # authentication_classes = [authentication.SessionAuthentication, authentication.BasicAuthentication, ]
    # queryset = models.CartItem.objects.all()
    serializer_class = serializers.CartItemSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return models.CartItem.objects.filter(user__id=self.request.user.id)