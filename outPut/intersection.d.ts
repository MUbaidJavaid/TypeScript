type Intersection<T, U> = T & U;
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
type InfoUserIntersection = InfoIntersection & UserIntersection;
type ProductOrderIntersection = Intersection<ProductIntersection, UserIntersection>;
type OrderIntersection = Intersection<UserIntersection, ProductIntersection> & {
    orderId: number;
    productIds: number[];
};
declare const infoUser: InfoUserIntersection;
declare const productOrder: ProductOrderIntersection;
declare const order_one: OrderIntersection;
