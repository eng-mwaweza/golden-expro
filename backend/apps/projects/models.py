from django.db import models
from django.utils.text import slugify

class MiningProject(models.Model):
    STAGE_CHOICES = [
        ('grassroots', 'Grassroots Exploration'),
        ('advanced', 'Advanced Exploration'),
        ('feasibility', 'Feasibility Study'),
        ('production', 'Production'),
    ]
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    location = models.CharField(max_length=150, help_text="e.g., Chunya, Geita, Handeni")
    stage = models.CharField(max_length=20, choices=STAGE_CHOICES)
    description = models.TextField()
    commodity = models.CharField(max_length=100, default="Gold")
    client_name = models.CharField(max_length=200, blank=True)
    testimonial = models.TextField(blank=True)
    completion_date = models.DateField(null=True, blank=True)
    image = models.ImageField(upload_to='projects/')
    gallery_images = models.JSONField(default=list, blank=True, help_text="List of Cloudinary URLs")
    featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order', '-created_at']
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)