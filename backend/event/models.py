from datetime import date
from django.db import models



# Create your models here.

class Event(models.Model):
    created = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created']
        abstract = True


class Order(models.Model):
    _type = models.CharField(max_length=20)
    # client = models.ForeignKey('user.User', on_delete=models.CASCADE)


class OrderEvent(Event):
    client = models.ForeignKey('user.User', on_delete=models.CASCADE)
    from_location = models.ForeignKey('location.Location', on_delete=models.CASCADE, related_name='from+')
    to_location = models.ForeignKey('location.Location', on_delete=models.CASCADE, related_name='to+')
    weight_kg = models.FloatField()
    expecting_price_tenge = models.FloatField()
    expecting_delivery_date = models.DateTimeField()
    order = models.ForeignKey('event.Order', on_delete=models.CASCADE)



class OfferEvent(Event):
    delivery_company = models.ForeignKey('user.User', on_delete=models.CASCADE)
    offer_price_tenge = models.FloatField()
    order = models.ForeignKey('event.Order', on_delete=models.CASCADE)


class OfferAcceptEvent(Event):
    order = models.ForeignKey('event.Order', on_delete=models.CASCADE)


class OrderCancelEvent(Event):
    cancel_reason = models.CharField(max_length=255)
    order = models.ForeignKey('event.Order', on_delete=models.CASCADE)
    

class OrderFreightReceiveEvent(Event):
    order = models.ForeignKey('event.Order', on_delete=models.CASCADE)
    


class OrderFulfillmentEvent(Event):
    order = models.ForeignKey('event.Order', on_delete=models.CASCADE)
    

class OrderFailEvent(Event):
    fail_reason = models.CharField(max_length=255)
    order = models.ForeignKey('event.Order', on_delete=models.CASCADE)
