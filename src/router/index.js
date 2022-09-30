import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '../layout/AppLayout.vue';

const routes = [
    {
        path: '/',
        name: '首页',
        component: AppLayout,
        redirect: '/home',
        meta: { icon: 'HomeFilled' },
        children: [
            {
                path: 'home',
                name: '首页',
                meta: { icon: 'icon-zhuye' },
                component: () => import('../views/Home.vue'),
            },
        ],
    },
    {
        path: '/css',
        name: 'CSS案例',
        component: AppLayout,
        redirect: '/css/login',
        meta: { icon: 'MagicStick' },
        children: [
            {
                path: 'login',
                name: '登录界面',
                meta: { icon: 'icon-denglu' },
                component: () => import('../views/css-demo/login/index.vue'),
            },
            {
                path: 'card',
                name: '旋转卡片',
                meta: { icon: 'icon-qiapian' },
                component: () => import('../views/css-demo/card/index.vue'),
            },
            {
                path: 'img-menu',
                name: '图片菜单',
                meta: { icon: 'icon-tupian' },
                component: () => import('../views/css-demo/img-menu/index.vue'),
            },
            {
                path: 'progress-bar',
                name: '进度条',
                meta: { icon: 'icon-tupian' },
                component: () => import('../views/css-demo/progress/index.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
