from django.contrib import admin
from django.contrib.admin.options import ModelAdmin
from .models import  CartItem



@admin.register(CartItem)
class CartItemAdmin(ModelAdmin):
    pass