interface Info {
    name: string;
    version: string;
    description: string;
}
interface UserInterface {
    id: number;
    username: string;
    email: string;
}
interface ProductData {
    id: number;
    name: string;
    price: number;
}
interface Order extends UserInterface {
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
declare var userInterface: UserInterface;
declare var producData: ProductData;
declare var response: Responseof<UserInterface>;
declare var apiResponse: ApiResponse<ProductData>;
declare function displayInfo(info: Info): void;
declare function displayUser(user: User): void;
declare function displayProduct(product: Product): void;
declare function displayOrder(order: Order): void;
declare function displayResponse<T>(response: Responseof<T>): void;
declare function displayApiResponse<T>(apiResponse: ApiResponse<T>): void;
declare function mainInterface(): void;
