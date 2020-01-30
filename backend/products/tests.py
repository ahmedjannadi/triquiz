import json
from django.test import TestCase
from django.http import request
from products import views

def is_json(data):
	try:
		json.loads(data)
	except ValueError as e:
		return False
	return True

class JsonTestCase(TestCase):
	def test_json(self):
		self.assertTrue(views.question(request))
