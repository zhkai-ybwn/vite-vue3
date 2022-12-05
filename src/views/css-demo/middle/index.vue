<!--
 * @Description: 居中方式视图
 * @Author: zhangkai
-->
<!--
 * @Description: login view页面
 * @Author: zhangkai
-->
<template>
    <div class="middle-view">
        <Shuffling :list="list">
        </Shuffling>
    </div>
</template>
<script>
import Shuffling from '../../../components/common/Shuffling.vue';
import MarginAuto from '../../../components/css-components/middle/MarginAuto.vue';
import MarginNegative from '../../../components/css-components/middle/MarginNegative.vue';
import Transform from '../../../components/css-components/middle/Transform.vue';
import TableDisplay from '../../../components/css-components/middle/TbaleDisplay.vue';
import FlexDisplay from '../../../components/css-components/middle/FlexDisplay.vue';
import GridDisplay from '../../../components/css-components/middle/GridDisplay.vue';

export default ({
    components: {
        Shuffling,
    },
    setup() {
        const list = [
            { component: MarginAuto, name: '定位+margin:auto' },
            { component: MarginNegative, name: '定位+margin:负值' },
            { component: Transform, name: '定位+transform' },
            { component: TableDisplay, name: 'table布局' },
            { component: FlexDisplay, name: 'flex布局' },
            { component: GridDisplay, name: 'grid布局' },
        ];
        return { list };
    },
});
</script>

<style lang="scss" scoped>
.middle-view {
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
