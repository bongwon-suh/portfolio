from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectsListAPI, ProjectsDetailAPI

urlpatterns = [
    path('list/', ProjectsListAPI.as_view()),
    path('detail/<int:pk>/', ProjectsDetailAPI.as_view()),
]
