<!--
 * @Description: 利用table布局
 * @Author: zhangkai
-->
<template>
    <div class="table-display-container">
        <div class="son"></div>
    </div>
</template>
<style lang="scss" scoped>
.table-display-container {
  width: 100px;
  height: 60px;
  border: 1px solid #a27554;
  display: table-cell;
  vertical-align: middle;
  text-align: center;

  .son {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #cac3bd;
  }
}
</style>
