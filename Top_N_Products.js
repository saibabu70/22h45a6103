
// array of objects representing E-commerce product information
const Test_Ecommerce_API = [{
  "productName": "Laptop 1",
  "price": 2336,
  "rating": 4.7,
  "discount": "63",
  "availability": "yes"
},
{
  "productName": "Laptop 13",
  "price": 1244,
  "rating": 4.7,
  "discount": "45",
  "availability": "out-of-stock"
},
{
  "productName": "Laptop 11",
  "price": 5111,
  "rating": 3.67,
  "discount": 27,
  "availability": "out-of-stock"
},
{
  "productName": "Laptop 10",
  "price": 4101,
  "rating": 2.67,
  "discount": 37,
  "availability": "out-of-stock"
},
{
  "productName": "Laptop 2",
  "price": 4101,
  "rating": 2.67,
  "discount": 37,
  "availability": "yes"
}
];

console.log(Test_Ecommerce_API[0].discount);

Test_Ecommerce_API.forEach(item => {
console.log("Item discounts",item.discount);
console.log("Product Ratings",item.rating);
});
