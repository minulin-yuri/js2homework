"use strict";

class ProductItem extends Product {
    constructor(id_product, product_name, price, img = 'https://via.placeholder.com/200x150') {
        super(id_product, product_name, price);
        this.img = img;
    }

    /**
     * Функция для создания карточки товара
     * @param {string} product_name 
     * @param {number} price 
     * @returns 
     */
    getHTMLString() {
        return `<div class="product-item">
                <img src="http://placehold.it/200x200" />
                <h3>${this.product_name}</h3>
                <p>${this.price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
    }
}