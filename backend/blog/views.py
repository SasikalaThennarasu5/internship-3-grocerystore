# views.py

from rest_framework.generics import ListAPIView
from .models import Testimonial
from .serializers import TestimonialSerializer

class TestimonialListView(ListAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer