<!--
 * @Description: 渐变堆叠面积图
 * @Author: zhangkai
-->
<template>
    <div class="gradient-area-chart">
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
                    { name: 'Email', data: [140, 232, 101, 264, 90, 340, 250] },
                    { name: 'Union Ads', data: [120, 282, 111, 234, 220, 340, 310] },
                    { name: 'Video Ads', data: [320, 132, 201, 334, 190, 130, 220] },
                    { name: 'Direct', data: [220, 402, 231, 134, 190, 230, 120] },
                    { name: 'Search Engine', data: [220, 302, 181, 234, 210, 290, 150] },
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
                    smooth: true,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128,255,165)',
                            },
                            {
                                offset: 1,
                                color: 'rgb(1,191,236)',
                            },
                        ]),
                    },
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
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
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
