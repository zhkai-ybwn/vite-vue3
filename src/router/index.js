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
                path: 'loading',
                name: '加载动画',
                meta: { icon: 'icon-tubiaozhizuomoban' },
                component: () => import('../views/css-demo/loading/index.vue'),
            },
            {
                path: 'middle',
                name: '居中方式',
                meta: { icon: 'icon-juzhongbuju' },
                component: () => import('../views/css-demo/middle/index.vue'),
            },
        ],
    },
    {
        path: '/commom-components',
        name: '常用组件',
        component: AppLayout,
        redirect: '/commom-components/swiper-list',
        meta: { icon: 'Box' },
        children: [{
            path: 'swiper-list',
            name: '轮播列表',
            meta: { icon: 'icon-lunbobiaoge' },
            component: () => import('../views/common-demo/swiper-list/index.vue'),
        },
        {
            path: 'progress-bar',
            name: '进度条',
            meta: { icon: 'icon-jindu' },
            component: () => import('../views/common-demo/progress/index.vue'),
        }],
    },
    {
        path: '/echarts',
        name: '图表案例',
        component: AppLayout,
        redirect: '/echarts/line-chart',
        meta: { icon: 'DataLine' },
        children: [{
            path: 'line-chart',
            name: '折线图',
            meta: { icon: 'icon-zhexiantu' },
            component: () => import('../views/echarts-demo/line-chart/index.vue'),
        }, {
            path: 'bar-chart',
            name: '柱形图',
            meta: { icon: 'icon-zhuzhuangtu' },
            component: () => import('../views/echarts-demo/line-chart/index.vue'),
        }, {
            path: 'pie-chart',
            name: '饼图',
            meta: { icon: 'icon-bilibingtu' },
            component: () => import('../views/echarts-demo/line-chart/index.vue'),
        }],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
