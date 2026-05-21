from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

# Import views
from apps.projects.views import MiningProjectViewSet
from apps.services.views import ServiceViewSet
from apps.media_posts.views import MediaPostViewSet
from apps.contacts.views import ContactMessageViewSet
from apps.company_content.views import CompanyContentViewSet, StatisticViewSet

router = routers.DefaultRouter()
router.register(r'projects', MiningProjectViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'media-posts', MediaPostViewSet)
router.register(r'contact-messages', ContactMessageViewSet)
router.register(r'company-content', CompanyContentViewSet)
router.register(r'statistics', StatisticViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]