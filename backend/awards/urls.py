from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AwardsListAPI, AwardsDetailAPI

urlpatterns = [
    path('list/', AwardsListAPI.as_view()),
    path('detail/<int:pk>/', AwardsDetailAPI.as_view()),
]
