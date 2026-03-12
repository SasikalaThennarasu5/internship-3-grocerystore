from django.db import models
from django.conf import settings

class Blog(models.Model):

    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to="blogs/")
    content = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    message = models.TextField()
    rating = models.IntegerField(default=5)
    image = models.ImageField(upload_to="testimonials/")

    def __str__(self):
        return self.name