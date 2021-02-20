from django.db import models

class Awards(models.Model):
    contest = models.CharField(max_length=200)
    team = models.CharField(max_length=200)
    description = models.TextField()
    award = models.CharField(max_length=200)
    etc = models.CharField(max_length=200)

    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.contest