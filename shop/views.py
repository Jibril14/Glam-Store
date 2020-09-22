from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from shop.models import Products, Order
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

def shop(request):
    all_products = Products.objects.all()
    return render(request, "shop/shop.html", {"all_products":all_products})

def product_detail(request, pk):
    single_product = Products.objects.get(id=pk)
    return render(request, "shop/detail.html", {"single_product":single_product})

def checkout(request):

    if request.method == "POST":
        items = request.POST.get("items", "")
        name = request.POST.get("name", "")
        email = request.POST.get("email", "")
        address = request.POST.get("address", "")
        city = request.POST.get("city", "")
        state = request.POST.get("state", "")
        zipcode = request.POST.get("zipcode", "")
    
        order = Order(items=items, name=name, email=email, address=address, city=city, state=state, zipcode=zipcode)
        order.save()
    return render(request, "shop/checkout.html")

