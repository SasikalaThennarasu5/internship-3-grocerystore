from django.urls import path
from .views import (
    ProductListView,
    ProductDetailView,
    CategoryListView,
    CategoryProductsView,
    featured_products,
    best_seller_products,
    BrandListView,
)

urlpatterns = [

    # PRODUCTS
    path("", ProductListView.as_view()),
    path("<int:pk>/", ProductDetailView.as_view()),

    # BRANDS
    path("brands/", BrandListView.as_view()),

    # CATEGORIES
    path("categories/", CategoryListView.as_view()),
    path("categories/<int:pk>/products/", CategoryProductsView.as_view()),

    # HOMEPAGE
    path("featured/", featured_products),
    path("best-sellers/", best_seller_products),

]