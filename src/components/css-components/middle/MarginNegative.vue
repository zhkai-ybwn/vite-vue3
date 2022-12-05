<!--
 * @Description: 利用定位 + margin:负值
 * @Author: zhangkai
-->
<template>
    <div class="margin-negative-container">
        <div class="son"></div>
    </div>
</template>
<style lang="scss" scoped>
.margin-negative-container {
  margin: 20px auto;
  width: 100px;
  height: 60px;
  position: relative;
  border: 1px solid #5a7c4d;

  .son {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -10px;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    background: #e3971f;
  }
}
</style>
