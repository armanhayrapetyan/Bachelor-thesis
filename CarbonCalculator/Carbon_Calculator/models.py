from django.db import models
  
class ConstantValuesHome( models.Model ):

    electricity = models.FloatField(null=False)
    natural_gas = models.FloatField(null=False)
    coal = models.FloatField(null=False)
    liquid_gas = models.FloatField(null=False)
    propane = models.FloatField(null=False)
    wood = models.FloatField(null=False)
 
    def __str__(self):
        return f"{self.electricity}, {self.natural_gas}, {self.coal}, {self.liquid_gas}, {self.propane}, {self.wood}"
    


class ConstantValuesPublicTransport( models.Model ):

    bus = models.FloatField(null=False)
    subway = models.FloatField(null=False)
    trolleybus = models.FloatField(null=False)
    electro_train = models.FloatField(null=False)
    diesel_train = models.FloatField(null=False)
    coal_train_lokomotiv = models.FloatField(null=False)
    petrol_taxi = models.FloatField(null=False)
    gas_taxi = models.FloatField(null=False)
 

    def __str__(self):
        return f"{self.bus}, {self.subway }, {self.trolleybus},{self.electro_train}, {self.diesel_train}, {self.coal_train_lokomotiv },{self.petrol_taxi}, {self.gas_taxi }"
 
 

class SendMessage( models.Model ):

    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    message = models.TextField()
 
    def __str__(self):
        return f"{self.name}, {self.email}, {self.message}"