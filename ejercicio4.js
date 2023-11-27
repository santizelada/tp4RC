class Product {
    constructor(code, name, price) {
        this.code = code;
        this.name = name;
        this.price = price;
    }

    printData() {
        console.log(`Code: ${this.code}, Name: ${this.name}, Price: ${this.price}`);
    }
}

let productArray = [];

let product1 = new Product(1, "Product A", 20.99);
let product2 = new Product(2, "Product B", 15.49);
let product3 = new Product(3, "Product C", 30.25);

productArray.push(product1, product2, product3);

productArray.forEach(product => {
    product.printData();
});
