from turtle import pen
from webbrowser import get
from rest_framework import generics
from .models import OrderEvent
from .serializer import OrderEventSerializer

# Create your views here.

class OrderEventView(generics.ListAPIView):
    queryset = OrderEvent.objects.all()
    serializer_class = OrderEventSerializer


    