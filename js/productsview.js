const productsCentre=document.querySelector(".products_centre");
import Storage from "./storage.js";
let cart=[];

class ProductsView{
    displayProducts(products){
        let result="";
        products.forEach(pItem => {
            result+=`<div class="single_product">
                <span class="product_img">
                  <img src=${pItem.img} alt="" />
                </span>
                <span class="product_details">
                  <p class="product-name">${pItem.title}</p>
                  <p class="product-price">${pItem.price}$</p>
                </span>
                <button class="product_btn" data-id=${pItem.id}>Add to basket</button>
              </div>`;
        });
        productsCentre.innerHTML=result;
        }
        getAddToCartBtns(){
            const addBtns=document.querySelectorAll(".product_btn");
            addBtns.forEach(btn=>{
                const id=btn.dataset.id;
                const isInCart=cart.find(cItem=>cItem.id==id);
                if(isInCart){
                    btn.innerText="In cart";
                    btn.disabled=true;
                }
                else {
                    btn.addEventListener("click",()=>{
                    const product=Storage.findProduct(id);
                    btn.innerText="In cart";
                    btn.disabled=true;       
                    const productToAdd={...product,quantity:1};
                    cart=[...cart,productToAdd];
                    Storage.saveCart(cart);
                    });
                }
            });
            }

}
export default new ProductsView();