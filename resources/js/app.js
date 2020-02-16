import Vue from 'vue';
import axios from './axios'
import Buefy from 'buefy'
import router from './router';
import store from './store.js';
import i18n from './plugins/vuex-i18n'
import VueMoment from 'vue-moment'
import VueGoogleCharts from 'vue-google-charts'

// App template
import App from './App.vue';

Vue.use(Buefy);
Vue.use(VueGoogleCharts);
Vue.use(VueMoment);

new Vue({
    axios,
    store,
    router,
    ...App
}).$mount('#app');
