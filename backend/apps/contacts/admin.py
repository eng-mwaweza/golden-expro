from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'company_name', 'country', 'is_read', 'received_at']
    list_filter = ['is_read', 'country', 'received_at']
    search_fields = ['full_name', 'email', 'company_name', 'message']
    list_editable = ['is_read']
    readonly_fields = ['received_at']
    list_per_page = 20
    
    actions = ['mark_as_read', 'mark_as_unread']
    
    def mark_as_read(self, request, queryset):
        queryset.update(is_read=True)
    mark_as_read.short_description = "Mark selected messages as read"
    
    def mark_as_unread(self, request, queryset):
        queryset.update(is_read=False)
    mark_as_unread.short_description = "Mark selected messages as unread"