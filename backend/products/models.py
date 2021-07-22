from django.db import models
from datetime import datetime

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
    
    def __str__(self):
        return self.name
