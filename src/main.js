if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/service.js')
             .then(reg => console.log('ServiceWorker registration successful with scope: ', reg.scope))
             .catch(err => console.error('ServiceWorker registration failed: ', err));
}

import Vue from 'vue'
import App from './App.vue'

import router from './router';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
