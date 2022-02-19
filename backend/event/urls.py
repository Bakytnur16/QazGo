from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .import views
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('order-event/', views.OrderEventView.as_view()),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_view'),
]

urlpatterns = format_suffix_patterns(urlpatterns)