from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Wishlist
from products.models import Product
from .serializers import WishlistSerializer


class WishlistView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        wishlist_items = Wishlist.objects.filter(user=request.user)
        serializer = WishlistSerializer(wishlist_items, many=True)

        return Response(serializer.data)


class AddWishlistView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        product_id = request.data.get("product_id")

        product = Product.objects.get(id=product_id)

        Wishlist.objects.get_or_create(
            user=request.user,
            product=product
        )

        return Response({"message": "Product added to wishlist"})


class RemoveWishlistView(APIView):

    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):

        item = Wishlist.objects.get(id=pk)
        item.delete()

        return Response({"message": "Item removed from wishlist"})