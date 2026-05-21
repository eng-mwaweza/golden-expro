from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import MiningProject
from .serializers import MiningProjectSerializer

class MiningProjectViewSet(viewsets.ModelViewSet):
    queryset = MiningProject.objects.all()
    serializer_class = MiningProjectSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['stage', 'commodity', 'featured']
    search_fields = ['title', 'location', 'description']
    ordering_fields = ['order', 'created_at']