import uuid

from django.db import models


def rename_to_uuid(model_instance, filename):
    extension = filename.split('.')[-1]
    return '%s.%s' % (str(uuid.uuid4()), extension)


class Slide(models.Model):
    background_image = models.ImageField(upload_to=rename_to_uuid)
    created = models.DateTimeField(auto_now_add=True)
    description = models.CharField(blank=True, max_length=1024, null=True)
    name = models.CharField(blank=True, max_length=128, null=True)
    updated = models.DateTimeField(auto_now=True)
