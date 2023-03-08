from django.urls import path
from .views import (
    RegisterView,
    GetCSRFToken,
    GetUsersView,
    LoginView,
    LogoutView,
    CheckAuthenticatedView,
    DeleteAccountView,
)

urlpatterns = [
    path("register", RegisterView.as_view()),
    path("csrf", GetCSRFToken.as_view()),
    path("users", GetUsersView.as_view()),
    path("auth", CheckAuthenticatedView.as_view()),
    path("login", LoginView.as_view()),
    path("logout", LogoutView.as_view()),
    path("delete", DeleteAccountView.as_view()),
]
