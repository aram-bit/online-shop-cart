import Storage from "./storage.js";
document.addEventListener("DOMContentLoaded",()=>{
    Storage.saveProducts(Storage.getProducts());
})