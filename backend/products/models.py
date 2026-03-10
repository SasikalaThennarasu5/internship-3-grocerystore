from django.db import models
from django.utils.text import slugify
from django.conf import settings


class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to="categories/")
    product_count = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class Product(models.Model):

    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    name = models.CharField(max_length=300)
    slug = models.SlugField(unique=True)

    description = models.TextField()

    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    stock = models.IntegerField(default=0)

    is_available = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
    
class ProductImage(models.Model):

    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')

    image = models.ImageField(upload_to='products/')

    def __str__(self):
        return self.product.name
    
class Review(models.Model):

    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    rating = models.IntegerField()

    comment = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product.name