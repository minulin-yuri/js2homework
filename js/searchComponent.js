Vue.component('search', {
    data() {
        return {
            searchLine: '',
        }
    },
    methods: {
        /**
         * Функция поиска товара
         */
        filterGoods() {
            if (this.searchLine == '') {
                this.getDefault();
            }
            let regexp = new RegExp(this.searchLine, 'i');
            let rezult = [];
            this.$root.$refs.products.filteredProducts.forEach(item => {
                if (regexp.test(item.product_name)) {
                    rezult.push(item);
                }
            });
            this.$root.$refs.products.filteredProducts = rezult;
        },
        /**
         * Функция дефолтного представления списка товаров
         */
        getDefault() {
            this.$root.$refs.products.filteredProducts = this.$root.$refs.products.products;
            this.searchLine = '';
        },
    },
    mounted() {

    },
    template: `<div class="search">
    <input type="text" v-model="searchLine" @input="filterGoods()" @blur="getDefault()">

    <svg aria-hidden="false" focusable="false" data-prefix="fas" data-icon="search"
        class="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path fill="currentColor"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
        </path>
    </svg>

</div>`
});