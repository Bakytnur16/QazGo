from django import views
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import User
from .serializers import UserSerializer


# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(APIView):
    def get(self, request):
        
        user_ser = UserSerializer(data = request.user)
        user_ser.is_valid()
        # print(user_ser.is_valid(),'\n'*3)

        return Response(user_ser.data)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


