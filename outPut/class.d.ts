declare class Product {
    private proId;
    productName: string;
    price: number;
    addToCart: boolean;
    constructor(proId: number, productName: string, price: number);
    addCart(): void;
    inOrder(): string;
}
declare class Order extends Product {
    constructor();
    getOrderDetails(): string;
}
declare var Order1: Order;
