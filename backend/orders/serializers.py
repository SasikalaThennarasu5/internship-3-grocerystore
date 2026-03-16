from rest_framework import serializers
from .models import Order, OrderItem, ShippingAddress


class OrderItemSerializer(serializers.ModelSerializer):

    product_name = serializers.CharField(source="product.name")
    product_image = serializers.SerializerMethodField()
    product_slug = serializers.CharField(source="product.slug")
    class Meta:
        model = OrderItem
        fields = [
            "id",
            "product",
            "product_name",
            "product_image",
            "product_slug",
            "quantity",
            "price"
        ]

    def get_product_image(self, obj):
        image = obj.product.images.first()
        if image:
            return image.image.url
        return None


class OrderSerializer(serializers.ModelSerializer):

    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = "__all__"

class ShippingAddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShippingAddress
        fields = "__all__"
        read_only_fields = ["user"]