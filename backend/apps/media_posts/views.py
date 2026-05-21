from rest_framework import viewsets
from .models import MediaPost
from .serializers import MediaPostSerializer

class MediaPostViewSet(viewsets.ModelViewSet):
    queryset = MediaPost.objects.all().order_by('-published_date')
    serializer_class = MediaPostSerializer