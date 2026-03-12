from rest_framework import generics
from .models import Category, Product
from .serializers import CategorySerializer, CategoryProductSerializer, ProductSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import OrderingFilter
from .filters import ProductFilter
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryProductsView(generics.ListAPIView):
    serializer_class = CategoryProductSerializer

    def get_queryset(self):
        category_id = self.kwargs["pk"]
        return Product.objects.filter(category_id=category_id)
    
class ProductPagination(PageNumberPagination):
    page_size = 8


class ProductListView(ListAPIView):

    queryset = Product.objects.all()

    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    filter_backends = [
        DjangoFilterBackend,
        OrderingFilter
    ]

    filterset_class = ProductFilter

    ordering_fields = [
        "price",
        "rating",
        "created_at"
    ]


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer