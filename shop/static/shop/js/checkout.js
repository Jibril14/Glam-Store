
if(localStorage.getItem("cart") ==null){
    var cart ={}

}else{
    cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart)
}

var i = 0
for (item in cart){
    let name = cart[item][1]
    let quantity = cart[item][0]
    let price = cart[item][2]
    i += 1
   // itemToCheckout = `<p>${name} - ${quantity}- ${price}</p>`
    

   // itemToCheckout = `<p><a href="#">${name}</a> <span class="price">${quantity}</span <span class="price">&#8358 ${price}</span></p>`
   const cartEl = document.createElement('p')
   cartEl.className = 'cart-display'
   cartEl.innerHTML =`<a href="#">${name}</a> <span style="padding-left:14px" class="quantity">${quantity}x</span><span  class="price"><span>&#8358</span><span id="total-price">${price * quantity}</span></span>`
   const productCheckOut = document.getElementById("cart-container")
   productCheckOut.append(cartEl) 
}

const cartItemsNum = document.getElementById("cart-num")
cartItemsNum.innerHTML = i

var totalCartPrice = []
const totalPrice = document.querySelectorAll("#total-price")
totalPrice.forEach(val=>{
    let price = val.innerHTML
    let itemsPrice = Number(price)
    totalCartPrice.push(itemsPrice)
    console.log(typeof(itemsPrice))
})
 
function sumTotal(total, val){
 return total + val
}
const sumCart = totalCartPrice.reduce(sumTotal)
//console.log(sumCart)
const cartTotal = document.getElementById("cart-total")
cartTotal.innerHTML = sumCart

const cartItems = document.querySelector("#items-order").value = JSON.stringify(cart)
console.log(cartItems)

const clearCart = document.getElementById("clear-cart")
clearCart.addEventListener("click", ()=>{
    localStorage.clear("cart")
})


const thankYou = document.querySelector(".form-btn")
thankYou.addEventListener("click", ()=>{
    document.getElementById("thank-you").style.display = "block"
})