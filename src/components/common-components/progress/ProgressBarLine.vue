<!--
 * @Description: 进度条
 * @Author: zhangkai
-->
<template>
    <div class="container" :style="{width: width + 'px'}">
        <div class="progress progress-moved" :style="{backgroundColor: colorBack}">
            <div class="progress-bar" :style="{height: height + 'px', backgroundColor: colorFront}"></div>
        </div>
    </div>
</template>

<script>

export default ({
    props: {
        width: {
            type: Number,
            default: 400,
        },
        height: {
            type: Number,
            default: 18,
        },
        // 进度条背景色
        colorBack: {
            type: String,
            default: '#fff',
        },
        // 进度条颜色
        colorFront: {
            type: String,
            default: '#f3c623',
        },
        // 进度条起始位置颜色
        colorStart: {
            type: String,
            default: '#f9bcca',
        },
    },
    setup() {
    },
});
</script>

<style lang="scss" scoped>
@keyframes progress {
  0% {
    width: 0%;
    background: v-bind("colorStart");
  }

  100% {
    width: 20%;
    background: #f3c623;
    box-shadow: 0 0 40px #f3c623;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  .progress {
    width: 100%;

    .progress-bar {
      transition: 0.4s linear;
      transition-property: width, background-color;
    }
  }

  .progress-moved .progress-bar {
    width: 20%;
    // infinite 动画无限次播放
    animation: progress 3s;
  }
}
</style>
