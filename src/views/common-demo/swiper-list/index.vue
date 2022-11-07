<template>
    <div class="view-swiper">
        <SwiperList></SwiperList>
    </div>
</template>
<script>
import SwiperList from '../../../components/common-components/SwiperList.vue';

export default ({
    components: {
        SwiperList,
    },
    setup() {
    },
});
</script>
<style lang="scss" scoped>
  .view-swiper {
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
