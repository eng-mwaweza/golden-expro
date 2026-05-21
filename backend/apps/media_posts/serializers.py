from rest_framework import serializers
from .models import MediaPost

class MediaPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaPost
        fields = '__all__'