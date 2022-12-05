<!--
 * @Description: 利用定位 + transform
 * @Author: zhangkai
-->
<template>
    <div class="transform-container">
        <div class="son"></div>
    </div>
</template>
<style lang="scss" scoped>
.transform-container {
  margin: 20px auto;
  width: 100px;
  height: 60px;
  position: relative;
  border: 1px solid #8b5357;

  .son {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #123b57;
  }
}
</style>
