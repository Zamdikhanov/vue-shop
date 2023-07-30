import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
        path: '/',
        redirect: '/catalog'
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: () =>
            import ('../modules/catalog/views/CatalogView.vue')
    },
    {
        path: '/basket',
        name: 'Basket',
        // meta: { layout: 'empty' },
        component: () =>
            import ('../modules/basket/views/BasketView.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () =>
            import ('../views/404View.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
