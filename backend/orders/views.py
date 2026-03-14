from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import ShippingAddressSerializer, OrderSerializer
from cart.models import Cart
from .models import Order, OrderItem, ShippingAddress
from products.models import Product
import razorpay
from django.conf import settings
from rest_framework.decorators import api_view
import hmac
import hashlib

class CreateOrderView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        address_id = request.data.get("address_id")
        payment_method = request.data.get("payment_method")
        items = request.data.get("items", [])

        if not address_id:
            return Response({"error": "Address ID is required"}, status=400)

        if not items:
            return Response({"error": "Cart is empty"}, status=400)

        try:
            shipping_address = ShippingAddress.objects.get(
                id=int(address_id),
                user=request.user
            )
        except ShippingAddress.DoesNotExist:
            return Response({"error": "Invalid address"}, status=404)

        total_price = 0

        order = Order.objects.create(
            user=request.user,
            shipping_address=shipping_address,
            payment_method=payment_method,
            total_price=0
        )

        for item in items:

            product_id = item.get("id")
            quantity = item.get("quantity")

            try:
                product = Product.objects.get(id=product_id)
            except Product.DoesNotExist:
                continue

            price = product.price
            total_price += price * quantity

            OrderItem.objects.create(
                order=order,
                product=product,
                quantity=quantity,
                price=price
            )

        order.total_price = total_price
        order.save()

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
    
client = razorpay.Client(auth=(
    settings.RAZORPAY_KEY_ID,
    settings.RAZORPAY_SECRET_KEY
))

@api_view(['POST'])
def create_razorpay_order(request):

    amount = request.data.get("amount")

    order = client.order.create({
        "amount": int(amount) * 100,
        "currency": "INR",
        "payment_capture": 1
    })

    return Response(order)

@api_view(['POST'])
def verify_payment(request):

    razorpay_order_id = request.data.get("razorpay_order_id")
    razorpay_payment_id = request.data.get("razorpay_payment_id")
    razorpay_signature = request.data.get("razorpay_signature")

    generated_signature = hmac.new(
        bytes(settings.RAZORPAY_SECRET_KEY, 'utf-8'),
        bytes(razorpay_order_id + "|" + razorpay_payment_id, 'utf-8'),
        hashlib.sha256
    ).hexdigest()

    if generated_signature == razorpay_signature:

        order = Order.objects.get(id=request.data.get("order_id"))
        order.status = "paid"
        order.save()

        return Response({"message":"Payment verified"})

    return Response({"error":"Payment verification failed"}, status=400)