from products.models import Product
from django.db import models
from django.contrib.auth.models import User



class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
