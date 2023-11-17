from django.urls import path

from feeds.views import home, contato, feeds

urlpatterns = [
    path('', home),
    path('contato/', contato),
    path('api/feeds/', feeds),
]
