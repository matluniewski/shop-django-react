from django.urls import include, path

from rest_framework import routers

from . import views


router = routers.DefaultRouter(trailing_slash=False)
router.register('post', views.BlogPostViewSet, 'post') 
router.register('product', views.ProductViewSet, 'product')


urlpatterns = [
    path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
