from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from shop.models import Products
from django.core.paginator import Paginator


def index(request):
    products = Products.objects.all()
    latest_sale = products.order_by("-price")[:4]
    item_name = request.GET.get('item_name')
    if item_name != "" and item_name is not None:
        products = products.filter(title__contains=item_name)
    
    paginator = Paginator(products, 4)
    page = request.GET.get("page")
    products = paginator.get_page(page)
    
    return render(request, "shop/index.html", {
        "products":products,
        "latest_sale":latest_sale
        })
