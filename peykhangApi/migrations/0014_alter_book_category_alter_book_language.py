# Generated by Django 4.2.3 on 2023-11-14 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peykhangApi', '0013_alter_book_language'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='category',
            field=models.CharField(choices=[('fiction', 'Fiction'), ('non_fiction', 'Non Fiction')], default='fiction', help_text='Select the book category'),
        ),
        migrations.AlterField(
            model_name='book',
            name='language',
            field=models.CharField(choices=[('chinese', 'Chinese'), ('italian', 'Italian'), ('hindi', 'Hindi'), ('english', 'English'), ('french', 'French'), ('spanish', 'Spanish'), ('tibetan', 'Tibetan')], default='tibetan', help_text='Selekc the book language'),
        ),
    ]