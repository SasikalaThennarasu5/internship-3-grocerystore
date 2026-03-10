from rest_framework import generics
from .models import Category, Product
from .serializers import CategorySerializer, CategoryProductSerializer, ProductSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.pagination import PageNumberPagination


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


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    pagination_class = ProductPagination

    filter_backends = [DjangoFilterBackend, SearchFilter]

    filterset_fields = ["category"]

    search_fields = ["name", "description"]


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer