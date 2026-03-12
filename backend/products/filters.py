import django_filters
from .models import Product


class ProductFilter(django_filters.FilterSet):

    price_min = django_filters.NumberFilter(field_name="price",lookup_expr="gte")
    price_max = django_filters.NumberFilter(field_name="price",lookup_expr="lte")

    rating = django_filters.NumberFilter(field_name="rating",lookup_expr="gte")

    in_stock = django_filters.BooleanFilter(method="filter_stock")

    brand = django_filters.BaseInFilter(field_name="brand",lookup_expr="in")

    category = django_filters.BaseInFilter(field_name="category",lookup_expr="in")


    def filter_stock(self,queryset,name,value):

        if value:
            return queryset.filter(stock__gt=0)

        return queryset


    class Meta:
        model = Product
        fields = []