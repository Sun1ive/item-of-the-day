import Vue from 'vue';
import Puex from 'puex';
import { IProduct } from '../types/types';

Vue.use(Puex);

interface IState {
  cart: any[];
}

export default new Puex({
  state: {
    cart: [],
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
