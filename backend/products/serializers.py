from rest_framework import serializers
from .models import Category, Product, ProductImage

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["image"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "image", "product_count"]

class CategoryProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "price",
            "images"
        ]

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "description",
            "price",
            "category",
            "images",
            "created_at",
        ]