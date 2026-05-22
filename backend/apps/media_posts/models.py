from django.db import models
from django.utils.text import slugify
from cloudinary.models import CloudinaryField  # Add this import

class MediaPost(models.Model):
    CATEGORY_CHOICES = [
        ('news', 'Company News & Blog'),
        ('csr', 'Corporate Social Responsibility (CSR)'),
    ]
    
    title = models.CharField(max_length=250)
    slug = models.SlugField(unique=True, blank=True)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    content = models.TextField()
    excerpt = models.CharField(max_length=300, blank=True)
    
    # CHANGE THIS: From ImageField to CloudinaryField
    image = CloudinaryField('image', blank=True, null=True, folder='golden-expro/media_posts/')
    
    author = models.CharField(max_length=100, default='Golden Expro Team')
    published_date = models.DateField(auto_now_add=True)
    is_featured = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        if not self.excerpt:
            self.excerpt = self.content[:200]
        super().save(*args, **kwargs)