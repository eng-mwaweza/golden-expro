from django.contrib import admin
from .models import CompanyContent, Statistic

@admin.register(CompanyContent)
class CompanyContentAdmin(admin.ModelAdmin):
    list_display = ['section', 'updated_at']
    fieldsets = (
        (None, {
            'fields': ('section', 'title', 'content')
        }),
    )
    
    def has_add_permission(self, request):
        # Prevent adding multiple entries for the same section
        return False

@admin.register(Statistic)
class StatisticAdmin(admin.ModelAdmin):
    list_display = ['label', 'value', 'order']
    list_editable = ['order']
    list_per_page = 20