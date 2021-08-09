from django.contrib import admin
from django.contrib.admin.options import ModelAdmin
from .models import  Product, Image



class ImageAdmin(admin.StackedInline):
    model = Image

@admin.register(Product)
class ProductAdmin(ModelAdmin):
    inlines = [ImageAdmin]
    summernote_fields = ('description',)
    list_display = ('name', 'category', 'price')
    prepopulated_fields = {'slug': ('name',)}
    list_display_links = ('name',)
    search_fields = ('name',)
    list_per_page = 25

    class Meta:
        model = Product

@admin.register(Image)
class ImageAdmin(ModelAdmin):
    pass
