from django.db import models
from datetime import datetime

class Categories(models.TextChoices):
    FLOWERS = 'flowers'
    CANDLES = 'candles'

class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices)
    thumbnail = models.ImageField(upload_to='photos/blog')
    excerpt = models.CharField(max_length=150)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title
