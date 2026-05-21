from django.contrib import admin
from .models import MiningProject

@admin.register(MiningProject)
class MiningProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'location', 'stage', 'commodity', 'featured', 'created_at']
    list_filter = ['stage', 'commodity', 'featured']
    search_fields = ['title', 'location', 'description']
    list_editable = ['featured']
    list_per_page = 20
    prepopulated_fields = {'slug': ('title',)}
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'location', 'stage', 'commodity', 'description')
        }),
        ('Client & Testimonial', {
            'fields': ('client_name', 'testimonial', 'completion_date'),
            'classes': ('collapse',)
        }),
        ('Media', {
            'fields': ('image', 'gallery_images')
        }),
        ('Display Settings', {
            'fields': ('featured', 'order')
        }),
    )