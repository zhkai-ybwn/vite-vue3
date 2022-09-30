<template>
    <div class="view-card">
        <ThreeDRotation></ThreeDRotation>
    </div>
</template>
<script>
import ThreeDRotation from '../../../components/css-component/ThreeDRotation.vue';

export default ({
    components: {
        ThreeDRotation,
    },
    setup() {
    },
});
</script>
<style lang="scss" scoped>
  .view-card {
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
