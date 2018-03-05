import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import App from './App.vue';
import './registerServiceWorker';
import './styles/main.styl';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
