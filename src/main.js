import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import './style/main.styl';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
