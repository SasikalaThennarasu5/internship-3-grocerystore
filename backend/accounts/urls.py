from django.urls import path
from .views import RegisterView, ProfileView, ChangePasswordView, create_admin
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [

    path("register/", RegisterView.as_view()),
    
    path("profile/", ProfileView.as_view()),
    path("change-password/", ChangePasswordView.as_view()),
    path("create-admin/", create_admin),
]