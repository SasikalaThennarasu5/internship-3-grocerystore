from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import ShippingAddressSerializer, OrderSerializer
from cart.models import Cart
from .models import Order, OrderItem, ShippingAddress

class CreateOrderView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        address_id = request.data.get("address_id")
        payment_method = request.data.get("payment_method")

        # Validate address_id
        if not address_id:
            return Response({"error": "Address ID is required"}, status=400)

        # Get user's cart
        try:
            cart = Cart.objects.get(user=request.user)
        except Cart.DoesNotExist:
            return Response({"error": "Cart not found"}, status=404)

        # Get shipping address
        try:
            shipping_address = ShippingAddress.objects.get(
                id=int(address_id),
                user=request.user
            )
        except (ShippingAddress.DoesNotExist, ValueError):
            return Response({"error": "Invalid address"}, status=404)

        # Calculate total
        total_price = 0
        for item in cart.items.all():
            total_price += item.product.price * item.quantity

        # Create order
        order = Order.objects.create(
            user=request.user,
            shipping_address=shipping_address,
            payment_method=payment_method,
            total_price=total_price
        )

        # Create order items
        for item in cart.items.all():
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price
            )

        # Clear cart
        cart.items.all().delete()

        return Response({
            "message": "Order created successfully",
            "order_id": order.id
        })
    
class CreateShippingAddressView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = ShippingAddressSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)

        return Response(serializer.errors)
    
class OrderListView(ListAPIView):

    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user).order_by("-created_at")
    
class OrderDetailView(RetrieveAPIView):

    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)