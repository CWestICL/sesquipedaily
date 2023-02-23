from rest_framework import serializers
from .models import Puzzle, Answer


class PuzzleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Puzzle
        fields = (
            "id",
            "puzzle",
            "day",
            "solutions",
            "scores",
            "max_score",
            "created_at",
        )


class CreatePuzzleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Puzzle


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ("id", "puzzle", "user", "answer", "score", "max_score", "created_at")


class CreateAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ("answer",)
