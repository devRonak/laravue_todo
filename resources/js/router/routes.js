import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/js/pages/Home';
import Contact from '@/js/pages/Contact';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
});
export default router;
