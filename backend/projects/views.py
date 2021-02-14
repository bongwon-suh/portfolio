from django.shortcuts import render
from rest_framework.views import APIView
from .models import Projects
from .serializers import ProjectsSerializer
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin


class ProjectsListAPI(ListModelMixin, CreateModelMixin, GenericAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request)

    def post(self, request, *args, **kwargs):
        return self.create(request)
    
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)


class ProjectsDetailAPI(RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, GenericAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        if self.destroy(request, *args, **kwargs).status_code == 204:
            return Response({'success':'success'})

