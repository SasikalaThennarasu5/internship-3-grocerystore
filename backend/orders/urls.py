from django.urls import path
from .views import CreateOrderView, CreateShippingAddressView, OrderListView,OrderDetailView

urlpatterns = [

    path("create/", CreateOrderView.as_view()),
    path("address/", CreateShippingAddressView.as_view()),
    path("", OrderListView.as_view()),          # order history
    path("<int:pk>/", OrderDetailView.as_view())  # order details
    

]