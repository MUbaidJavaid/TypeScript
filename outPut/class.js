"use strict";
class Product {
    proId;
    productName;
    price;
    addToCart = false;
    constructor(proId, productName, price) {
        this.proId = proId;
        this.productName = productName;
        this.price = price;
    }
    addCart() {
        this.addToCart = true;
        console.log(`${this.productName} has been added to the cart.`);
    }
    inOrder() {
        if (this.addToCart) {
            return (`${this.productName} is in the order. ${this.proId} - ${this.price}`);
        }
        else {
            return (` is not in the order.`);
        }
    }
}
class Order extends Product {
    constructor() {
        super(101, "Best Product", 111110);
    }
    getOrderDetails() {
        return `Order Details: ${this.productName}  Price: $${this.price}`;
    }
}
// var product1 = new Product(1, "Laptop", 1000);
// var product2 = new Product(2, "Smartphone", 500);
// var product3 = new Product(3, "Tablet", 300);
// product1.addCart();
// product2.addCart();
// product3.addCart();
// console.log(product1.inOrder());
// console.log(product2.inOrder());
// console.log(product3.inOrder());
var Order1 = new Order();
console.log(Order1.getOrderDetails());
