"use strict";

class Cart extends Goods {

    constructor(goods, quantity) {
        super(goods);
        this.quantity = quantity;
    }

    showCountOfGoods() {
        //здесь будет отображаться на ярлыке 
        //количество товаров в корзине
    }

    render() {
        //здесь будет отображение товаров в корзине
    }

}
