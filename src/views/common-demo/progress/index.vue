<!--
 * @Description: 进度条view页面
 * @Author: zhangkai
-->
<template>
    <div class="view-login">
        <Shuffling :list="list">
        </Shuffling>
    </div>
</template>
<script>
// 普通进度条组件
import ProgressBarLine from '../../../components/common-components/progress/ProgressBarLine.vue';
// 多段进度条组件
import MultiProgressBar from '../../../components/common-components/progress/MultiProgressBar.vue';
// 圆环进度条组件
import CircularProgressBarVue from '../../../components/common-components/progress/CircularProgressBar.vue';
// 循环展示组件
import Shuffling from '../../../components/common/Shuffling.vue';

export default ({
    components: {
        Shuffling,
    },
    setup() {
        const list = [
            { component: ProgressBarLine, name: '进度条' },
            { component: MultiProgressBar, name: '多段进度条' },
            { component: CircularProgressBarVue, name: '圆环进度条' },
        ];
        return { list };
    },
});
</script>

<style lang="scss" scoped>
.view-login {
  width: 100%;
  height: 100%;

  /* 弹性盒子模型 */
  display: flex;

  /* 下面两个属性是让body里的子类居中 */
  justify-content: center;
  align-items: center;

  /* 背景渐变色 */
  background-image: linear-gradient(200deg, #5ee7df, #b490ca);
  perspective: 1000px;
}
</style>
