require('./bootstrap')
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Routes from '@/js/router/routes.js'
import App from '@/js/views/App'

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(BootstrapVue);

Vue.component('footer-section', require('./layouts/Footer.vue').default);
Vue.component('navbar', require('./layouts/Navbar.vue').default);

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    'X-Requested-With': 'XMLHttpRequest'
};


const app = new Vue({
    el: '#app',
    router : Routes,
    render : h => h(App),
    vuetify : new Vuetify(),
    components: { App }
});

export default app;
