from django.db import models
from django.contrib.auth.models import User
import random
import os

abs_path = os.path.dirname(__file__)
rel_path = "../wordlist.txt"
path = os.path.join(abs_path, rel_path)

word_list_file = open(path, "r")
word_list = word_list_file.read().split("\n")


def generate_puzzle():
    VOWELS = "aaeeeiioou".upper()
    CONSONANTS = "bbccddddffggghhjkllllmmnnnnnppqrrrrrrssssttttttvvwwxyyz".upper()

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

    solutions = get_puzzle_solutions(shuffled)
    scores = get_puzzle_scores(solutions)

    if assess_puzzle_scores(scores) > 19:
        return shuffled

    return generate_puzzle()


def get_puzzle_solutions(letters):
    solutions = []
    for word in word_list:
        check = False
        for char in word:
            if word.count(char) > letters.count(char):
                check = True
        if not check:
            solutions.append(word)
    return solutions


def get_puzzle_scores(solutions):
    count = {}
    for x in range(16):
        num = 0
        for word in solutions:
            if len(word) == x + 1:
                num += 1
        if num > 0:
            count["{}".format(x + 1)] = num
    return count


def assess_puzzle_scores(scores):
    score_sum = 0

    for x in range(9):
        key = str(16 - x)

        if key in scores:
            score_sum += scores[key]

    return score_sum


# Create your models here.
class Puzzle(models.Model):
    puzzle = models.CharField(max_length=16, default=generate_puzzle)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)

    @property
    def day(self):
        return self.created_at.date()

    @property
    def solutions(self):
        return sorted(get_puzzle_solutions(self.puzzle), key=len, reverse=True)

    @property
    def scores(self):
        return get_puzzle_scores(self.solutions)

    @property
    def max_score(self):
        return len(self.solutions[0])

    def __str__(self):
        return f"{self.day} - {self.puzzle}"


class Answer(models.Model):
    puzzle = models.ForeignKey(Puzzle, on_delete=models.CASCADE, default=None)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    answer = models.CharField(max_length=16)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)

    @property
    def score(self):
        return len(self.answer)

    @property
    def max_score(self):
        if self.score == self.puzzle.max_score:
            return True
        else:
            return False

    def __str__(self):
        return f"{self.answer} - {self.user} ({self.puzzle.day})"
