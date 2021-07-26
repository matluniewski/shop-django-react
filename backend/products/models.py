from django.db import models
from datetime import datetime


class ProductManager(models.Manager):
    def get_queryset(self):
        return super(ProductManager, self).get_queryset().filter(is_active=True)


class Categories(models.TextChoices):
    FLOWERS = 'flowers'
    CANDLES = 'candles'

class Product(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.CharField(max_length=50, choices=Categories.choices)
    description = models.TextField(max_length=500)
    thumbnail = models.ImageField(upload_to='photos/products')
    in_stock = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    objects = models.Manager()
    products = ProductManager() # returning products that are active

    def __str__(self):
        return self.name
