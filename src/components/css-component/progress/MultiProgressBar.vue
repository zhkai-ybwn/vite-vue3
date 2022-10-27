<!-- 多段进度条 -->
<template>
    <div class="multi-progress-container" ref="chartRef" :style="{width:`${width}px`,height:`${height}px`}"></div>
</template>

<script>
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
            default: 30,
        },
        // 数据
        dataValue: {
            type: Array,
            default: (() => [{ name: '', value: 120 }, { name: '', value: 80 }, { name: '', value: 80 }]),
        },
        // 进度条颜色
        colorList: {
            type: Array,
            default: (() => ['#61A3FF', '#FFC378', '#FF6060']),
        },
    },
    watch: {
        dataValue: {
            handler() {
                this.$nextTick(() => {
                    this.initChart();
                });
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        /**
         * @description: chart初始化
         */
        initChart() {
            let myChart = echarts.getInstanceByDom(this.$refs.chartRef);
            if (myChart) {
                myChart.clear();
            } else {
                myChart = echarts.init(this.$refs.chartRef);
            }
            const option = this.getOption();
            myChart.setOption(option, true);
        },
        /**
         * @description: chart属性配置获取
         * @return {*} chart属性
         */
        getOption() {
            return {
                xAxis: [
                    {
                        show: false,
                        max: this.sum(this.dataValue),

                    },
                ],
                yAxis: [
                    {
                        show: false,
                        type: 'category',
                    },
                ],
                series: this.getSeries(),
            };
        },
        /**
         * @description: 获取系列配置
         * @return {*} 系列配置
         */
        getSeries() {
            const seriesList = [];
            for (let i = 0; i < this.dataValue.length; i += 1) {
                const obj = {
                    name: this.dataValue[i].name,
                    type: 'bar',
                    stack: 'total',
                    data: [this.dataValue[i].value],
                    barWidth: 16,
                    yAxisIndex: 0,
                    itemStyle: {
                        color: this.colorList[i],
                        borderRadius: 12,
                    },
                };
                seriesList.push(obj);
            }
            return seriesList;
        },
        sum(arr) {
            let s = 0;
            for (let i = arr.length - 1; i >= 0; i -= 1) {
                s += arr[i].value;
            }
            return s;
        },
    },
};
</script>
