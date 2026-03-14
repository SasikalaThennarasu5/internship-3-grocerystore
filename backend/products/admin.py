from django.contrib import admin
from .models import Category, Product, ProductImage


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 4


class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "price", "stock", "is_available", "is_featured", "is_best_seller")
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}
    list_filter = ("category", "is_available")
    inlines = [ProductImageInline]


admin.site.register(Category)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage)