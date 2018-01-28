import Vue from 'vue';
import App from './App.vue';

//Buefy
import Buefy from 'buefy';
Vue.use(Buefy);

//Router
import router from './router';

//Store
import store from './store';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
