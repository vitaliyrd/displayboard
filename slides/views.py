from django.shortcuts import render

from slides.models import Slide


def viewer(request):
    # TODO: [#1] Make durations configurable
    return render(request, 'slides/viewer.html', {
        'refreshDuration': 900,
        'slideDuration': 5,
        'slides': Slide.objects.all(),
        'transitionDuration': 1,
    })
