<!--
 * @Description:登录页面，鼠标移入移除动画遮罩
 * @Author: zhangkai
-->

<template>
    <div class="container" @mouseenter="mouseEnter($event)" @mouseleave="mouseLeave($event)">
        <h1>Login</h1>
        <form action="">
            <input type="text" class="tbx" placeholder="账号"/>
            <input type="password" class="tbx" placeholder="密码"/>
            <input type="submit" class="sub" placeholder="登录"/>
        </form>
        <span v-if="isEnter"
              :class="[inOrOut === 1 ? 'in' : 'out']"
              :style="{left: lengthX + 'px', top: lengthY + 'px'}"></span>
    </div>
</template>>

<script>
import { ref } from 'vue';

export default {
    setup() {
        // 鼠标移入开关
        const isIn = ref(true);
        // 鼠标移出开关
        const isOut = ref(false);
        // 鼠标移入/移出的位置X
        const lengthX = ref(0);
        // 鼠标移入/移出的位置Y
        const lengthY = ref(0);
        // hover是否显示
        const isEnter = ref(false);
        // 控制hover样式
        const inOrOut = ref(0);
        /**
         * 鼠标移入container事件
         * @param {*} event 对象
         */
        const mouseEnter = (event) => {
            if (isIn.value) {
                isEnter.value = true;
                inOrOut.value = 1;
                lengthX.value = event.clientX - event.target.offsetLeft;
                lengthY.value = event.clientY - event.target.offsetTop;
                isIn.value = false;
                isOut.value = true;
            }
        };
        /**
         * 鼠标移出container事件
         * @param {*} event 对象
         */
        const mouseLeave = (event) => {
            if (isOut.value) {
                inOrOut.value = 2;
                lengthX.value = event.clientX - event.target.offsetLeft;
                lengthY.value = event.clientY - event.target.offsetTop;
                isIn.value = true;
                isOut.value = false;
                setTimeout(() => {
                    isEnter.value = false;
                }, 500);
            }
        };
        return {
            mouseEnter, lengthX, lengthY, isEnter, mouseLeave, inOrOut,
        };
    },
};
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    height: 450px;
    border-radius: 20px;
    background-color: #4471a3;
    // 添加阴影 X轴 Y轴 模糊距离 阴影范围
    box-shadow: 15px 15px 10px rgb(33 45 58 / 30%);
    overflow: hidden;
    position: relative;

    h1 {
      color: #fff;
      font-size: 50px;
      text-align: center;
      letter-spacing: 5px;
      font-weight: 100;
      text-shadow: 5px 5px 5px rgb(33 45 58 / 30%);
      z-index: 1;
    }

    form {
      width: 350px;
      height: 200px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      z-index: 1;

      .tbx {
        width: 250px;
        height: 40px;
        outline: none;
        border: none;
        border-bottom: 1px solid #fff;
        background: none;
        color: #fff;
        font-size: 15px;
      }

      .tbx::placeholder {
        color: #fff;
        font-size: 15px;
      }

      .sub {
        width: 250px;
        height: 40px;
        outline: none;
        border: 1px solid #fff;
        border-radius: 20px;
        letter-spacing: 5px;
        color: #fff;
        background: none;
        cursor: pointer;
        margin-top: 20px;
      }
    }

    .in {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: #cf455f;
      transform: translate(-50%, -50%);
      animation: in 0.5s ease-out forwards;
    }

    .out {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 1200px;
      height: 1200px;
      border-radius: 50%;
      background: #cf455f;
      transform: translate(-50%, -50%);
      animation: out 0.5s ease-out forwards;
    }
  }

  @keyframes in {
    0% {
      width: 0;
      height: 0;
    }

    100% {
      width: 1200px;
      height: 1200px;
    }
  }

  @keyframes out {
    0% {
      width: 1200px;
      height: 1200px;
    }

    100% {
      width: 0;
      height: 0;
    }
  }

</style>
