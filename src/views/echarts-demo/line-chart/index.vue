<!--
 * @Description: echarts折线图view页面
 * @Author: zhangkai
-->
<template>
    <div class="view-line-chart">
        <BasicLineChart></BasicLineChart>
        <SmoothedLineChart></SmoothedLineChart>
        <BasicAreaChart></BasicAreaChart>
        <StackedLineChart></StackedLineChart>
        <StackedAreaChart></StackedAreaChart>
        <GradientStackedAreaChart></GradientStackedAreaChart>
    </div>
</template>
<script>
import BasicLineChart from '../../../components/echarts-components/line-chart/BasicLineChart.vue';
import SmoothedLineChart from '../../../components/echarts-components/line-chart/SmoothedLineChart.vue';
import BasicAreaChart from '../../../components/echarts-components/line-chart/BasicAreaChart.vue';
import StackedLineChart from '../../../components/echarts-components/line-chart/StackedLineChart.vue';
import StackedAreaChart from '../../../components/echarts-components/line-chart/StackedAreaChart.vue';
import GradientStackedAreaChart from '../../../components/echarts-components/line-chart/GradientStackedAreaChart.vue';

export default ({
    components: {
        BasicLineChart,
        SmoothedLineChart,
        BasicAreaChart,
        StackedLineChart,
        StackedAreaChart,
        GradientStackedAreaChart,
    },
    setup() {
    },
});
</script>

<style lang="scss" scoped>
.view-line-chart {
  /* 弹性布局，让页面元素水平+垂直居中 */
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  overflow: auto;

  /* 背景渐变色 */
  background-image: linear-gradient(200deg, #5ee7df, #b490ca);
  perspective: 1000px;
}

.view-line-chart::-webkit-scrollbar {
  /* 滚动条整体样式 */
  width: 10px;  /* 高宽分别对应横竖滚动条的尺寸 */
  height: 1px;
}

.view-line-chart::-webkit-scrollbar-thumb {
  /* 滚动条里面小方块 */
  border-radius: 10px;
  background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
}

.view-line-chart::-webkit-scrollbar-track {
  /* 滚动条里面轨道 */
  box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
  background: #ededed;
  border-radius: 10px;
}
</style>
