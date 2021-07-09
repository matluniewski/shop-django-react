from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    price = models.DecimalField(max_digits=8, decimal_places=2)


class Categories(models.TextChoices):
    FLOWERS = 'flowers'
    CANDLES = 'candles'


class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices)
    thumbnail = models.ImageField(upload_to='photos')
    excerpt = models.CharField(max_length=150)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date = models.DateTimeField(default=datetime.now, blank=True)

    def save(self):

        if self.featured:
            try:
                temp = BlogPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass
        super(BlogPost, self).save()

    def __str__(self):
        return self.title