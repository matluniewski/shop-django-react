from products.models import Product
from django.conf import settings
from django.db import models






class CartItem(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return str(self.product)

class Cart(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.CASCADE)
    products = models.ManyToManyField(CartItem, blank=True)
    total = models.DecimalField(default=0.00, max_digits=9, decimal_places=2)
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return str(self.user)