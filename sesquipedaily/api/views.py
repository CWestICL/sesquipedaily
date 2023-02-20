from django.shortcuts import render
from rest_framework import generics
from .models import Puzzle
from .serializers import PuzzleSerializer


class PuzzleView(generics.CreateAPIView):
    queryset = Puzzle.objects.all()
    serializer_class = PuzzleSerializer
