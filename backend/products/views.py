from django.shortcuts import render
from django.core import serializers
from .models import Question
from django.http import JsonResponse
 
def question(req):
    data = serializers.serialize('json', Question.objects.all())
    return JsonResponse(data,safe=False)
