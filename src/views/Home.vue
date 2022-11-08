<!--
 * @Description: 主页面
 * @Author: zhangkai
-->
<template>
    <div class="home">
        <div class="illustration"></div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    components: {
    },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 背景渐变色 */
  background-image: linear-gradient(200deg, #5ee7df, #b490ca);
  perspective: 1000px;

  .illustration {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1600px;
    height: 1200px;
    background: url("../assets/imgs/home.png") 100% 100% no-repeat;
    transform: scale(0.5);
  }
}
</style>
