<!--
 * @Description: 利用定位 + margin:auto
 * @Author: zhangkai
-->
<template>
    <div class="margin-auto-container">
        <div class="son"></div>
    </div>
</template>
<style lang="scss" scoped>
.margin-auto-container {
  margin: 20px auto;
  width: 100px;
  height: 60px;
  border: 1px solid #0a3b98;
  position: relative;

  .son {
    width: 20px;
    height: 20px;
    background: #f0a238;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
