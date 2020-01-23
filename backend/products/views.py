from django.shortcuts import render
from django.core import serializers
from .models import Question
from .models import Score
from django.http import JsonResponse
 
def question(req):
    data = serializers.serialize('json', Question.objects.all())
    data = data.replace("\\\\","\\")
    return JsonResponse(data,safe=False)


def score(req):
    data = serializers.serialize('json', Score.objects.all())
    return JsonResponse(data,safe=False)
