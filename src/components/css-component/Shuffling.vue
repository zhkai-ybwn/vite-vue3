<template>
    <div class="container">
        <div class="right-component">
            <component :is="currentComponent"></component>
        </div>
        <div class="left-name">
            <span :class="[currentComponent === item.component ? 'active':'']" v-for="(item, index) in list" :key="index" @mousemove="showToBigBox(item)">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
import { shallowRef } from 'vue';

export default ({
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const currentComponent = shallowRef(props.list[0].component);
        const showToBigBox = (item) => {
            currentComponent.value = item.component;
        };
        return { currentComponent, showToBigBox };
    },
});
</script>
<style lang="scss" scoped>
.container {
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;

  .right-component {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-name {
    display: flex;
    width: 160px;
    flex-direction: column;
    background: linear-gradient(to bottom, transparent, #16161a 22%, #16161a 81%, transparent);

    span {
      color: rgb(255 255 255 / 60%);
      text-decoration: none;
      padding: 12px 20px;
      cursor: pointer;
    }

    .active {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      background: linear-gradient(to right, rgb(255 255 255 / 25%) 20%, transparent 90%);
    }
  }
}
</style>
