import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router.js';
import Router from 'vue-router'

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(Router)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
