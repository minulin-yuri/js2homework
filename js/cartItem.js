"use strict";

class CartItem extends Product {

    constructor(id, title, price, count = 0) {
        super(id, title, price);
        this.count = count;
    }

    addItem() {
        this.count++;
    }

    deleteItem() {
        this.count--;
    }

    render() {
        //здесь будет прорисовка элемента в корзине
    }
}