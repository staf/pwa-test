import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import Home from './Pages/Home.vue';
import About from './Pages/About.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
});