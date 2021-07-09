from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView

from . import models, serializers

class ProductViewSet(viewsets.ModelViewSet):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer

class BlogPostDetailView(RetrieveAPIView):
    queryset = models.BlogPost.objects.order_by('-date')
    serializer_class = serializers.BlogPostSerializer
    permission_classes = (permissions.AllowAny,)

class BlogPostListView(ListAPIView):
    queryset = models.BlogPost.objects.order_by('-date')
    serializer_class = serializers.BlogPostSerializer
    permission_classes = (permissions.AllowAny,)

class BlogPostFeaturedView(ListAPIView):
    queryset = models.BlogPost.objects.filter(featured=True)
    serializer_class = serializers.BlogPostSerializer
    permission_classes = (permissions.AllowAny,)

class BlogPostCategoryView(APIView):
    serializer_class = serializers.BlogPostSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        category = data['category']
        queryset = models.BlogPost.objects.order_by('-date').filter(category__iexact=category)
        serializer = serializers.BlogPostSerializer(queryset, many=True)

        return Response(serializer.data)
