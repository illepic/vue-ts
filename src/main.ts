import Vue from 'vue';
import Wrapper from './Wrapper.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Wrapper),
}).$mount('#app');
