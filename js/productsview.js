const productsCentre=document.querySelector(".products_centre");
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

}
export default new ProductsView();