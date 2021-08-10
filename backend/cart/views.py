from rest_framework import viewsets, permissions,  mixins

from . import models, serializers

class CartItemViewSet(mixins.CreateModelMixin, 
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = serializers.CartItemSerializer
    

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return models.CartItem.objects.filter(user__id=self.request.user.id)