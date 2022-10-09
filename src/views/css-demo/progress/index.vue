<template>
    <div class="view-login">
        <Shuffling :list="list">
        </Shuffling>
    </div>
</template>
<script>
import ProgressBarLine from '../../../components/css-component/progress/ProgressBarLine.vue';
import MultiProgressBar from '../../../components/css-component/progress/MultiProgressBar.vue';
import Shuffling from '../../../components/css-component/Shuffling.vue';

export default ({
    components: {
        Shuffling,
    },
    setup() {
        const list = [
            { component: ProgressBarLine, name: '进度条' },
            { component: MultiProgressBar, name: '多段进度条' },
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
  background-color: #d9afd9;
  background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
}
</style>
