# Generated by Django 4.1 on 2022-08-09 06:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='registrationform',
            options={'verbose_name': 'Registration details'},
        ),
        migrations.AlterModelTable(
            name='registrationform',
            table='Registration Details',
        ),
    ]
