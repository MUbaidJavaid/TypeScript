console.log("Class Example");
// This code demonstrates a simple class structure in TypeScript with a base class and a derived class.
// It includes properties, methods, and inheritance to manage products and orders.
// This code demonstrates a simple class structure in TypeScript with a base class and a derived class.
// It includes properties, methods, and inheritance to manage products and orders.


class Product {
   private proId: number;
   public productName: string;
    price: number;
    addToCart: boolean = false;
    constructor(proId: number, productName: string, price: number) {
        this.proId = proId;
        this.productName = productName;
        this.price = price;
    }

    addCart(): void {
        this.addToCart = true;
        console.log(`${this.productName} has been added to the cart.`);
    }

    inOrder():string{
        if (this.addToCart) {
            return (`${this.productName} is in the order. ${this.proId} - ${this.price}`);
        } else {
            return (` is not in the order.`);
        }
    }
}

class Order extends Product {
    constructor(){
        super(101, "Best Product", 111110);
    }

    getOrderDetails(): string {
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

