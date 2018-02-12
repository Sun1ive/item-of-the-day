import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './style/main.styl';
import './registerServiceWorker';

import Button from '@/components/Shared/Button.vue';
import ProductContainer from '@/components/Shared/ProductContainer.vue';
import Box from '@/components/Shared/Box.vue';

Vue.component('Btn', Button);
Vue.component('ProductContainer', ProductContainer);
Vue.component('Box', Box);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
