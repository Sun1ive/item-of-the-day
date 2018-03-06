import { shallow, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Modal from '@/components/Shared/BoxItemModal.vue';
import store from '@/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Modal.vue', () => {
  it('check props', () => {
    const wrapper = mount(Modal, {
      store,
      propsData: {
        src: 'Hello',
        id: 123,
        title: 'World',
        price: 222,
        type: 'lol',
        alt: 'Awesome',
      },
    });
    expect(wrapper.vm.src).toEqual('Hello');
    expect(wrapper.vm.id).toEqual(123);
    expect(wrapper.vm.title).toEqual('World');
    expect(wrapper.vm.type).toEqual('lol');
    expect(wrapper.vm.alt).toEqual('Awesome');
    expect(wrapper.vm.price).toEqual(222);
  });
});
