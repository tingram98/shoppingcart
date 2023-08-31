# Shopping Cart JavaScript Functions

This JavaScript code provides a set of functions for managing a shopping cart. It includes functionalities for adding, increasing, decreasing, and removing products from the cart, calculating the cart total, handling payments, and more.

## Table of Contents

- [Introduction](#introduction)
- [Functions](#functions)
  - [findItem](#finditem)
  - [addProductToCart](#addproducttocart)
  - [increaseQuantity](#increasequantity)
  - [decreaseQuantity](#decreasequantity)
  - [removeProductFromCart](#removeproductfromcart)
  - [cartTotal](#carttotal)
  - [emptyCart](#emptycart)
  - [pay](#pay)
- [Unit Tests](#unit-tests)

## Introduction

The provided JavaScript code defines an array of `products` and various functions to interact with a shopping cart. Each product in the `products` array includes details such as name, price, quantity, and an image link. The functions allow you to manipulate the cart by adding, updating, and removing products, calculating the cart total, handling payments, and more.

## Functions

### `findItem`

This function takes a `productId` and returns the corresponding product object from the `products` array.

### `addProductToCart`

This function takes a `productId` and adds the corresponding product to the cart. If the product is already in the cart, its quantity is increased.

### `increaseQuantity`

This function takes a `productId` and increases the quantity of the corresponding product in the cart.

### `decreaseQuantity`

This function takes a `productId` and decreases the quantity of the corresponding product in the cart. If the quantity reaches 0, the product is removed from the cart.

### `removeProductFromCart`

This function takes a `productId` and removes the corresponding product from the cart.

### `cartTotal`

This function calculates and returns the total price of all products in the cart.

### `emptyCart`

This function empties the cart by removing all products.

### `pay`

This function takes an `amount` and processes a payment. It updates the total amount paid and returns the remaining balance or change. If the payment covers the cart total, the cart is emptied.

## Unit Tests

The code is designed to be tested using unit tests. The provided `module.exports` object exposes the functions for testing purposes. To run the tests, use the command:

```bash
npm run test


# Note
The `script.js` page was coded by the author, the rest of the files were provided by Udacity.
