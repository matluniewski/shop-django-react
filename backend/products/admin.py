from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPost, Product

class BlogPostAdmin(SummernoteModelAdmin):
    summernote_fields = ('content',)
    list_display = ('id', 'title', 'category', 'date')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_per_page = 25

admin.site.register(BlogPost, BlogPostAdmin)
admin.site.register(Product)
