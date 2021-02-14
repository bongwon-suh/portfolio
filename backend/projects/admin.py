from django.contrib import admin
from .models import Projects

class ProjectsAdmin(admin.ModelAdmin):
    fields = ['title', 'content']

admin.site.register(Projects)