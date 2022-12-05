<!--
 * @Description: loading动画view页面
 * @Author: zhangkai
-->
<template>
    <div class="loading-view">
        <StaggeredAnimation></StaggeredAnimation>
    </div>
</template>
<script>
import StaggeredAnimation from '../../../components/css-components/StaggeredAnimation.vue';

export default ({
    components: {
        StaggeredAnimation,
    },
    setup() {
    },
});
</script>
<style lang="scss" scoped>
  .loading-view {
    /* 弹性布局，让页面元素水平+垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    /* 背景渐变色 */
    background-image: linear-gradient(200deg, #5ee7df, #b490ca);
    perspective: 1000px;
  }
</style>
