const productsData=[
    {
        id:1,
        title:"Rama brand",
        price:10.99,
        img:"/images/1.jpg"
    },
    {
        id:2,
        title:"Niki brand",
        price:16.99,
        img:"/images/2.jpg"
    }
    ,
    {
        id:3,
        title:"Araz brand",
        price:18.99, 
        img:"/images/3.jpg"
    }
    ,
    {
        id:4,
        title:"Zara brand",
        price:10.99,
        img:"/images/4.jpg"
    },
    {
        id:6,
        title:"Nike brand",
        price:14.99,
        img:"/images/6.jpg"
    },
    {
        id:7,
        title:"D&G brand",
        price:17.99,
        img:"/images/7.webp"
    }
];
export default class Storage{
static getProducts(){
    return productsData;
}
static saveProducts(products){
    localStorage.setItem("products",JSON.stringify(products));
}
static findProduct(id){
    const products=JSON.parse(localStorage.getItem("products"));
    return products.find(p=>p.id==(id));
}
static saveCart(cart){
    localStorage.setItem("cart",JSON.stringify(cart));
}

}