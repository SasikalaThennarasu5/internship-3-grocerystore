from django.db import models
from orders.models import Order

class Payment(models.Model):

    order = models.ForeignKey(Order, on_delete=models.CASCADE)

    payment_method = models.CharField(max_length=100)
    payment_id = models.CharField(max_length=200)

    amount = models.DecimalField(max_digits=10, decimal_places=2)

    status = models.CharField(max_length=50)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.payment_id