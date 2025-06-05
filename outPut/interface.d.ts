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
}
interface Order extends User {
    orderId: number;
    userId: number;
    productIds: number[];
}
interface Responseof<T> {
    statusinfo: string;
    data: T;
    error?: string;
}
interface ApiResponse<T> {
    success: boolean;
    message: string;
    payload: T;
}
declare var apiInfo: Info;
declare var user: User;
declare var product: Product;
declare var order: Order;
declare var response: Responseof<User>;
declare var apiResponse: ApiResponse<Product>;
declare function displayInfo(info: Info): void;
declare function displayUser(user: User): void;
declare function displayProduct(product: Product): void;
declare function displayOrder(order: Order): void;
declare function displayResponse<T>(response: Responseof<T>): void;
declare function displayApiResponse<T>(apiResponse: ApiResponse<T>): void;
declare function mainInterface(): void;
