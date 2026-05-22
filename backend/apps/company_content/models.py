from django.db import models

class CompanyContent(models.Model):
    SECTION_CHOICES = [
        ('overview', 'Overview'),
        ('vision', 'Vision'),
        ('mission', 'Mission'),
        ('partnering', 'Partnering for Success'),
        ('mineral_specialists', 'Mineral Resource Specialists'),
    ]
    
    section = models.CharField(max_length=30, choices=SECTION_CHOICES, unique=True)
    title = models.CharField(max_length=200, blank=True)
    content = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "Company Content"
        verbose_name_plural = "Company Contents"
    
    def __str__(self):
        return f"{self.get_section_display()}"

class Statistic(models.Model):
    label = models.CharField(max_length=100)
    value = models.CharField(max_length=50)
    icon_class = models.CharField(max_length=50, blank=True, help_text="FontAwesome icon class (e.g., 'fas fa-chart-bar')")
    order = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['order']
        verbose_name = "Statistic"
        verbose_name_plural = "Statistics"
    
    def __str__(self):
        return f"{self.label}: {self.value}"