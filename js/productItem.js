"use strict";

class ProductItem extends Product {
    constructor(id, title, price, img = 'https://via.placeholder.com/200x150') {
        super(id, title, price);
        this.img = img;
    }

    /**
     * Функция для создания карточки товара
     * @param {string} title 
     * @param {number} price 
     * @returns 
     */
    getHTMLString() {
        return `<div class="product-item">
                <img src="http://placehold.it/200x200" />
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
    }
}