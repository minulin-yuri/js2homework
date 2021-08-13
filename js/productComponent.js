Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="product-item">
    <img :src="img" :alt="product.product_name">
    <h3>{{ product.product_name }}</h3>
    <p>{{ product.price }}</p>
    <button type="button" class="by-btn" @click="$root.$refs.cart.addProduct(product)">Добавить</button>
</div>
    `
});