from django.db import models


class Slide(models.Model):
    background_image = models.ImageField()
    created = models.DateTimeField(auto_now_add=True)
    description = models.CharField(blank=True, max_length=1024, null=True)
    name = models.CharField(blank=True, max_length=128, null=True)
    updated = models.DateTimeField(auto_now=True)
