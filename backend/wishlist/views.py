from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Wishlist
from .serializers import WishlistSerializer


class WishlistView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        items = Wishlist.objects.filter(user=request.user)
        serializer = WishlistSerializer(items, many=True)

        return Response(serializer.data)


class AddToWishlistView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        product_id = request.data.get("product")

        Wishlist.objects.get_or_create(
            user=request.user,
            product_id=product_id
        )

        return Response({"message": "Added to wishlist"})


class RemoveWishlistView(APIView):

    permission_classes = [IsAuthenticated]

    def delete(self, request, product_id):

        Wishlist.objects.filter(
            user=request.user,
            product_id=product_id
        ).delete()

        return Response({"message": "Removed from wishlist"})