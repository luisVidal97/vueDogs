import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import vuetify from './config/vuetify';
import  Home from './views/Home';
import Pets from './views/Pets';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/pets", component: Pets }
]

const router = new VueRouter({routes});

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
