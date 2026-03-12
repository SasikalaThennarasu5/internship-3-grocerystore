from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
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
        
        # Check if cart is empty
        if not cart.items.exists():
            return Response({"error": "Cart is empty"}, status=400)

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
    "order_id": order.id,
    "total_price": order.total_price,
    "payment_method": order.payment_method,
    "status": order.status
})
    


class CreateShippingAddressView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = ShippingAddressSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(user=request.user)   # 🔥 attach logged in user
            return Response(serializer.data)

        return Response(serializer.errors, status=400)
    
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
    
class TrackOrderView(APIView):

    def post(self, request):

        order_id = request.data.get("order_id")
        email = request.data.get("email")

        try:
            order = Order.objects.get(
                id=order_id,
                shipping_address__email=email
            )

            serializer = OrderSerializer(order)

            return Response(serializer.data)

        except Order.DoesNotExist:
            return Response({"error": "Order not found"}, status=404)
        
class AddressListView(ListAPIView):

    serializer_class = ShippingAddressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return ShippingAddress.objects.filter(user=self.request.user)
    
class UpdateAddressView(UpdateAPIView):

    serializer_class = ShippingAddressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return ShippingAddress.objects.filter(user=self.request.user)
    
class DeleteAddressView(DestroyAPIView):

    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return ShippingAddress.objects.filter(user=self.request.user)