from django.shortcuts import render

from slides.models import Slide


def viewer(request):
    return render(request, 'slides/viewer.html', {
        'slideDuration': 5,
        'slides': Slide.objects.all(),
        'transitionDuration': 1,
    })
