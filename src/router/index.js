import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//Main layouts
import LoginPage from '../components/LoginPage.vue';
import MainPage from '../components/MainPage.vue';

//Set up
var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: LoginPage
        },
        {
            path: '/main',
            component: MainPage
        }
    ]
});

//Add auth route guard
import authGuard from './authGuard.js';
router.beforeEach(authGuard);

//Export
export default router;
