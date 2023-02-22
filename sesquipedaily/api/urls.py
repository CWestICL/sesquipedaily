from django.urls import path, include
from .views import PuzzleView, CreateAnswerView

urlpatterns = [
    path("puzzles", PuzzleView.as_view()),
    path("create-answer", CreateAnswerView.as_view()),
]
