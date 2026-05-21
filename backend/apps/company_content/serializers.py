from rest_framework import serializers
from .models import CompanyContent, Statistic

class CompanyContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyContent
        fields = '__all__'

class StatisticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statistic
        fields = '__all__'