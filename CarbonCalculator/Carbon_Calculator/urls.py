from django.urls import path, re_path

from .views import *

urlpatterns = [
    path('main/', MainPageView.as_view(), name='main'),
    path('home_calculator/',  HomeView.as_view(), name='home'),
    path('public_transport/',  PublicTransportPageView.as_view(), name='bus'),
    path('contact_us/',  ContactUs.as_view(), name='contact'),
    path('constant_values/',  ConstantValues.as_view(), name='constant_values'),
    path('public_transport_values/',  ConstantValuesPublicTransportView.as_view(), name='public_transport_values'),
]      