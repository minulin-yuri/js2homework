'use strict';

let order = new Order();

window.onload = () => {
    let buttons = document.querySelectorAll('.cart-item__add');
    buttons.forEach(btn => {
        console.log(btn);
    });
}