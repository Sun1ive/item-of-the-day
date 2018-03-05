import Vue from 'vue';
import Box from '@/components/Shared/Box.vue';
import Btn from '@/components/Shared/Button.vue';
import Modal from '@/components/Shared/Modal.vue';
import ProductContainer from '@/components/Shared/ProductContainer.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
/* eslint-disable import/no-extraneous-dependencies */
import 'swiper/dist/css/swiper.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import App from './App.vue';
import './registerServiceWorker';
import './styles/main.styl';

Vue.config.productionTip = false;
Vue.component('Box', Box);
Vue.component('Btn', Btn);
Vue.component('Modal', Modal);
Vue.component('ProductContainer', ProductContainer);

Vue.use(VueAwesomeSwiper);

new Vue({
  render: h => h(App),
}).$mount('#app');
