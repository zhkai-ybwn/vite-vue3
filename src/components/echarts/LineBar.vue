<template>
    <div ref="chartRef"></div>
</template>
<script>
import { ref } from 'vue';
import * as echarts from 'echarts';

export default ({
    setup() {
        const chartRef = ref(null);
        const initChart = () => {
            const myChart = echarts.getInstanceByDom(chartRef.value);
            console.log(myChart);
        };
        return { chartRef, initChart };
    },
});
</script>
