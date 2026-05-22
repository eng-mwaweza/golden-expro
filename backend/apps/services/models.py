from django.db import models
from cloudinary.models import CloudinaryField

class Service(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    short_description = models.TextField(max_length=300)
    full_description = models.TextField()
    icon_class = models.CharField(max_length=50, blank=True, help_text="Icon class (e.g., 'FaHardHat')")
    image = CloudinaryField('image', blank=True, null=True, folder='golden-expro/services/')
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        ordering = ['order']
        verbose_name = "Service"
        verbose_name_plural = "Services"
    
    def __str__(self):
        return self.name