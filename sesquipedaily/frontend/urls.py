from django.urls import path
from .views import index

urlpatterns = [
    path("", index),
    path("daily", index),
    path("leaderboard", index),
]
