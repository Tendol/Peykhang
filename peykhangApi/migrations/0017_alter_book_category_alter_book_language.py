# Generated by Django 4.2.3 on 2023-11-17 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peykhangApi', '0016_book_publication_date_alter_book_category_and_more'),
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
            field=models.CharField(choices=[('tibetan', 'Tibetan'), ('italian', 'Italian'), ('french', 'French'), ('hindi', 'Hindi'), ('english', 'English'), ('chinese', 'Chinese'), ('spanish', 'Spanish')], default='tibetan', help_text='Selekc the book language'),
        ),
    ]
