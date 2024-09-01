const cartItems=document.querySelector(".cart-items");
const cartContent=document.querySelector(".cart-content");
const cartTotal=document.querySelector(".cart-total");
const basket=document.querySelector(".cart-btn");
const backDrop=document.querySelector(".backdrop");
const cartPage=document.querySelector(".cart");
const confirm=document.querySelector(".confirm-btn");
const clearCart=document.querySelector(".clear-btn");
import Storage from "./storage.js";
class CartView{
    constructor(){
        basket.addEventListener("click",()=>this.showCart());
        backDrop.addEventListener("click",()=>this.closeCart());
        confirm.addEventListener("click",()=>this.closeCart());
        clearCart.addEventListener("click",()=>this.clearCartFunc());
    }
    setCartValue(cart){
        let tempCartItems=0;
        const totalPrice=cart.reduce((acc,curr)=>{
        tempCartItems+=curr.quantity;
        return acc+curr.quantity*curr.price;
        },0);
        cartItems.innerText=tempCartItems;
        cartTotal.innerText= `total price:${totalPrice.toFixed(2)}`;
    }
    displayCart(_cart){
        let result="";
    _cart.forEach(cartItem => {
    result+=`<div class="cart-item">
              <span class="cart-item-img">
                <img src=${cartItem.img} alt="" />
              </span>
              <span class="cart-item-detail">
                <p class="cart-item-name">${cartItem.title}</p>
                <p class="cart-item-price">${cartItem.price}$</p>
              </span>
              <span class="cart-item-ctrl">
                <img src="/images/angle-up.svg" alt="" class="cart-item-inc" data-id=${cartItem.id} />
                <p class="cart-item-quantity">${cartItem.quantity}</p>
                <img
                  src="/images/angle-down.svg"
                  alt=""
                  class="cart-item-dec"
                  data-id=${cartItem.id}
                />
              </span>
              <span class="cart-item-remove" data-id=${cartItem.id}>
                <img src="/images/trash-can.svg" alt="" />
              </span>
            </div>`;
            
          });
          cartContent.innerHTML=result;
    }
    showCart(){
        cartPage.style.opacity="1";
        backDrop.style.display="block";
    }
    closeCart(){
        backDrop.style.display="none";
        cartPage.style.opacity="0"
    }
    clearCartFunc(){
        Storage.getCart().forEach(cartItem=>this.removeCartItem(cartItem.id));
    }
    removeCartItem(id){
       const filteredCart=Storage.getCart().filter(item=>item.id!==id);
       Storage.saveCart(filteredCart);
       this.setCartValue(filteredCart);
       this.displayCart(filteredCart);
    }

}
export default new CartView();