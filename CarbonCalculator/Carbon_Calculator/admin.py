from django.contrib import admin
from .models import SendMessage, ConstantValuesHome, ConstantValuesPublicTransport

# Register your models here.
admin.site.register(SendMessage)
admin.site.register(ConstantValuesHome)  
admin.site.register(ConstantValuesPublicTransport)    
