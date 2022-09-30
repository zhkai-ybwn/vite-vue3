<template>
    <div class="progress-bar-container">
        <div class="progress-value-block">
            <div class="progress-value">
                <span>099</span>
            </div>
            <div class="progress-block">
                <ul>
                    <li v-for="i in 8" :key="i"></li>
                </ul>
            </div>
        </div>
        <input
            ref="scrubber"
            :type="inputObj.type"
            :min="inputObj.min"
            :max="inputObj.max"
            :step="inputObj.step"
        />
    </div>
</template>
<script>
import { reactive } from 'vue';

export default ({
    setup() {
        const inputObj = reactive({
            type: 'range',
            min: 0,
            max: 1,
            step: 0.01,
        });
        return { inputObj };
    },
});
</script>

<style lang="scss" scoped>
.progress-bar-container {
  border-radius: 24px 0;
  // 向div元素添加阴影，inset：阴影从div边框向内
  box-shadow: inset 0 0 0 5px #222;
  background: black;
  padding: 2rem;
  margin: 0 1rem;
  width: 100%;
  max-width: 800px;

  .progress-value-block {
    display: flex;
    justify-content: center;
    align-items: center;

    .progress-value {
      position: relative;
      font-size: 6rem;
      font-weight: normal;
      font-family: "d7", monospace;
      text-align: left;
      color: red;
      padding: 0;
      margin: 0;
      width: 20%;

      span {
        position: relative;
        z-index: 1;
      }

      // 在选定元素前插入元素
      &::before {
        position: absolute;
        z-index: 0;
        display: block;
        content: "000";
        color: #222;
      }
    }

    .progress-block {
      margin-left: 20px;
      padding: 0 0.85rem;

      &:last-of-type {
        ul {
          width: 320px;
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          li {
            position: relative;
            // overflow: hidden;
            padding: 2.5rem 1rem;
            transform: skewX(30deg);

            &::before {
              position: absolute;
              top: 0;
              left: 0;
              display: block;
              content: "";
              width: 100%;
              height: 100%;
              border-radius: 12px;
              background-image:
                linear-gradient(
                  0deg,
                  #83fa21 0%,
                  #c8ff9b 84%
                );
            }
          }
        }
      }
    }
  }

  input[type="range"] {
    height: 25px;
    appearance: none;
    margin: 10px 0;
    width: 100%;
    background: none;
  }

  input[type="range"]:focus {
    outline: none;
  }

  //  WebKit / Blink 特有的专有伪元素。 滑道可运行轨道
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: red;
  }

  input[type="range"]::-webkit-slider-thumb {
    box-shadow: none;
    border: 1px solid red;
    height: 25px;
    width: 25px;
  }
}
</style>
