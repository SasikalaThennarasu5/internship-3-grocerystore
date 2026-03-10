from rest_framework import serializers
from .models import User
from .models import Profile

class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["id", "email", "username", "password"]

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data["email"],
            username=validated_data["username"],
            password=validated_data["password"]
        )
        return user
    
class ProfileSerializer(serializers.ModelSerializer):

    first_name = serializers.CharField(source="user.first_name")
    last_name = serializers.CharField(source="user.last_name")
    email = serializers.EmailField(source="user.email")

    class Meta:
        model = Profile
        fields = ["first_name", "last_name", "email", "phone", "gender"]

    def update(self, instance, validated_data):

        user_data = validated_data.pop("user")

        user = instance.user
        user.first_name = user_data.get("first_name", user.first_name)
        user.last_name = user_data.get("last_name", user.last_name)
        user.email = user_data.get("email", user.email)
        user.save()

        instance.phone = validated_data.get("phone", instance.phone)
        instance.gender = validated_data.get("gender", instance.gender)
        instance.save()

        return instance