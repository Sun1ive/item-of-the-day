import Vue from 'vue';
import Vuex from 'vuex';
import { IProduct } from '../types/types';

Vue.use(Vuex);

interface IState {
  modalOne: boolean;
  modalTwo: boolean;
  modalThree: boolean;
  modalFour: boolean;
  cart: any[];
  typeOne: Array<{
    title: string;
    src: string;
    price: number;
    alt: string;
    id: number;
    type: string;
  }>;
  typeTwo: Array<{
    title: string;
    src: string;
    price: number;
    alt: string;
    id: number;
    type: string;
  }>;
  typeThree: Array<{
    title: string;
    src: string;
    price: number;
    alt: string;
    id: number;
    type: string;
  }>;
  typeFour: Array<{
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
    modalOne: false,
    modalTwo: false,
    modalThree: false,
    modalFour: false,
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
        src: '/3-layers.png',
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
    typeTwo: [
      {
        title: 'Hello',
        src: '/2-layers.png',
        price: 21,
        alt: 'Awesome Item',
        id: 6,
        type: 'two',
      },
      {
        title: 'Hello1',
        src: '/2-layers.png',
        price: 55,
        alt: 'Awesome Item',
        id: 7,
        type: 'two',
      },
      {
        title: 'Hello2',
        src: '/2-layers.png',
        price: 31,
        alt: 'Awesome Item',
        id: 8,
        type: 'two',
      },
      {
        title: 'Hello3',
        src: '/2-layers.png',
        price: 29,
        alt: 'Awesome Item',
        id: 9,
        type: 'two',
      },
      {
        title: 'Hello4',
        src: '/2-layers.png',
        price: 21,
        alt: 'Awesome Item',
        id: 10,
        type: 'two',
      },
    ],
    typeThree: [
      {
        title: 'Hello',
        src: '/1-layer.png',
        price: 21,
        alt: 'Awesome Item',
        id: 11,
        type: 'three',
      },
      {
        title: 'Hello1',
        src: '/1-layer.png',
        price: 55,
        alt: 'Awesome Item',
        id: 12,
        type: 'three',
      },
      {
        title: 'Hello2',
        src: '/1-layer.png',
        price: 31,
        alt: 'Awesome Item',
        id: 13,
        type: 'three',
      },
      {
        title: 'Hello3',
        src: '/1-layer.png',
        price: 29,
        alt: 'Awesome Item',
        id: 14,
        type: 'three',
      },
      {
        title: 'Hello4',
        src: '/1-layer.png',
        price: 21,
        alt: 'Awesome Item',
        id: 15,
        type: 'three',
      },
    ],
    typeFour: [
      {
        title: 'Hello',
        src: '/micro.png',
        price: 21,
        alt: 'Awesome Item',
        id: 16,
        type: 'four',
      },
      {
        title: 'Hello1',
        src: '/micro.png',
        price: 55,
        alt: 'Awesome Item',
        id: 17,
        type: 'four',
      },
      {
        title: 'Hello2',
        src: '/micro.png',
        price: 31,
        alt: 'Awesome Item',
        id: 18,
        type: 'four',
      },
      {
        title: 'Hello3',
        src: '/micro.png',
        price: 29,
        alt: 'Awesome Item',
        id: 19,
        type: 'four',
      },
      {
        title: 'Hello4',
        src: '/micro.png',
        price: 21,
        alt: 'Awesome Item',
        id: 20,
        type: 'four',
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
    showModalOne(state, payload: boolean) {
      state.modalOne = payload;
    },
    showModalTwo(state, payload: boolean) {
      state.modalTwo = payload;
    },
    showModalThree(state, payload: boolean) {
      state.modalThree = payload;
    },
    showModalFour(state, payload: boolean) {
      state.modalFour = payload;
    },
  },
  getters: {
    totalPrice(state): number {
      return state.cart.reduce((acc, item) => acc + item.price, 0);
    },
  },
});
