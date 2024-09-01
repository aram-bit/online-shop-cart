const cartItems=document.querySelector(".cart-items");
class CartView{
    setCartValue(cart){
        let tempCartItems=0;
        const totalPrice=cart.reduce((acc,curr)=>{
        tempCartItems+=curr.quantity;
        return acc+curr.quantity*curr.price;
        },0);
        cartItems.innerText=tempCartItems;
    }

}
export default new CartView();