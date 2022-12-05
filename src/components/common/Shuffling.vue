<!--
 * @Description: 轮播组件，同类多种组件循环展示
 * @Author: zhangkai
-->
<template>
    <div class="container">
        <div class="left-component">
            <component :is="currentComponent"></component>
        </div>
        <div class="right-name">
            <span :class="[currentComponent === item.component ? 'active':'']" v-for="(item, index) in list" :key="index" @mousemove="showToBigBox(item)">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
import {
    onMounted, shallowRef, ref, onUnmounted,
} from 'vue';

export default ({
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const currentComponent = shallowRef(props.list[0].component);
        const showToBigBox = (item) => {
            currentComponent.value = item.component;
        };
        const currentIndex = ref(0);
        const switchComponent = (() => {
            currentComponent.value = props.list[currentIndex.value % props.list.length].component;
        });
        onMounted(() => {
            setInterval(() => {
                currentIndex.value += 1;
                switchComponent();
            }, 3000);
        });
        onUnmounted(() => {
            clearInterval();
        });
        return { currentComponent, showToBigBox };
    },
});
</script>
<style lang="scss" scoped>
.container {
  width: 800px;
  height: 400px;
  display: flex;
  //   均匀排列每个元素，每个元素之间的间隔相等
  justify-content: space-evenly;
  // 超出容器部分隐藏
  overflow: hidden;

  .left-component {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-name {
    display: flex;
    width: fit-content;
    flex-direction: column;
    background: linear-gradient(to bottom, transparent, #16161a 22%, #16161a 81%, transparent);

    span {
      color: rgb(255 255 255 / 60%);
      padding: 12px 20px;
      cursor: pointer;
    }

    .active {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      background: linear-gradient(to right, rgb(255 255 255 / 25%) 20%, transparent 90%);
    }
  }
}
</style>
