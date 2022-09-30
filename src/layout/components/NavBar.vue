<!--
 * @Description: 顶部导航栏，3D效果，悬浮滚动
 * @Author: zhangkai
-->

<template>
    <div class="navbar-container">
        <ul>
            <li v-for="(r, index) in routerInfo" :key="index">
                <router-link class="item" :to="r.path" @click="clickPath(index)">
                    <el-icon>
                        <component :is="r.meta.icon"></component>
                    </el-icon>
                    <span>{{r.name}}</span>
                </router-link>
                <router-link class="item" :to="r.path" @click="clickPath(index)">
                    <el-icon>
                        <component :is="r.meta.icon"></component>
                    </el-icon>
                    <span>{{r.name}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../../store/index';

export default ({
    setup() {
        // 定义路由对象
        const router = useRouter();
        // 获取路由信息
        const routerInfo = reactive(router.options.routes);
        // 定义store对象
        const store = useStore();
        /**
         * @description: 导航栏点击事件
         * @return {*}
         * @param {*} index 索引
         */
        const clickPath = (index) => {
            store.setNavBarIndex(index);
        };
        return { routerInfo, clickPath };
    },
});
</script>

<style lang="scss" scoped>
  .navbar-container {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 1150px;
    margin-right: auto;
    margin-left: auto;
    font-weight: bold;

    ul {
      display: flex;

      li {
        position: relative;
        list-style: none;
        width: 160px;
        height: 40px;
        cursor: pointer;
        transform-style: preserve-3d;
        transition: 0.5s;
      }

      li:hover {
        transform: rotateX(90deg);
      }

      a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }

      a:first-child {
        background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);
        transform: translateZ(20px);
      }

      a:last-child {
        background-image: linear-gradient(200deg, #5ee7df, #b490ca);
        transform: translateY(20px) rotateX(-90deg);
      }

      .item {
        color: #fff;
        text-decoration: none;
      }

      .item:hover {
        color: rgb(0 0 0 / 70%);
      }

      a.router-link-active {
        color: rgb(0 0 0 / 55%);
        text-decoration: none;
      }

      a.router-link-active:hover {
        color: rgb(0 0 0 / 70%);
        text-decoration: none;
      }
    }
  }
</style>
