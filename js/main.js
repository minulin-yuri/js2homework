'use strict';

//список товаров
const products = [
    { id: 1, title: 'Notebook', price: 1000 },
    { id: 2, title: 'Mouse', price: 100 },
    { id: 3, title: 'Keyboard', price: 250 },
    { id: 4, title: 'Gamepad', price: 150 },
];

/**
 * Функция для создания карточки товара
 * @param {string} title 
 * @param {number} price 
 * @returns 
 */
const renderProduct = (title = 'product', price = 100) => {
    return `<div class="product-item">
                <img src="http://placehold.it/200x200" />
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
}

/**
 * Функция для создания списка товаров
 * @param {object} list 
 */
const renderProducts = (list) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    }).join('');
    //убираем запятые между элементами при помощи join('')

    document.querySelector('.products').innerHTML = productList;
}

renderProducts(products);
