from django.urls import path
from .views import (
    CreateOrderView,
    CreateShippingAddressView,
    OrderListView,
    OrderDetailView,
    create_razorpay_order,
    verify_payment,
    AddressListView,
    UpdateAddressView,
    DeleteAddressView
)

urlpatterns = [

    # Orders
    path("", OrderListView.as_view()),
    path("<int:pk>/", OrderDetailView.as_view()),
    path("create/", CreateOrderView.as_view()),

    # Razorpay
    path("razorpay/", create_razorpay_order),
    path("verify-payment/", verify_payment),

    # Address
    path("address/", CreateShippingAddressView.as_view()),   # POST create
    path("addresses/", AddressListView.as_view()),           # GET list
    path("address/<int:pk>/update/", UpdateAddressView.as_view()),
    path("address/<int:pk>/delete/", DeleteAddressView.as_view()),

]