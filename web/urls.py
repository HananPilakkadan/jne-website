from django.urls import path

from web.views import create_admission


app_name = 'web'
urlpatterns = [
    path('create-admission/', create_admission, name='form'),
]