from rest_framework import serializers
from .models import Puzzle, Answer


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ("id", "answer", "score", "max_score", "created_at", "user")
        depth = 1


class PuzzleSerializer(serializers.ModelSerializer):
    answer_set = AnswerSerializer(many=True)

    class Meta:
        model = Puzzle
        fields = (
            "id",
            "puzzle",
            "day",
            "answer_set",
            "solutions",
            "scores",
            "max_score",
            "created_at",
        )
