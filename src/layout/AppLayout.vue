<template>
    <div class="container">
        <div class="header">
            <NavBar></NavBar>
        </div>
        <div class="main">
            <SideTab></SideTab>
        </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import SideTab from './components/SideTab.vue';

export default {
    components: {
        NavBar,
        SideTab,
    },
    setup() {},
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;

  .header {
    height: 40px;
    border-top: 2px solid #00965e;
    background-color: #fff;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .main {
    margin-bottom: 3rem;
    margin-top: 1.5rem;
    height: calc(100% - 40px - 4.5rem);
  }
}
</style>>
