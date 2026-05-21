from rest_framework import serializers
from .models import MiningProject

class MiningProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = MiningProject
        fields = '__all__'