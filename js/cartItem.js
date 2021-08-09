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
        <a href="#" class="cart-item__add">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
        </a>
        <input type="text" value="${this.count}">
        <a href="#" class="cart-item__delete">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus-circle" class="svg-inline--fa fa-minus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"></path></svg>
        </a>
        </div>

        </div>`;
    }

    add() {
        this.count++;
    }

    delete() {
        this.count--;
    }
}