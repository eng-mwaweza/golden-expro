from rest_framework import viewsets
from .models import CompanyContent, Statistic
from .serializers import CompanyContentSerializer, StatisticSerializer

class CompanyContentViewSet(viewsets.ModelViewSet):
    queryset = CompanyContent.objects.all()
    serializer_class = CompanyContentSerializer

class StatisticViewSet(viewsets.ModelViewSet):
    queryset = Statistic.objects.all()
    serializer_class = StatisticSerializer