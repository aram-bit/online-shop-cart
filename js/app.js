import Storage from "./storage.js";
import productsview from "./productsview.js";
document.addEventListener("DOMContentLoaded",()=>{
    Storage.saveProducts(Storage.getProducts());
    productsview.displayProducts(Storage.getProducts());
    productsview.getAddToCartBtns();
})