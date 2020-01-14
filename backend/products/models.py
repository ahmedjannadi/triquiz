from django.db import models

# Create your models here.

class Question(models.Model):
    title = models.CharField(max_length=200) 
    rep1 = models.CharField(max_length=200)
    rep2 = models.CharField(max_length=200)
    rep3 = models.CharField(max_length=200)
    difficulty = models.TextField(choices=(("hard","hard"),("medium","medium"),("easy","easy")))

    def __str__(self):
        return self.title

class Score(models.Model):
    score = models.FloatField()
    id_user = models.CharField(max_length=50)
    score_date= models.DateTimeField(("time"), auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.score