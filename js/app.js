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

