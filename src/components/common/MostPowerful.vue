<template>
    <div class="most-powerful-container">
        <div class="legend">
            <div class="legend-icon"></div>
            <div class="legend-text">最大功率</div>
        </div>
        <div class="content-list">
            <div class="content-item" v-for="(item, index) in data" :key="index">
                <div :class="['content-left', item.type === 1 ? 'blue': 'yellow']">
                </div>
                <div class="content-right">
                    <div class="content-right-title">
                        <div>{{item.title}}</div>
                    </div>
                    <div class="content-right-date-value">
                        <div :class="['date', item.type === 1 ? 'date-blue' : 'date-yellow']">{{item.date}}</div>
                        <div :class="['value', item.type === 1 ? 'value-blue' : 'value-yellow']">{{item.value}}</div>
                        <div :class="['unit', item.type === 1 ? 'unit-blue' : 'unit-yellow']">{{item.unit}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default ({
    setup() {
        const data = reactive([{
            type: 1, title: '当年最大功率', date: '8月21日', value: 9268, unit: 'kw',
        },
        {
            type: 2, title: '当月最大功率', date: '8月20日', value: 9268, unit: 'kw',
        }]);
        return { data };
    },
});
</script>

<style lang="scss" scoped>
.most-powerful-container {
  .legend {
    display: flex;
    flex-direction: row;
    align-items: center;

    .legend-icon {
      width: 12px;
      height: 12px;
      background: rgb(44 191 255 / 50%);
      border-radius: 50%;

      &::before {
        content: "";
        width: 6px;
        height: 6px;
        background: rgb(44 191 255 / 100%);
        border-radius: 50%;
        position: absolute;
        transform: translate(3px, 3px);
      }
    }

    .legend-text {
      margin-left: 9px;
      font-size: 16px;
      font-family: "Courier New", Courier, monospace;
      font-weight: 400;
      color: #e0f8ff;
      line-height: 24px;
    }
  }

  .content-list {
    .content-item {
      margin-top: 26px;
      width: 390px;
      height: 75px;
      background: url("../../assets/imgs/powerful_back.png") no-repeat 100% 100%;
      display: flex;

      .content-left {
        width: 80px;
        height: 80px;
        margin-left: 26px;
      }

      .yellow {
        background: url("../../assets/imgs/powerful_yellow.png") no-repeat 100% 100%;
      }

      .blue {
        background: url("../../assets/imgs/powerful_blue.png") no-repeat 100% 100%;
      }

      .content-right-title {
        width: 237px;
        height: 32px;
        background: rgb(216 246 252 / 10%);
        overflow: hidden;
        margin-left: 13px;

        div {
          font-size: 18px;
          font-family: "Courier New", Courier, monospace;
          font-weight: 400;
          color: #e4faff;
          margin-top: 6px;
          margin-left: 10px;
        }
      }

      .content-right-date-value {
        display: flex;

        .date {
          font-size: 21px;
          font-family: "Courier New", Courier, monospace;
          font-weight: 400;
        }

        .date-blue {
          color: #30d1f1;
        }

        .date-yellow {
          color: #ffbc1e;
        }

        .value {
          font-size: 28px;
          font-family: "Courier New", Courier, monospace;
          font-weight: 500;
          line-height: 34px;
        }

        .value-blue {
          color: #30d1f1;
        }

        .value-yellow {
          color: #ffbc1e;
        }

        .unit {
          font-size: 20px;
          font-family: "Courier New", Courier, monospace;
          font-weight: 500;
          line-height: 24px;
        }

        .unit-blue {
          color: #30d1f1;
        }

        .unit-yellow {
          color: #ffbc1e;
        }
      }
    }
  }
}
</style>
