from django.urls import path

from slides import views

urlpatterns = [
    path('', views.viewer, name='viewer'),
]
