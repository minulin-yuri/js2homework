"use strict";
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList extends Goods {
    #allProducts;

    constructor(goods, container = '.products') {
        super(goods);
        this.container = container;
        this.#allProducts = [];

        this.#fetchGoods();
    }

    #fetchGoods() {
        getRequest(`${API}/catalogData.json`)
            .then((data) => {
                this.goods = JSON.parse(data);
                this.#render();
            })
            .catch((error) => {
                console.log(error);
            });
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