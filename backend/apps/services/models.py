from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    short_description = models.TextField(max_length=300)
    full_description = models.TextField()
    icon_class = models.CharField(max_length=50, blank=True)
    image = models.ImageField(upload_to='services/', blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.name