# Generated by Django 4.2.3 on 2023-11-17 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peykhangApi', '0014_alter_book_category_alter_book_language'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='language',
            field=models.CharField(choices=[('hindi', 'Hindi'), ('italian', 'Italian'), ('spanish', 'Spanish'), ('chinese', 'Chinese'), ('tibetan', 'Tibetan'), ('english', 'English'), ('french', 'French')], default='tibetan', help_text='Selekc the book language'),
        ),
    ]
