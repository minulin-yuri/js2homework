"use strict";

class Cart extends Goods {
    constructor(goods, container = ".cart") {
        super(goods);
        this.goods = goods;
    }

    showCountOfGoods() {
        //здесь будет отображаться на ярлыке 
        //количество товаров в корзине
    }

    render() {
        //здесь будет отображение товаров в корзине
    }

}
