from unicodedata import name
from wsgiref import validate
from django.db import models

# Create your models here.

class Location(models.Model):
    name = models.CharField(max_length=50)
    coordinates = models.CharField(max_length=20)
