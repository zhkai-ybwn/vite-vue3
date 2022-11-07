<!--
 * @Description: 圆环进度条
 * @Author: zhangkai
-->
<template>
    <div>
        <div class="circular-progress-container" ref="chartRef" :style="{width:`${width}px`,height:`${height}px`}"></div>
    </div>
</template>

<script>
import {
    nextTick, ref, toRefs, watch,
} from 'vue';
import * as echarts from 'echarts';

export default {
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
        // 数据
        data: {
            type: Object,
            default: () => ({
                max: 100,
                value: 60,
            }),
        },
    },
    setup(props) {
        const chartRef = ref(null);
        let chart = null;
        const { data } = toRefs(props);
        const { max, value } = data.value;
        const littleCircle = value / max;
        const getSeries = () => {
            const series = [];
            series.push({
                type: 'bar',
                stack: '测试',
                data: [{
                    value: value > 0 ? value : 0,
                    name: 'custom',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: 'rgba(29,165,255,1)' }, { offset: 1, color: 'rgba(99,164,255,1)' },
                        ]),
                    },
                }],
                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true,
                z: 2,
            });
            series.push({
                type: 'bar',
                data: [
                    { value: max, itemStyle: { color: 'rgba(33,80,127,0.3)' } },
                ],
                barGap: '-100%',
                coordinateSystem: 'polar',
                roundCap: true,
                z: 1,
            });
            series.push({
                type: 'pie',
                center: ['50%', '56%'],
                radius: ['49%', '49%'],
                zlevel: 10,
                silent: true,
                startAngle: -135, // 极坐标初始角度
                endAngle: 0,
                data: [
                    {
                        name: '',
                        value: littleCircle,
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: 'rgba(0,0,0,0)',
                        },
                    },

                    // 画中间的图标
                    {
                        name: '',
                        value: 0,
                        label: {
                            position: 'inside',
                            backgroundColor: '#C4DCFF',
                            borderRadius: 9,
                            padding: 9, // 可以控制圆的大小
                            borderWidth: 5,
                            borderColor: 'rgba(255, 255, 255, 1)',
                        },
                    },
                    {
                        name: '',
                        value: (360 / 270) - littleCircle,
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            color: 'rgba(196, 220, 255, 0)',
                        },
                    },
                ],
            });
            return series;
        };
        const getOption = () => ({
            backgroundColor: 'transparent',
            angleAxis: {
                show: false,
                max: (max * 360) / 270,
                type: 'value',
                startAngle: -135,
                splitLine: {
                    show: false,
                },
            },
            barMaxWidth: 12,
            radiusAxis: {
                show: false,
                type: 'category',
            },
            polar: {
                center: ['50%', '56%'],
                radius: '100%',
            },
            series: getSeries(),
        });
        const initChart = () => {
            chart = echarts.init(chartRef.value);
            const chartData = data.value;
            const option = getOption(chartData);
            chart.setOption(option, true);
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
};
</script>
