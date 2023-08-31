
const products = [
  {
    name: "cherry",
    price: 4,
    quantity: 0,
    productId: 4775738,
    image: "images/cherry.jpg",
  },
  {
    name: "orange",
    price: 10,
    quantity: 0,
    productId: 477343238,
    image: "images/orange.jpg",
  },
  {
    name: "strawberry",
    price: 5,
    quantity: 0,
    productId: 9499392,
    image: "images/strawberry.jpg",
  },
];
  /* Images provided in /images folder. All images from Unsplash.com
     - cherry.jpg by Mae Mu
     - orange.jpg by Mae Mu
     - strawberry.jpg by Allec Gomes
  */
  // Create a helper function(findId) to locate productId for cart functionality

function findItem(productId) {
  return products.find((products) => products.productId === productId);
}
/* Declare an empty array named cart to hold the items in the cart */
let cart= [];
 
  /* Create a function named addProductToCart that takes in the product productId as an argument
    - addProductToCart should get the correct product based on the productId
    - addProductToCart should then increase the product's quantity
    - if the product is not already in the cart, add it to the cart
  */
function addProductToCart(productId) {
  const products = findItem(productId);
  products.quantity += 1;
  if (!cart.includes(products))
 {
   cart.push(products);
 }
}
 /* Create a function named increaseQuantity that takes in the productId as an argument
    - increaseQuantity should get the correct product based on the productId
    - increaseQuantity should then increase the product's quantity
  */
  //add products to cart
function increaseQuantity(productId) {
  const products = findItem(productId);
  products.quantity += 1;
}

  /* Create a function named decreaseQuantity that takes in the productId as an argument
    - decreaseQuantity should get the correct product based on the productId
    - decreaseQuantity should decrease the quantity of the product
    - if the function decreases the quantity to 0, the product is removed from the cart
  */
  //take away products from cart
function decreaseQuantity(productId){
  const products = findItem(productId);
  products.quantity -= 1;
  if (products.quantity === 0){
    cart.splice(cart.indexOf(products), 1);
  }
}
 /* Create a function named removeProductFromCart that takes in the productId as an argument
    - removeProductFromCart should get the correct product based on the productId
    - removeProductFromCart should update the product quantity to 0
    - removeProductFromCart should remove the product from the cart
  */
  
//completely remove producrs from cart
function removeProductFromCart(productId) {
  const currentProduct = findItem(productId);
  currentProduct.quantity=0;
  cart.splice(cart.indexOf(currentProduct), 1);
}
  /* Create a function named cartTotal that has no parameters
    - cartTotal should iterate through the cart to get the total of all products
    - cartTotal should return the sum of the products in the cart
  */
 //number of products increases the total price
function cartTotal(){
  let grandTotal = 0;
  for(let p = 0; p < cart.length; p++) {
     grandTotal += cart[p].quantity * cart[p].price;
  }
  return grandTotal;
}

  /* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart.splice(0, cart.length);
}
 /* Create a function named pay that takes in an amount as an argument
    - pay will return a negative number if there is a remaining balance
    - pay will return a positive number if money should be returned to customer
  */
 //variable to track total paid
let totalPaid = 0

function pay(amount) {
  //add current payment amt to totalPaid variable
  totalPaid += amount;
  //calculate difference
 let remainder = totalPaid - cartTotal();
 //check if remaining amount is greater than or equal to 0
 if (remainder >= 0){
   totalPaid=0;
   emptyCart()
 }
 return remainder;
}
/* The following is for running unit tests. 
	 To fully complete this project, it is expected that all tests pass.
	 Run the following command in terminal to run tests
	 npm run test
  */
module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  emptyCart,
  pay,
};
  /* Uncomment the following line if completing the currency converter bonus */
  // currency


