"use strict";

class ProductList extends Goods {
    #allProducts;

    constructor(goods, container = '.products') {
        super(goods);
        this.container = container;
        this.#allProducts = [];

        this.#fetchGoods();
        this.#render();
    }

    #fetchGoods() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 20000 },
            { id: 2, title: 'Mouse', price: 1500 },
            { id: 3, title: 'Keyboard', price: 5000 },
            { id: 4, title: 'Gamepad', price: 4500 },
        ];
    }

    #render() {
        const block = document.querySelector(this.container);

        for (const product of this.goods) {
            const productObject = new ProductItem(product);
            this.#allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
}