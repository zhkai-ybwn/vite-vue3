<!--
 * @Description: 堆叠面积图
 * @Author: zhangkai
-->
<!--
 * @Description: 基础面积图
 * @Author: zhangkai
-->
<template>
    <div class="stacked-area-chart">
        <div ref="chartRef" :style="{width: `${width}px`, height: `${height}px`}"></div>
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
            default: 400,
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
                yData: [
                    { name: 'Email', data: [120, 132, 101, 134, 90, 230, 210] },
                    { name: 'Union Ads', data: [220, 182, 191, 234, 290, 330, 310] },
                    { name: 'Video Ads', data: [150, 232, 201, 154, 190, 330, 410] },
                    { name: 'Direct', data: [320, 332, 301, 334, 390, 330, 320] },
                    { name: 'Search Engine', data: [820, 932, 901, 934, 1290, 1330, 1320] },
                ],
            }),
        },
    },
    setup(props) {
        const chartRef = ref(null);
        let chart = null;
        const getSeries = () => {
            const series = [];
            props.data.yData.forEach((item) => {
                series.push({
                    name: item.name,
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series',
                    },
                    data: item.data,
                });
            });
            return series;
        };
        const getLegend = () => {
            const legend = [];
            props.data.yData.forEach((item) => {
                legend.push(item.name);
            });
        };
        const getOption = () => ({
            // title: {
            //     text: 'Stacked Area Chart',
            // },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985',
                    },
                },
            },
            legend: {
                data: getLegend(),
            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {},
            //     },
            // },
            // grid: {
            //     left: '3%',
            //     right: '4%',
            //     bottom: '3%',
            //     containLabel: true,
            // },
            xAxis: {
                type: 'category',
                boundaryGap: false,
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
