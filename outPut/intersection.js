"use strict";
// intersction 
// This type combines properties from User and Product interfaces, along with additional properties orderId and productIds.
// It will have properties: id, username, email, orderId, userId, and productIds.
// Example usage
const infoUser = {
    name: "My API",
    version: "1.0.0",
    description: "This is a sample API for demonstration purposes.",
    id: 1,
    username: "john_doe",
    email: "example@gmail.com"
};
const productOrder = {
    id: 101,
    name: "Sample Product",
    price: 29.99,
    username: "sample_user",
    email: "sample@example.com"
};
const order_one = {
    id: 1,
    username: "john_doe",
    email: "example@gmail.com",
    name: "Sample Product",
    price: 29.99,
    orderId: 1001,
    productIds: [101]
};
