from django.contrib import admin
from .models import MediaPost

@admin.register(MediaPost)
class MediaPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'published_date', 'is_featured']
    list_filter = ['category', 'is_featured', 'published_date']
    search_fields = ['title', 'content']
    list_editable = ['is_featured']
    list_per_page = 20
    prepopulated_fields = {'slug': ('title',)}
    
    # Remove 'published_date' from fields since it's auto_now_add
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'category', 'content', 'excerpt')
        }),
        ('Media & Meta', {
            'fields': ('image', 'author', 'is_featured')
        }),
    )
    
    readonly_fields = ['published_date']  # Make it read-only