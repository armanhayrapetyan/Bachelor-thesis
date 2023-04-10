from rest_framework import serializers
from .models import SendMessage, ConstantValuesHome, ConstantValuesPublicTransport


class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = SendMessage
        fields = ('name','email','message')

class ConstantValuesSerializers(serializers.ModelSerializer):
    class Meta:
        model = ConstantValuesHome
        fields = ('electricity','natural_gas','coal','liquid_gas', 'propane', 'wood')


class ConstantValuesPublicTransportSerializers(serializers.ModelSerializer):
    class Meta:
        model = ConstantValuesPublicTransport
        fields = '__all__'
