/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';
import Login from '@/layouts/Login.vue';

import { init, Lib } from '@/main_custom';

init();

ShardsVue.install(Vue);

Vue.component('default-layout', Default);
Vue.component('login-layout', Login);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
Vue.prototype.$lib = new Lib('ae');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
