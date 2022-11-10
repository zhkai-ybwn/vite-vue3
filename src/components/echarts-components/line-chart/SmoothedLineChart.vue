<!--
 * @Description: 基础平滑折线图
 * @Author: zhangkai
-->
<template>
    <div class="smoothed-line-chart">
        <div ref="chartRef" :style="{width:`${width}px`,height:`${height}px`}"></div>
    </div>
</template>

<script>
import {
    nextTick, ref, watch,
} from 'vue';
import * as echarts from 'echarts';

export default ({
    props: {
        // 图表宽度
        width: {
            type: Number,
            default: 300,
        },
        // 图表高度
        height: {
            type: Number,
            default: 300,
        },
        // 图表数据
        data: {
            type: Object,
            default: () => ({
                // x轴数据
                xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                // y轴数据
                yData: [150, 230, 224, 218, 135, 147, 260],
            }),
        },
    },
    setup(props) {
        const chartRef = ref(null);
        let chart = null;
        const getSeries = () => {
            const series = [];
            series.push({
                data: props.data.yData,
                type: 'line',
                smooth: true,
            });
            return series;
        };
        const getOption = () => ({
            xAxis: {
                type: 'category',
                data: props.data.xData,
            },
            yAxis: {
                type: 'value',
            },
            series: getSeries(),
        });
        const initChart = () => {
            chart = echarts.init(chartRef.value);
            chart.setOption(getOption(), true);
        };
        watch(() => props.data, async (val) => {
            if (JSON.stringify(val) === '{}') return;
            nextTick(() => {
                initChart();
            });
        }, {
            immediate: true,
        });
        return { chartRef };
    },
});
</script>
