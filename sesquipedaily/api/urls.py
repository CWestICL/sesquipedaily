from django.urls import path, include
from .views import PuzzleView

urlpatterns = [
    path("puzzles", PuzzleView.as_view()),
]
