import { defineStore } from 'pinia';

export const useStore = defineStore({
    id: 'main',
    state: () => ({
        navBarIndex: 0,
        sideTabIndex: 0,
    }),
    actions: {
        setNavBarIndex(index) {
            this.$patch({
                navBarIndex: index,
            });
        },
        setSideTabIndex(index) {
            this.$patch({
                sideTabIndex: index,
            });
        },
    },
    persist: {
        enabled: true, // 开启数据缓存
    },
});
