from django.db import models

class ContactMessage(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    company_name = models.CharField(max_length=150, blank=True)
    country = models.CharField(max_length=100)
    service_interest = models.CharField(max_length=200, blank=True)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    received_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Message from {self.full_name} - {self.received_at}"