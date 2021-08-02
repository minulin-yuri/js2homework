"use strict";

class Goods {
    constructor(goods = []) {
        this.goods = goods;
    }

    getSummaryPrice() {
        let rezult = 0;
        this.goods.forEach(element => {
            rezult += element.price;
        });
        return rezult;
    }
}