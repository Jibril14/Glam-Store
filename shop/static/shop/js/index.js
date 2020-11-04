const addToCartBtn = document.querySelectorAll(".cart-btn")
const CartHomeLink = document.querySelectorAll(".cart-link")





if(localStorage.getItem("cart") == null){
    var cart = {}

}else{
    cart = JSON.parse(localStorage.getItem("cart"))
}
console.log("From loc Storage", cart)

addToCartBtn.forEach((cartbtn) => {
    cartbtn.addEventListener("click", function(){
        console.log("Working....")
        console.log("Event Owner",this)
        var item_id  = this.id.toString()
        console.log("oop",item_id)
    
        if (cart[item_id] != undefined){ // A particular product id is present in cart
            

           quantity = cart[item_id][0] + 1
           cart[item_id][0] = quantity
           // key nqmw = quantity
           console.log("typequantity",typeof(quantity))
    
        }else {
            quantity = 1
            itemName = document.getElementById("nm"+item_id).innerHTML
            itemPrice = document.getElementById("pr"+item_id).innerHTML
            console.log("Price", itemPrice)
            cart[item_id]=[quantity, itemName, itemPrice]
            
        }
          console.log("cartp",cart)

          localStorage.setItem("cart", JSON.stringify(cart))
          CartHomeLink.forEach(a=> a.innerHTML = Object.keys(cart).length )
    })
    
})

   