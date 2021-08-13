Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
        <div class="cart-item">
            <div class="cart-item__img"><img :src="img" :alt="cartItem.product_name">
            </div>
            <div class="cart-item__title">
                <p>{{ cartItem.product_name }}</p>
            </div>
            <div class="cart-item__price">
                <p>{{ cartItem.price }}</p>
            </div>
            <div class="cart-item__count">
                <a href="#" class="cart-item__add" @click="$parent.addProduct(cartItem)">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                    data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z">
                        </path>
                    </svg>
                </a>
                <input type="text" :value="cartItem.quantity">
                <a href="#" class="cart-item__delete" @click="$parent.deleteItem(cartItem)">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                    data-icon="minus-circle" class="svg-inline--fa fa-minus-circle fa-w-16"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z">
                        </path>
                    </svg>
                </a>
                <a href="#" class="cart-item__remove" @click="$parent.removeItem(cartItem)">
                    <svg aria-hidden="true" focusable="false" data-prefix="far"
                    data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                        d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    `
});