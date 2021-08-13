"use strict";

class Order {
    #order;

    constructor(amount, countGoods, contents, container = ".order") {
        this.amount = amount;
        this.countGoods = countGoods;
        this.contents = contents;
        this.container = container;

        this.#order = [];
        this.#getOrder();
    }

    #getParams(order) {
        this.amount = order.amount;
        this.countGoods = order.countGoods;
        this.contents = order.contents;
    }

    changeCount() {
        let items = document.querySelectorAll('.cart-item__count');
        items.forEach(item => {
            item.children[0].addEventListener('click', () => {
                item.children[1].value++;
            });
            item.children[2].addEventListener('click', () => {
                if (item.children[1].value > 1) {
                    item.children[1].value--;
                } else {
                    item.parentNode.remove();
                }
            });
        });
    }

    #getOrder() {
        getRequest(`${API}/getBasket.json`)
            .then((data) => {
                this.#getParams(JSON.parse(data));
                this.#render();
                this.changeCount();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    #render() {
        const block = document.querySelector(this.container);
        let orderHTML = `<h4>Ваш заказ: № ${this.amount}</h4>
        <div class="order-items">`;
        if (this.countGoods != 0) {
            for (const item of this.contents) {
                const cartObject = new CartItem(item);
                this.#order.push(cartObject);
                orderHTML += cartObject.render();
            }
        } else {
            orderHTML += '<p>Ваша корзина пуста</p>';
        }

        block.insertAdjacentHTML('beforeend', orderHTML + '</div>');
    }
}