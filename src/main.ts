import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './style/main.styl';
import './registerServiceWorker';

import Button from '@/components/Shared/Button.vue';

Vue.component('btn', Button);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
