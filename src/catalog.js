class Catalog {
    constructor() {
        this.products = [];
    }

    add(name, price) {
        const product = {
            id: Math.floor(Math.random() * 101),
            name,
            price
        };
        this.products.push(product)

        return product;
    }

    getAll() {
        return this.products;
    }
}

const catalog = new Catalog();

export default catalog;