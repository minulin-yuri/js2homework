Vue.component('error', {
    data() {
        return {
            message: '',
            error: '',
            ifError: false,
        }
    },
    methods: {
        getError(error, message) {
            this.error = error;
            this.message = message;
            this.ifError = true;
        },
        closeError() {
            this.ifError = false;
        },
        reloadPage() {
            this.$root.$refs.products.catalogUrl = '/catalogData.json';
        },
    },
    mounted() {

    },
    template: `
    <div id="myModal" class="modal" v-if="ifError">
        <div class="modal__content">
            <div class="modal__header">
                <h2>{{ message }}</h2>
                <span class="close" @click="closeError()">&times;</span>
            </div>
            <div class="modal__body">
                <p>{{ error }}</p>
            </div>
            <div class="modal__footer">
                <p>Обратитесь к администратору</p>
                <a href="#">Обновить страницу</a>
            </div>
        </div>  
    </div>`
});