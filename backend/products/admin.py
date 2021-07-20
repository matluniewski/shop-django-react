from django.contrib import admin
from django.contrib.admin.options import ModelAdmin
from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPost, Product

@admin.register(BlogPost)
class BlogPostAdmin(SummernoteModelAdmin):
    summernote_fields = ('content',)
    list_display = ('id', 'title', 'category', 'date')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_per_page = 25

@admin.register(Product)
class ProductAdmin(ModelAdmin):
    list_display = ('id', 'name', 'description', 'category', 'price')
    list_display_links = ('id', 'name')
    search_fields = ('name',)
    list_per_page = 25
