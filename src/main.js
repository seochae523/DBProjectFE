import { createApp } from 'vue'
import axios from 'axios';
import App from './App.vue';
import router from "./router/router";
import vueCookies from 'vue-cookies';
import store from '@/store/index.js'

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(store);
app.use(router);
app.use(vueCookies);
app.mount('#app');

