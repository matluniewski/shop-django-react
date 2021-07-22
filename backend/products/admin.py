from django.contrib import admin
from django.contrib.admin.options import ModelAdmin
from django_summernote.admin import SummernoteModelAdmin
from .models import  Product



@admin.register(Product)
class ProductAdmin(ModelAdmin):
    summernote_fields = ('description',)
    list_display = ('name', 'category', 'price')
    prepopulated_fields = {'slug': ('name',)}
    list_display_links = ('name',)
    search_fields = ('name',)
    list_per_page = 25
