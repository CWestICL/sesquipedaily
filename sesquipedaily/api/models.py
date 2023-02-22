from django.db import models
import random


def generate_puzzle():
    VOWELS = "aaeeeiioou"
    CONSONANTS = "bbccddddffggghhjkllllmmnnnnnppqrrrrrrssssttttttvvwwxyyz"

    letters = ""

    for x in range(5):
        char = random.choice(VOWELS)
        letters += char

    for x in range(6):
        char = random.choice(CONSONANTS)
        letters += char

    for x in range(5):
        category = random.choice([VOWELS, CONSONANTS])
        char = random.choice(category)
        letters += char

    shuffled = "".join(random.sample(letters, len(letters)))
    return shuffled.capitalize()


# Create your models here.
class Puzzle(models.Model):
    puzzle = models.CharField(max_length=16, default=generate_puzzle)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)


class Answer(models.Model):
    puzzle = models.CharField(max_length=16, default=generate_puzzle)
    user = models.CharField(max_length=50)
    answer = models.CharField(max_length=16)
    score = models.IntegerField(null=False, default=False)
    max_score = models.BooleanField(null=False, default=False)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
