from django.shortcuts import render
from rest_framework import generics, status
from django.contrib.auth.models import User
from .models import Puzzle, Answer
from .serializers import PuzzleSerializer, AnswerSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from datetime import date


class PuzzleView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, puzzle_id, format=None):
        if Puzzle.objects.filter(pk=puzzle_id).exists():
            puzzle = Puzzle.objects.get(pk=puzzle_id)

            return Response(PuzzleSerializer(puzzle).data, status=status.HTTP_200_OK)

        else:
            return Response(
                {"error": "Puzzle not found"}, status=status.HTTP_400_BAD_REQUEST
            )


class PuzzleAnswersView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, puzzle_id, format=None):
        if Puzzle.objects.filter(pk=puzzle_id).exists():
            answers = Answer.objects.filter(puzzle=puzzle_id)

            return Response(
                AnswerSerializer(answers, many=True).data, status=status.HTTP_200_OK
            )

        else:
            return Response(
                {"error": "Puzzle not found"}, status=status.HTTP_400_BAD_REQUEST
            )


class DailyPuzzleView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Puzzle.objects.filter(
            created_at__year=date.today().year,
            created_at__month=date.today().month,
            created_at__day=date.today().day,
        ).exists():
            print("Puzzle found for today!")
            puzzle = Puzzle.objects.get(
                created_at__year=date.today().year,
                created_at__month=date.today().month,
                created_at__day=date.today().day,
            )

            return Response(PuzzleSerializer(puzzle).data, status=status.HTTP_200_OK)

        else:
            print("New puzzle created!")
            puzzle = Puzzle()
            puzzle.save()

        return Response(PuzzleSerializer(puzzle).data, status=status.HTTP_200_OK)


class AnswerView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data

        answer = data["answer"]
        puzzle_id = data["puzzle_id"]

        if Puzzle.objects.filter(pk=puzzle_id).exists():
            puzzle = Puzzle.objects.get(pk=puzzle_id)

            user = User.objects.get(pk=3)

            new_answer = Answer(answer=answer, puzzle=puzzle, user=user)
            new_answer.save()

            return Response(
                {
                    "success": "User created successfully",
                    "answer": AnswerSerializer(new_answer).data,
                },
                status=status.HTTP_201_CREATED,
            )

        else:
            return Response(
                {"error": "Puzzle not found"}, status=status.HTTP_400_BAD_REQUEST
            )

        """
                    return Response({"error": "Password must be at least 6 characters"})
                else:
                    user = User.objects.create_user(
                        username=username, password=password
                    )

                    user.save()

                    user = User.objects.get(id=user.id)

                    user_profile = UserProfile(user=user, display_name="")
                    user_profile.save()

                    return Response({"success": "User created successfully"})
            # except:
            return Response({"error": "Registration error"})
        else:
            return Response({"error": "Passwords do not match"})


"""
