from django.urls import path
from shop import views
urlpatterns = [ 
     path('', views.index, name="home"),
     path('products', views.shop, name="shop"),
     path('<int:pk>', views.product_detail, name="detail"),
     path('checkout', views.checkout, name="checkout"),
]
