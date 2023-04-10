# Generated by Django 4.1.7 on 2023-03-29 20:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ConstantValues',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('electricity', models.FloatField()),
                ('natural_gas', models.FloatField()),
                ('coal', models.FloatField()),
                ('liquid_gas', models.FloatField()),
                ('propane', models.FloatField()),
                ('wood', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='SendMessage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('message', models.TextField()),
            ],
        ),
    ]