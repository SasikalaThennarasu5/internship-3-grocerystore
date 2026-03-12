from django.urls import path
from .views import (
    ProductListView,
    ProductDetailView,
    CategoryListView,
    CategoryProductsView
)

urlpatterns = [

    path("products/",ProductListView.as_view()),
    path("<int:pk>/", ProductDetailView.as_view()),

    path("categories/", CategoryListView.as_view()),
    path("categories/<int:pk>/products/", CategoryProductsView.as_view()),

]