import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/modules/auth/pages/LoginPage.vue';
import ExpedienteMedicoPage from '@/modules/expediente-medico/pages/ExpedienteMedicoPage.vue';
import { authGuard } from '@/router/guards';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/expediente-medico',
            name: 'expediente-medico',
            component: ExpedienteMedicoPage,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            meta: { guest: true },
        },
    ],
});

router.beforeEach(authGuard);

export default router;
