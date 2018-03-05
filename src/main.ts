import Vue from 'vue';
import Box from '@/components/Shared/Box.vue';
import Btn from '@/components/Shared/Button.vue';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import App from './App.vue';
import './registerServiceWorker';
import './styles/main.styl';

Vue.config.productionTip = false;
Vue.component('Box', Box);
Vue.component('Btn', Btn);


new Vue({
  render: h => h(App),
}).$mount('#app');
