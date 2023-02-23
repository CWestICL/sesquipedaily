from django.shortcuts import render
from rest_framework import generics, status
from .models import Puzzle, Answer
from .serializers import PuzzleSerializer, AnswerSerializer, CreateAnswerSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class PuzzleView(generics.CreateAPIView):
    queryset = Puzzle.objects.all()
    serializer_class = PuzzleSerializer


class AnswerView(generics.CreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer


class CreateAnswerView(APIView):
    serializer_class = CreateAnswerSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            answer = serializer.data.get("answer")
            user = self.request.session.session_key

            new_answer = Answer(answer=answer, user=user)
            new_answer.save()
            return Response(
                AnswerSerializer(new_answer).data, status=status.HTTP_201_CREATED
            )

        return Response(
            {"Bad Request": "Invalid data..."}, status=status.HTTP_400_BAD_REQUEST
        )
