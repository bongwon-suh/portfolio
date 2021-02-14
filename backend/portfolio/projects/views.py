from django.shortcuts import render
from rest_framework.views import APIView
from .models import Projects
from .serializers import ProjectsSerializer
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin

# #### APIView 는 Serializer 중복##############
# class ProjectsListAPIView(APIView):
#     permission_classes = (permissions.AllowAny, )
    
#     def get(self, request):
#         serializer = ProjectsSerializer(Projects.objects.all(), many=True)
#         return Response(serializer.data)
    
#     def post(self, request):
#         serializer = ProjectsSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)
    

# serializer 중복 최소화
class ProjectsListAPIView(ListModelMixin, CreateModelMixin, GenericAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

    def get(self, requeset, *args, **kwargs):
        return self.list(requeset)
    
    def post(self, request, *args, **kwargs):
        return self.create(request)
