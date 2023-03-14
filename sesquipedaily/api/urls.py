from django.urls import path, include
from .views import PuzzleView, PuzzleAnswersView, DailyPuzzleView, AnswerView

urlpatterns = [
    path("puzzles/<int:puzzle_id>", PuzzleView.as_view()),
    path("puzzles/<int:puzzle_id>/answers", PuzzleAnswersView.as_view()),
    path("puzzles/daily", DailyPuzzleView.as_view()),
    path("answers", AnswerView.as_view()),
]
