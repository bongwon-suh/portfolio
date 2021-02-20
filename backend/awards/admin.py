from django.contrib import admin
from .models import Awards

class AwardsAdmin(admin.ModelAdmin):
    fields = ['contest', 'team', 'description', 'award', 'etc']

admin.site.register(Awards)