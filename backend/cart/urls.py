from django.urls import path
from .views import CartView, AddToCartView, UpdateCartItemView, RemoveCartItemView, CartSummaryView

urlpatterns = [

    path("", CartView.as_view()),
    path("add/", AddToCartView.as_view()),
    path("update/", UpdateCartItemView.as_view()),
    path("remove/<int:item_id>/", RemoveCartItemView.as_view()),
    path("summary/", CartSummaryView.as_view())
]