<template>
    <div class="app-container">
        <router-view/>
    </div>
</template>
<script>

export default ({
    components: {
    },
    setup() {
    },
});
</script>

<style lang="scss">
@import "./assets/css/reset.css";
@import "./assets/css/global.css";

#app {
  width: 100%;
  height: 100%;
}

html,
body {
  background-color: #e9ecef;
  height: 100%;
}

.app-container {
  height: 100%;
}
</style>
