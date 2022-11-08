<!--
 * @Description: echarts折线图view页面
 * @Author: zhangkai
-->
<template>
    <div class="view-line-chart">
        <BasicLineChart></BasicLineChart>
        <BasicLineChart :config="smoothConfigObj"></BasicLineChart>
        <BasicLineChart :config="basicAreaConfigObj"></BasicLineChart>
        <BasicLineChart :config="stackedLineConfigObj"></BasicLineChart>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue';
import BasicLineChart from '../../../components/echarts-components/line-chart/BasicLineChart.vue';

export default ({
    components: {
        BasicLineChart,
    },
    setup() {
        const data = reactive({
            // 是否平滑曲线显示
            smoothConfigObj: {
                smooth: true,
            },
            // 区域填充样式
            basicAreaConfigObj: {
                areaStyle: {
                    // 填充颜色
                    color: '#a1d8b1',
                    // 图形区域起始位置
                    origin: 'auto',
                    // 图形阴影的模糊大小
                    shadowBlur: 10,
                    // 阴影颜色
                    shadowColor: '#edfcc2',
                    // 阴影水平方向上的偏移距离
                    shadowOffsetX: 0,
                    // 阴影垂直方向上的偏移距离
                    shadowOffsetY: 0,
                    // 图形透明度
                    opacity: 0.5,
                },
            },
            // 折线图堆叠
            stackedLineConfigObj: {
                // 标题
                title: {
                    // 组件ID
                    id: '',
                    // 是否显示标题组件
                    show: true,
                    // 主标题文本，支持使用 \n 换行
                    text: 'Stacked Line',
                    // 主标题文本超链接
                    link: '',
                    // 指定窗口打开主标题超链接
                    target: '',
                    textStyle: {
                        // 主标题文字颜色
                        color: '#60bdaf',
                        // 主标题文字字体的风格
                        fontStyle: 'oblique',
                        // 主标题文字字体的粗细
                        fontWeight: 400,
                        // 主标题文字的字体系列
                        fontFamily: '仓耳渔阳体 W02',
                        fontSize: 16,
                    },
                },
                // 提示框组件
                tooltip: {
                    trigger: 'axis',
                },
                // 图例组件
                legend: {
                    data: ['Email'],
                },
            },
        });
        return { ...toRefs(data) };
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
