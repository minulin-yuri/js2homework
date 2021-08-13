Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filteredProducts: [],
            imgCatalog: 'https://via.placeholder.com/200x150',
            //notData: false,//переменная для проверки получения данных
        }
    },
    methods: {

    },
    mounted() {
        //получение списка товаров
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filteredProducts.push(el);
                }
            })
            .catch(error => {
                this.$refs.error.getError(error, 'Нет данных');
                //при ошибке получения данных - заглушка "Нет данных"
            });
    },
    template: `<div class="products">
                    <product v-for="product of filteredProducts" :key="product.id_product" :img="imgCatalog" :product="product"></product>
                    <error ref="error" />
                </div>`
});