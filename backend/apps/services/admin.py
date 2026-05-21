from django.contrib import admin
from .models import Service

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_active', 'order']
    list_filter = ['is_active']
    search_fields = ['name']
    list_editable = ['order', 'is_active']
    list_per_page = 20
    prepopulated_fields = {'slug': ('name',)}