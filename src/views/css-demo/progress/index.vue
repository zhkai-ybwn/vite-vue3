<template>
    <div class="view-login">
    </div>
</template>
<script>

export default ({
    components: {
    },
    setup() {
        const data = [{ name: '巡检工单', value: 100, color: '#61A3FF' }, { name: '告警工单', value: 30, color: '#FFC378' }, { name: '异常工单', value: 20, color: '#FF6060' }];
        return { data };
    },
});
</script>

<style lang="scss" scoped>
.view-login {
  width: 100%;
  height: 100%;

  /* 弹性盒子模型 */
  display: flex;

  /* 限免两个属性是让body里的子类居中 */
  justify-content: center;
  align-items: center;
  background-color: #011f49;
  //   background-color: #d9afd9;
  //   background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
}
</style>
