# Generated by Django 3.2.4 on 2021-07-29 13:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20210729_1535'),
    ]

    operations = [
        migrations.RenameField(
            model_name='image',
            old_name='images',
            new_name='image',
        ),
        migrations.RemoveField(
            model_name='product',
            name='images',
        ),
    ]