# Generated by Django 3.0.2 on 2020-01-13 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_auto_20200113_1518'),
    ]

    operations = [
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.FloatField()),
                ('date', models.DateTimeField(verbose_name='time')),
            ],
        ),
    ]