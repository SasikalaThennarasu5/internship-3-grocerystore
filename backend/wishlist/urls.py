from django.urls import path
from .views import WishlistView, AddWishlistView, RemoveWishlistView


urlpatterns = [

    path("", WishlistView.as_view()),
    path("add/", AddWishlistView.as_view()),
    path("remove/<int:pk>/", RemoveWishlistView.as_view()),

]