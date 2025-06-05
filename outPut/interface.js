"use strict";
var apiInfo = {
    name: "My API",
    version: "1.0.0",
    description: "This is a sample API for demonstration purposes."
};
var user = {
    id: 1,
    username: "john_doe",
    email: "example@gmail.com"
};
var product = {
    id: 101,
    name: "Sample Product",
    price: 29.99
};
var order = {
    id: user.id, // Reusing User ID
    username: user.username, // Reusing User Username
    email: user.email, // Reusing User Email
    orderId: 1001,
    userId: user.id,
    productIds: [product.id]
};
var response = {
    statusinfo: "success",
    data: user,
    error: undefined
};
var apiResponse = {
    success: true,
    message: "Product retrieved successfully",
    payload: product
};
function displayInfo(info) {
    console.log(`API Name: ${info.name}`);
    console.log(`Version: ${info.version}`);
    console.log(`Description: ${info.description}`);
}
function displayUser(user) {
    console.log(`User ID: ${user.id}`);
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
}
function displayProduct(product) {
    console.log(`Product ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
}
function displayOrder(order) {
    console.log(`Order ID: ${order.orderId}`);
    console.log(`User ID: ${order.userId}`);
    console.log(`Product IDs: ${order.productIds.join(", ")}`);
}
function displayResponse(response) {
    console.log(`Status: ${response.statusinfo}`);
    console.log(`Data:`, response.data);
    if (response.error) {
        console.log(`Error: ${response.error}`);
    }
}
function displayApiResponse(apiResponse) {
    console.log(`Success: ${apiResponse.success}`);
    console.log(`Message: ${apiResponse.message}`);
    console.log(`Payload:`, apiResponse.payload);
}
function mainInterface() {
    displayInfo(apiInfo);
    displayUser(user);
    displayProduct(product);
    displayOrder(order);
    displayResponse(response);
    displayApiResponse(apiResponse);
}
mainInterface();
// The main function demonstrates the usage of the defined interfaces and functions.
// It displays information about the API, user, product, order, and responses.
// This approach allows for structured and type-safe handling of data in TypeScript,
// making it easier to manage and understand the data flow in applications.
// The output will show the details of each entity defined by the interfaces.
// Output:
// API Name: My API
// Version: 1.0.0
// Description: This is a sample API for demonstration purposes.
// User ID: 1
// Username: john_doe
// Email:
//
// Product ID: 101
// Name: Sample Product
// Price: $29.99
// Order ID: 1001
// User ID: 1
// Product IDs: 101
// Status: success
// Data: { id: 1, username: 'john_doe', email: 'exmale@gmail.com' }
// Success: true
// Message: Product retrieved successfully
// Payload: { id: 101, name: 'Sample Product', price: 29.99 }
// This output demonstrates how the interfaces and functions work together to provide a clear and structured representation of the data.
// The interfaces define the structure of the data, while the functions handle the display logic.
// This approach is beneficial for maintaining type safety and clarity in TypeScript applications,
// especially when dealing with complex data structures and API responses.
// The interfaces can be extended or modified as needed to accommodate additional data structures or requirements.
// This allows for flexibility and scalability in application development.
// The use of generics in Responseof and ApiResponse interfaces allows for reusable and type-safe handling of different data types.
// This makes the code more adaptable to various scenarios, such as handling different types of user data or product information.
// The display functions provide a clear way to output the data, making it easy to understand the structure and content of each entity.
// This modular approach to defining interfaces and functions promotes better organization and maintainability of the codebase.
// The interfaces can also be used in conjunction with other TypeScript features, such as classes and modules,
// to create more complex applications with well-defined data structures.
// This structured approach to defining and using interfaces in TypeScript enhances code readability,
// maintainability, and type safety, making it easier to develop robust applications.
// The interfaces can be used in various contexts, such as API development, data modeling, and application state management.
// The interfaces defined above can be used in various contexts, such as API development, data modeling, and application state management.
// They provide a clear structure for the data, making it easier to understand and work with.   
