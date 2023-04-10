from django.contrib import admin
from django.urls import path, include
from Carbon_Calculator.urls import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Carbon_Calculator.urls')),
]   
