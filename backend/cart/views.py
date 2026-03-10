from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer
from products.models import Product
from rest_framework.views import APIView





class CartView(generics.RetrieveAPIView):

    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        return cart


class AddToCartView(generics.CreateAPIView):

    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request):

        product_id = request.data.get("product")
        quantity = request.data.get("quantity", 1)

        cart, created = Cart.objects.get_or_create(user=request.user)
        product = Product.objects.get(id=product_id)

        cart_item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={"quantity": quantity}
)

        if not created:
           cart_item.quantity += int(quantity)
           cart_item.save()

        return Response({"message": "Product added to cart"})
    
class UpdateCartItemView(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request):

        item_id = request.data.get("item_id")
        quantity = request.data.get("quantity")

        try:
            cart_item = CartItem.objects.get(id=item_id, cart__user=request.user)
            cart_item.quantity = quantity
            cart_item.save()

            return Response({"message": "Cart updated successfully"})

        except CartItem.DoesNotExist:
            return Response({"error": "Cart item not found"}, status=404)


class RemoveCartItemView(APIView):

    permission_classes = [IsAuthenticated]

    def delete(self, request, item_id):

        try:
            cart_item = CartItem.objects.get(id=item_id, cart__user=request.user)
            cart_item.delete()

            return Response({"message": "Item removed from cart"})

        except CartItem.DoesNotExist:
            return Response({"error": "Cart item not found"}, status=404)
    
class CartSummaryView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        try:
            cart = Cart.objects.get(user=request.user)
        except Cart.DoesNotExist:
            return Response({
                "items": [],
                "summary": {
                    "subtotal": 0,
                    "shipping": 0,
                    "tax": 0,
                    "discount": 0,
                    "total": 0
                }
            })

        cart_items = cart.items.all()

        items = []
        subtotal = 0

        for item in cart_items:
            item_total = item.product.price * item.quantity
            subtotal += item_total

            items.append({
                "product_id": item.product.id,
                "product_name": item.product.name,
                "price": item.product.price,
                "quantity": item.quantity,
                "total": item_total
            })

        shipping = 0
        tax = 0
        discount = 0

        total = subtotal + shipping + tax - discount

        return Response({
            "items": items,
            "summary": {
                "subtotal": subtotal,
                "shipping": shipping,
                "tax": tax,
                "discount": discount,
                "total": total
            }
        })
