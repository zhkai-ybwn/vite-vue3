<!--
 * @Description: 利用grid布局
 * @Author: zhangkai
-->
<template>
    <div class="grid-display-container">
        <div class="son"></div>
    </div>
</template>
<style lang="scss" scoped>
.grid-display-container {
  width: 100px;
  height: 60px;
  border: 1px solid #3a530d;
  display: grid;
  justify-content: center;
  align-items: center;

  .son {
    width: 20px;
    height: 20px;
    background: #e2c48d;
  }
}
</style>
