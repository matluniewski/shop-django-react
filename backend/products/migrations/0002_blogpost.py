# Generated by Django 3.2.4 on 2021-07-05 21:56

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField()),
                ('category', models.CharField(choices=[('flowers', 'Flowers'), ('candles', 'Candles')], max_length=50)),
                ('thumbnail', models.ImageField(upload_to='photos')),
                ('excerpt', models.CharField(max_length=150)),
                ('content', models.TextField()),
                ('featured', models.BooleanField(default=False)),
                ('date', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]
