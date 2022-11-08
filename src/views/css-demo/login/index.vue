<!--
 * @Description: login view页面
 * @Author: zhangkai
-->
<template>
    <div class="view-login">
        <LoginHover ></LoginHover>
    </div>
</template>
<script>
import LoginHover from '../../../components/css-components/LoginHover.vue';

export default ({
    components: {
        LoginHover,
    },
    setup() {

    },
});
</script>

<style lang="scss" scoped>
.view-login {
  width: 100%;
  height: 100%;

  /* 弹性盒子模型 */
  display: flex;

  /* 限免两个属性是让body里的子类居中 */
  justify-content: center;
  align-items: center;

  /* 背景渐变色 */
  background-image: linear-gradient(200deg, #5ee7df, #b490ca);
  perspective: 1000px;
}
</style>
