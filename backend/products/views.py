from rest_framework import generics
from .models import Category, Product, Brand
from .serializers import CategorySerializer, CategoryProductSerializer, ProductSerializer, BrandSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import OrderingFilter
from .filters import ProductFilter
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

class ProductPagination(PageNumberPagination):
    page_size = 8

class BrandListView(ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [AllowAny]

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]



class CategoryProductsView(generics.ListAPIView):
    serializer_class = CategoryProductSerializer
    permission_classes = [AllowAny]
    pagination_class = ProductPagination

    def get_queryset(self):
        category_id = self.kwargs["pk"]
        return Product.objects.filter(category_id=category_id)
    
class ProductListView(ListAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    pagination_class = ProductPagination
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
    permission_classes = [AllowAny]

@api_view(["GET"])
@permission_classes([AllowAny])
def featured_products(request):

    products = Product.objects.filter(is_featured=True)

    serializer = ProductSerializer(products, many=True, context={"request": request})
    

    return Response(serializer.data)

@api_view(["GET"])
@permission_classes([AllowAny])
def best_seller_products(request):

    products = Product.objects.filter(is_best_seller=True)

    serializer = ProductSerializer(products, many=True, context={"request": request})
    

    return Response(serializer.data)