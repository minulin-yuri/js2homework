const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        title: 'Интернет-магазин',
        links: {
            'index': 'index.html',
            'feedback': 'feedback.html',
            'cart': 'cart.html',
        },
        searchLine: '',
        cartUrl: '/getBasket.json',
        catalogUrl: '/catalogData.json',
        deleteUrl: '/deleteFromBasket.json',
        addUrl: '/addToBasket.json',
        products: [],
        filteredProducts: [],
        cart: [],
        orderAmount: '',
        imgCatalog: 'https://via.placeholder.com/200x150',
        imgCatalogMini: 'https://via.placeholder.com/50x50',
        isVisibleCart: false,//переменная для отображения корзины
        notData: false,//переменная для проверки получения данных
    },
    methods: {
        /**
         * Функция получения данных в формате .json
         * @param {*} url 
         * @returns 
         */
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        /**
         * Функция добавления товара в корзину
         * (увеличения количества товара)
         * @param {*} product 
         */
        addProduct(product) {
            this.getJson(`${API + this.addUrl}`)
                .then(data => {
                    if (data.result === 1) {
                        let isIncludes = false;
                        this.cart.forEach(item => {
                            if (item.id_product === product.id_product) {
                                item.quantity++;
                                isIncludes = true;
                            }
                        });
                        if (!isIncludes) {
                            product.quantity = 1;
                            this.cart.push(product);
                        }
                    }
                });
        },
        /**
         * Функиця уменьшения количества 
         * (если количество 1, то удаление) товара из корзины
         * @param {*} product 
         */
        deleteItem(product) {
            this.getJson(`${API + this.deleteUrl}`)
                .then(data => {
                    if (data.result === 1) {
                        (product.quantity > 1)
                            ? product.quantity--
                            : this.removeItem(product);
                    }
                });
        },
        /**
         * Функция удаления товара из корзины
         * @param {*} product 
         */
        removeItem(product) {
            this.getJson(`${API + this.deleteUrl}`)
                .then(data => {
                    if (data.result === 1) {
                        this.cart.splice(this.cart.indexOf(product), 1);
                    }
                });
        },
        /**
         * Функция поиска товара
         */
        filterGoods() {
            if (this.searchLine == '') {
                this.getDefault();
            }
            let regexp = new RegExp(this.searchLine, 'i');
            let rezult = [];
            this.filteredProducts.forEach(item => {
                if (regexp.test(item.product_name)) {
                    rezult.push(item);
                }
            });
            this.filteredProducts = rezult;
        },
        /**
         * Функция дефолтного представления списка товаров
         */
        getDefault() {
            this.filteredProducts = this.products;
            this.searchLine = '';
        }
    },
    computed: {

    },
    beforeCreated() {

    },
    created() {

    },
    beforeMount() {

    },
    mounted() {
        //получение товаров корзины
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                this.orderAmount = data.amount;
                for (let el of data.contents) {
                    this.cart.push(el);
                }
            });
        //получение списка товаров
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filteredProducts.push(el);
                }
            })
            .catch(() => {
                this.notData = true;
                //при ошибке получения данных - заглушка "Нет данных"
            });
    },
    beforeUpdate() {

    },
    updated() {

    },
    beforeDestroy() {

    },
    destroyed() {

    },
});

