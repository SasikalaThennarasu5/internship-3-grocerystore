from rest_framework import serializers
from .models import Wishlist

class WishlistSerializer(serializers.ModelSerializer):

    product_name = serializers.CharField(source="product.name")
    price = serializers.DecimalField(source="product.price", max_digits=10, decimal_places=2)
    product_image = serializers.SerializerMethodField()

    class Meta:
        model = Wishlist
        fields = [
            "id",
            "product",
            "product_name",
            "product_image",
            "price",
            "created_at"
        ]

    def get_product_image(self, obj):

        image = obj.product.images.first()

        if image:
            return image.image.url

        return None