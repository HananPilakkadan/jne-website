# Generated by Django 4.1 on 2022-08-09 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('web', '0004_delete_registrationdetails'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrationDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=128)),
                ('email', models.EmailField(max_length=254)),
                ('cap_id', models.IntegerField()),
                ('selected_course', models.CharField(max_length=32)),
                ('dob', models.DateField()),
                ('gender', models.CharField(max_length=32)),
                ('snumber', models.CharField(max_length=32)),
                ('father_name', models.CharField(max_length=120)),
                ('mother_name', models.CharField(max_length=120)),
                ('parent_contact', models.CharField(max_length=32)),
                ('institution', models.CharField(max_length=32)),
                ('passout', models.CharField(max_length=32)),
                ('course_plustwo', models.CharField(max_length=32)),
                ('percentage_obtained', models.CharField(max_length=32)),
            ],
            options={
                'verbose_name_plural': 'Registration details',
            },
        ),
    ]