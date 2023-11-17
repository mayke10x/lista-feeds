from rest_framework import serializers

from django.contrib.auth.models import User
from .models import Feeds

class UserSerializer(serializers.Serializer):
    name = serializers.SerializerMethodField()

    def get_name(self, obj):
        return f'{obj.first_name} {obj.last_name}'

class FeedsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feeds
        fields = [ 'title', 'content', 'author_objects' ]

    author_objects = UserSerializer(source='author', read_only=True)

    