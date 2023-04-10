from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import ContactSerializers, ConstantValuesSerializers, ConstantValuesPublicTransportSerializers
from .forms import *


class HomeView(TemplateView):
    template_name = 'html/home.html'

    def getHomePage(self, request):
        return render(request, self.template_name)


class MainPageView(TemplateView):
    template_name = 'html/index.html'

    def getIndexMainPage(self, request):
        return render(request, self.template_name)
    

class PublicTransportPageView(TemplateView):
    template_name = 'html/bus.html'

    def getPublicTransportPage(self, request):
        return render(request, self.template_name)

    
class ContactUs(APIView):

    def get(self, request):
        obj = SendMessage.objects.all()
        serializer = ContactSerializers(obj, many = True)
        return Response(serializer.data,status=status.HTTP_200_OK)


    def post(self, request):
        serialaizer = ContactSerializers(data=request.data)
        if serialaizer.is_valid():
            serialaizer.save()
            return Response(serialaizer.data, status=status.HTTP_201_CREATED)
        
        return Response(serialaizer.data, status=status.HTTP_400_BAD_REQUEST)
        

class ConstantValues(APIView):

    def get(self, request):
        obj = ConstantValuesHome.objects.all()
        serializer = ConstantValuesSerializers(obj, many = True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    

class ConstantValuesPublicTransportView(APIView):

    def get(self, request):
        obj = ConstantValuesPublicTransport.objects.all()
        serializer = ConstantValuesPublicTransportSerializers(obj, many = True)
        return Response(serializer.data,status=status.HTTP_200_OK)
