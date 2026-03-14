from rest_framework import generics
from .models import User, Profile
from .serializers import RegisterSerializer, ProfileSerializer
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.models import User
from django.http import HttpResponse


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class ProfileView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        profile, created = Profile.objects.get_or_create(user=request.user)
        serializer = ProfileSerializer(profile)

        return Response(serializer.data)

    def put(self, request):

        profile, created = Profile.objects.get_or_create(user=request.user)

        serializer = ProfileSerializer(profile, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)
    
class ChangePasswordView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        user = request.user

        old_password = request.data.get("old_password")
        new_password = request.data.get("new_password")

        if not user.check_password(old_password):
            return Response({"error": "Old password is incorrect"}, status=400)

        try:
            validate_password(new_password, user)
        except Exception as e:
            return Response({"error": str(e)}, status=400)

        user.set_password(new_password)
        user.save()

        update_session_auth_hash(request, user)

        return Response({"message": "Password updated successfully"})
    
def create_admin(request):
    if not User.objects.filter(username="admin").exists():
        User.objects.create_superuser(
            username="admin",
            email="admin@gmail.com",
            password="admin123"
        )
        return HttpResponse("Superuser created")
    return HttpResponse("Admin already exists")