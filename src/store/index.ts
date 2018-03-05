import Vue from 'vue';
import Vuex from 'vuex';
import { IProduct } from '../types/types';

Vue.use(Vuex);

interface IState {
  cart: any[];
  typeOne: Array<{
    title: string;
    src: string;
    price: number;
    alt: string;
    id: number;
    type: string;
  }>;
}

export default new Vuex.Store({
  state: {
    cart: [],
    typeOne: [
      {
        title: 'Hello',
        src: '/3-layers.png',
        price: 21,
        alt: 'Awesome Item',
        id: 1,
        type: 'one',
      },
      {
        title: 'Hello1',
        src: '/2-layers.png',
        price: 55,
        alt: 'Awesome Item',
        id: 2,
        type: 'one',
      },
      {
        title: 'Hello2',
        src: '/3-layers.png',
        price: 31,
        alt: 'Awesome Item',
        id: 3,
        type: 'one',
      },
      {
        title: 'Hello3',
        src: '/3-layers.png',
        price: 29,
        alt: 'Awesome Item',
        id: 4,
        type: 'one',
      },
      {
        title: 'Hello4',
        src: '/3-layers.png',
        price: 21,
        alt: 'Awesome Item',
        id: 5,
        type: 'one',
      },
    ],
  } as IState,
  mutations: {
    increment(state: IState, payload: IProduct) {
      state.cart.push(payload);
    },
    decrement(state: IState, payload: IProduct) {
      state.cart.splice(state.cart.findIndex(x => x.item === payload.item), 1);
    },
  },
});
