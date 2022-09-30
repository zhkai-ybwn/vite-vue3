<template>
    <div class="tab-container">
        <nav class="tab-nav">
            <div class="tab-item" v-for="(path, index) in routerInfo" :key="index" @click="clickPath(index)">
                <el-icon><component :is="path.meta.icon"></component></el-icon>
                {{path.name}}
                <DropDownMenu v-if="currentIndex === index" :childrenList="path.children">
                </DropDownMenu>
            </div>
        </nav>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import DropDownMenu from './DropDownMenu.vue';

export default ({
    components: {
        DropDownMenu,
    },
    setup() {
        const router = useRouter();
        const routerInfo = reactive(router.options.routes);
        const isShowMenu = ref(false);
        const currentIndex = ref(null);
        const clickPath = (index) => {
            if (currentIndex.value === index || index === 0) {
                currentIndex.value = null;
            } else {
                currentIndex.value = index;
            }
            isShowMenu.value = !isShowMenu.value;
        };
        return {
            routerInfo, isShowMenu, clickPath, currentIndex,
        };
    },
});
</script>

<style lang="scss" scoped>
.tab-container {
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 1150px;
  margin-right: auto;
  margin-left: auto;
  font-weight: bold;

  .tab-nav {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    .tab-item {
      display: block;
      padding: 0.5rem 1rem;
      color: rgb(0 0 0 / 55%);
      text-decoration: none;
    }

    .tab-item:hover {
      color: rgb(0 0 0 / 70%);
    }

    a.router-link-active {
      color: #00965e;
      text-decoration: none;
    }

    a.router-link-active:hover {
      color: #004a2e;
      text-decoration: none;
    }
  }
}
</style>
