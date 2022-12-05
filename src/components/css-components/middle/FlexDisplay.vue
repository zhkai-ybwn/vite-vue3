<!--
 * @Description: 利用flex布局
 * @Author: zhangkai
-->
<template>
    <div class="flex-display-container">
        <div class="son"></div>
    </div>
</template>
<style lang="scss" scoped>
.flex-display-container {
  width: 100px;
  height: 60px;
  border: 1px solid #a08d75;
  display: flex;
  justify-content: center;
  align-items: center;

  .son {
    width: 20px;
    height: 20px;
    background: #cda632;
  }
}
</style>
