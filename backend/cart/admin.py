from django.contrib import admin
from django.contrib.admin.options import ModelAdmin
from .models import  CartItem, Cart



@admin.register(CartItem)
class CartItemAdmin(ModelAdmin):
    pass

@admin.register(Cart)
class CartAdmin(ModelAdmin):
    pass