// intersction 

type Intersection<T, U> = T & U;
// allowing for the combination of properties from both types.
// This can be useful for creating complex types that need to include properties from multiple sources.
//   orderId: 1001,
//   userId: user.id,
//   productIds: [product.id]
// };

type InfoIntersection = {
  name: string;
  version: string;
    description: string;
};

type UserIntersection = {
  id: number;
  username: string;
  email: string;
};
type ProductIntersection = {
  id: number;
  name: string;
  price: number;
};

// intersection of Info and User
// type InfoUserIntersection = Intersection<InfoIntersection, UserIntersection>;
type InfoUserIntersection = InfoIntersection & UserIntersection;
// This type combines properties from both Info and User interfaces.
// It will have properties: name, version, description, id, username, and email.
type ProductOrderIntersection = Intersection<ProductIntersection, UserIntersection>;
// This type combines properties from both Product and User interfaces.
// It will have properties: id, name, price, and userId.
type OrderIntersection = Intersection<UserIntersection, ProductIntersection> & {
  orderId: number;
  productIds: number[];
};
// This type combines properties from User and Product interfaces, along with additional properties orderId and productIds.
// It will have properties: id, username, email, orderId, userId, and productIds.
// Example usage
const infoUser: InfoUserIntersection = {
  name: "My API",
  version: "1.0.0",
  description: "This is a sample API for demonstration purposes.",
  id: 1,
  username: "john_doe",
  email: "example@gmail.com"
};
const productOrder: ProductOrderIntersection = {
  id: 101,
  name: "Sample Product",
  price: 29.99,
  username: "sample_user",
  email: "sample@example.com"
};

const order_one: OrderIntersection = {
  id: 1,
  username: "john_doe",
  email: "example@gmail.com",
  name: "Sample Product",
  price: 29.99,
  orderId: 1001,
  productIds: [101]
};



interface Info {
  name: string;
  version: string;
  description: string;
}
interface User {
  id: number;
  username: string;
  email: string;
}
interface Product {
  id: number;
  name: string;
  price: number;
  pId: string;
  productName: string;
  // addToCart: () => void;
  // addCart: boolean;
  // inOrder: boolean;
}

// Example usage of the intersection types
const info: Info = {
  name: "My API",
  version: "1.0.0",
  description: "This is a sample API for demonstration purposes."
};

// const productInfo_one: Product = {
//   id: 101,
//   name: "Sample Product",
//   price: 29.99
// };

type InfoUser = Info & User;
// This type combines properties from both Info and User interfaces.
// It will have properties: name, version, description, id, username, and email.
type ProductOrder = Product & User;
// This type combines properties from both Product and User interfaces.
// It will have properties: id, name, price, username, and email.
type Ordertype = User & Product & {
  orderId: number;
  productIds: number[];
}
// This type combines properties from User and Product interfaces, along with additional properties orderId and productIds.
// It will have properties: id, username, email, orderId, userId, and productIds.
// Example usage
const infoUsertype: InfoUser = {
  name: "My API",
  version: "1.0.0",
  description: "This is a sample API for demonstration purposes.",
  id: 1,
  username: "john_doe",
  email: "example@gmail.com"
};
// const productOrdertype: ProductOrder = {
//   id: 101,
//   name: "Sample Product",
//   price: 29.99,
//   username: "sample_user",
//   email: "sample@example.com"
// };
