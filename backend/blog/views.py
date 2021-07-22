from rest_framework import viewsets, permissions

from . import models, serializers

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = models.BlogPost.objects.all()
    serializer_class = serializers.BlogPostSerializer
    permission_classes = (permissions.AllowAny,)
