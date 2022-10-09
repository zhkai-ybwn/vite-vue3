<!--
 * @Description: 侧边导航栏
 * @Author: zhangkai
-->
<template>
    <div class="side-container">
        <div class="left-box">
            <ul>
                <li  v-for="(c, index) in data.childrenInfo" :key="index" @click="clickTab(index)">
                    <router-link :class="[currentIndex === index ? 'active' : 'no-active']" :to="parentPath ?  parentPath + '/' + c.path : c.path">
                        <SvgIcon :iconName="c.meta.icon"></SvgIcon>
                        <span>{{c.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- <div class="border">
            <div class="line" :style="{ marginTop: (13 + currentIndex * 54) + 'px' }"></div>
        </div> -->
        <div class="right-box">
            <div class="rb">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../../store/index';

export default ({
    setup() {
        // 定义store对象
        const store = useStore();
        // 定义路由对象
        const router = useRouter();
        // 获取路由信息
        const routerInfo = reactive(router.options.routes);
        // 获取当前顶部导航栏索引
        const { navBarIndex, sideTabIndex } = storeToRefs(store);
        // 当前侧边栏需要展示路由信息
        const data = reactive({
            childrenInfo: routerInfo[navBarIndex.value].children,
        });
        // 当前页面的父级路由path
        const parentPath = navBarIndex.value === 0 ? ref('') : ref(routerInfo[navBarIndex.value].path);
        // 定义侧边栏当前选中索引
        const currentIndex = ref(sideTabIndex);
        /**
         * @description: 侧边栏点击事件
         * @return {*}
         * @param {*} index 点击索引
         */
        const clickTab = (index) => {
            currentIndex.value = index;
            store.setSideTabIndex(index);
        };
        /**
         * @description: store订阅事件，根据store的currentRouterIndex变化去重置侧边栏的路由信息和当前选中
         * @return {*}
         * @param {*} store store
         */
        const subRouter = store.$onAction(({ name, args }) => {
            if (name === 'setNavBarIndex') {
                parentPath.value = args[0] === 0 ? '' : routerInfo[args[0]].path;
                data.childrenInfo = routerInfo[args[0]].children;
                currentIndex.value = 0;
            }
        });
        return {
            navBarIndex, data, clickTab, currentIndex, parentPath, subRouter,
        };
    },
});
</script>

<style lang="scss" scoped>
.side-container {
  width: calc(100% - 100px);
  height: 100%;
  margin: 0 50px;
  background-color: #fff;
  box-shadow:
    0 1px 2px rgb(0 0 0 / 10%),
    0 1px 3px rgb(0 0 0 / 20%);
  display: flex;

  li {
    list-style: none;
  }

  .left-box {
    width: 100px;
    display: flex;
    justify-content: center;
    background-color: #154599;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      padding: 10px 0;
      line-height: 34px;
      cursor: pointer;
      display: flex;

      /* 过渡效果 */
      transition: 0.2s ease-out;

      .active {
        position: relative;
        color: #e0a419;

        &::after {
          position: absolute;
          left: 90px;
          top: 0;
          content: "";
          width: 2px;
          height: 34px;
          background-color: #e0a419;
          margin-left: -2px;
          transition: 0.4s ease-in-out;
        }
      }

      .no-active {
        color: #e3e4f0;
      }

      a {
        text-decoration: none;
      }
    }
  }

  .border {
    height: 100%;
    width: 1px;
    background-color: #ddd;

    .line {
      width: 6px;
      height: 30px;
      background-color: #df8c54;
      margin-left: -2px;
      transition: 0.4s ease-in-out;
    }
  }

  .right-box {
    flex: 1;
    height: 100%;
    position: relative;

    .rb {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #333;
      position: absolute;

      /* 默认隐藏 */
      transition: 0.4s ease-in-out;
    }
  }
}
</style>
