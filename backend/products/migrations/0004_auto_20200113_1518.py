# Generated by Django 3.0.2 on 2020-01-13 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_question_difficulty'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Product',
        ),
        migrations.AlterField(
            model_name='question',
            name='difficulty',
            field=models.TextField(choices=[('hard', 'hard'), ('medium', 'medium'), ('easy', 'easy')]),
        ),
    ]
