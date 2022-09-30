<template>
    <div class="menu-container">
        <div class="menu-list">
            <div class="menu-item" v-for="(m, index) in menuList" :key="index">
                <div class="menu-name">{{m.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    props: {
        childrenList: {
            type: Array,
            default: null,
            required: true,
        },
    },
    setup(props) {
        const menuList = reactive(props.childrenList);
        return { menuList };
    },
};
</script>

<style lang="scss" scoped>
  .menu-container {
    position: relative;

    .menu-list {
      display: flex;
      flex-direction: column;
      position: absolute;
      border: 1px solid rgb(0 0 0 / 15%);
      border-radius: 0.25rem;
      background-color: #fff;
      background-clip: padding-box;
      min-width: 100px;
      color: #212529;
      text-align: left;
      list-style: none;
      z-index: 1000;
    }
  }
</style>>
