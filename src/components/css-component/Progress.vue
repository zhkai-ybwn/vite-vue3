<template>
    <div class="progress-container" :style="{width: `${width}px`, height: `${height}px`}">
        <div class="progress-inspection" :style="{'--inspection-width': `${inspectionWidth * width}px`, backgroundColor: colorInspection}"></div>
        <div class="progress-alarm" :style="{'--alarm-width': `${alarmWidth * width}px`, backgroundColor: colorAlarm}"></div>
        <div class="progress-abnormal" :style="{'--abnormal-width': `${abnormalWidth * width}px`, backgroundColor: colorAbnormal}"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    computed: {
        inspectionWidth() {
            return this.inspectionValue / (this.inspectionValue + this.alarmValue + this.abnormalValue);
        },
        alarmWidth() {
            return this.alarmValue / (this.inspectionValue + this.alarmValue + this.abnormalValue);
        },
        abnormalWidth() {
            return this.abnormalValue / (this.inspectionValue + this.alarmValue + this.abnormalValue);
        },
    },
    props: {
        width: {
            type: Number,
            default: 500,
        },
        height: {
            type: Number,
            default: 10,
        },
        colorInspection: {
            type: String,
            default: '#61A3FF',
        },
        inspectionValue: {
            type: Number,
            default: 100,
        },
        colorAlarm: {
            type: String,
            default: '#FFC378',
        },
        alarmValue: {
            type: Number,
            default: 50,
        },
        colorAbnormal: {
            type: String,
            default: '#FF6060',
        },
        abnormalValue: {
            type: Number,
            default: 50,
        },
    },
};
</script>
<style lang="scss" scoped>
@keyframes inspection {
  0% {
    width: 0%;
  }

  100% {
    width: var(--inspection-width);
  }
}

@keyframes alarm {
  0% {
    width: 0%;
  }

  100% {
    width: var(--alarm-width);
  }
}

@keyframes abnormal {
  0% {
    width: 0%;
  }

  100% {
    width: var(--abnormal-width);
  }
}

.progress-container {
  display: flex;
  border-radius: 12px;

  .progress-inspection {
    border-radius: 12px;
    height: 100%;
    animation: inspection 3s linear;
    animation-fill-mode: forwards;
  }

  .progress-alarm {
    border-radius: 12px;
    height: 100%;
    animation: alarm 3s linear;
    animation-fill-mode: forwards;
  }

  .progress-abnormal {
    border-radius: 12px;
    height: 100%;
    animation: abnormal 3s linear;
    animation-fill-mode: forwards;
  }
}
</style>
