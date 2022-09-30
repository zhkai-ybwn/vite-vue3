import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';
import App from './App.vue';
import router from './router';
import './components/common/index';
import SvgIcon from './components/common/SvgIcon.vue';
import './assets/icons/iconfont';
import 'font-awesome/css/font-awesome.min.css';

const app = createApp(App);
// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(ElementPlus);
app.use(router);
app.use(createPinia().use(piniaPluginPersist));
app.component('SvgIcon', SvgIcon);
app.mount('#app');
