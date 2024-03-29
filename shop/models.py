from django.db import models

# Create your models here.
class Products(models.Model):
    title = models.CharField(max_length=200)
    price = models.FloatField()
    discount_price = models.FloatField()
    category = models.CharField(max_length=200)
    description = models.TextField()
    Image = models.CharField(max_length=600, blank=True, default="https://res.cloudinary.com/webmonc/image/upload/v1661518048/portfolio/shopify-ng/1_zm64ab.jpg")

    def __str__(self):
        return self.title


class Order(models.Model):
    items = models.CharField(max_length=1200)
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    address = models.CharField(max_length=500)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    zipcode = models.CharField(max_length=200)