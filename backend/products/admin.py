from django.contrib import admin
from .models import Question
from .models import Score

# Register your models here.


admin.site.register(Question)
admin.site.register(Score)
