import Vue from 'vue';
//import Vuex from 'vuex';
import App from './App.vue';
//import axios from 'axios';
import router from './router';
import 'font-awesome/css/font-awesome.min.css';
import './assets/less/normalize.less';

Vue.config.productionTip = false;
//Vue.prototype.axios = axios;

new Vue({
    router,
    //axios,
    //Vuex,
    render: h => h(App)
}).$mount('#app')