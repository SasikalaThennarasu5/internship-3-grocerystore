from django.urls import path
from .views import WishlistView, AddToWishlistView, RemoveWishlistView


urlpatterns = [
    path("", WishlistView.as_view()),
    path("add/", AddToWishlistView.as_view()),
    path("remove/<int:product_id>/", RemoveWishlistView.as_view()),
]