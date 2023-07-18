import { createRouter, createWebHistory } from 'vue-router';

import SomePage from "@/pages/SomePage.vue";
import IndexPage from "@/pages/IndexPage.vue";
import Login from "@/pages/Login.vue";

const routes = [
    { path: '/:pathMatch(.*)*', redirect: '/index' },
    { path: '/index', component: IndexPage },
    { path: '/some-page', component: SomePage },
    { path: '/login', component: Login }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;