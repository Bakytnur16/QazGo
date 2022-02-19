from tabnanny import verbose
from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    username = models.CharField(max_length=50, unique=True, verbose_name='атау')
    password = models.CharField(max_length=50, verbose_name='құпия сөз')
    role = models.CharField(max_length=8, choices=[
        ('client', 'клиент'),
        ('delivery', 'тасымалдаушы'),
    ], verbose_name='рөл')

    class Meta:
        db_table = 'user'
        verbose_name = 'қолданушы'
        verbose_name_plural = 'қолданушылар'

    def __str__(self):
        return self.username

        

    
    