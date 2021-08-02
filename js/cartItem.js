"use strict";

class CartItem extends Product {

    constructor(id_product, product_name, price, count = 1) {
        super(id_product, product_name, price);
        this.count = count;
    }

    render() {
        return `<div class="cart-item">
        <div class="cart-item__img"><img src="http://placehold.it/50x50" /></div>
        <div class="cart-item__title"><p>${this.product_name}</p></div>
        <div class="cart-item__price"><p>${this.price}</p></div>
        <div class="cart-item__count">
        <input type="text" value="${this.count}">
        <a href="#" class="cart-item__delete">Удалить</a>
        </div>

        </div>`;
    }
}