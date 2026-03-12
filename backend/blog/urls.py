from django.urls import path
from .views import TestimonialListView

urlpatterns = [
path("api/testimonials/", TestimonialListView.as_view())
]