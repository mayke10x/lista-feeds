from django.db import models
from django.contrib.auth.models import User

class Feeds(models.Model):
    title = models.CharField(max_length=125)
    content = models.TextField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title