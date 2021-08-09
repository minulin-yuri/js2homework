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
        catalogUrl: '/catalogData.json',
        products: [],
        filteredProducts: [],
        order: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        imgCatalogMini: 'https://via.placeholder.com/50x50',
        isVisibleCart: false,
        notData: false,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    this.notData = true;
                })
        },
        addProduct(product) {
            if (this.order.length <= 0) {
                this.order.push({
                    'product': product,
                    'count': 1,
                });
            } else {
                let isIncludes = false;
                this.order.forEach(item => {
                    if (item.product.id_product == product.id_product) {
                        item.count++;
                        isIncludes = true;
                    }
                });
                if (!isIncludes) {
                    this.order.push({
                        'product': product,
                        'count': 1,
                    });
                }
            }
        },
        filterGoods() {
            let regExp = new RegExp(this.searchLine, 'i');
            this.filteredProducts = [];
            this.products.forEach(item => {
                if (regExp.test(item.product_name)) {
                    this.filteredProducts.push(item);
                }

            })
        },
        decrementCount(product) {
            if (product.count === 1) {
                this.order.pop(product);
            } else {
                product.count--;
            }
        },
        removeItem(product) {
            this.order.pop(product);
        },
    },
    beforeCreated() {

    },
    created() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                this.products = data;
            });
    },
    beforeMount() {

    },
    mounted() {

    },
    beforeUpdate() {

    },
    updated() {
        //this.deleteFilter();
    },
    beforeDestroy() {

    },
    destroyed() {

    },
});

