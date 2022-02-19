from rest_framework import serializers
from .models import OrderEvent

class OrderEventSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderEvent
        fields = '__all__'
        