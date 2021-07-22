from django.contrib import admin
from django.contrib.admin.options import ModelAdmin
from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPost

@admin.register(BlogPost)
class BlogPostAdmin(SummernoteModelAdmin):
    summernote_fields = ('content',)
    list_display = ( 'title', 'category', 'date')
    prepopulated_fields = {'slug': ('title',)}
    list_display_links = ( 'title',)
    search_fields = ('title',)
    list_per_page = 25
