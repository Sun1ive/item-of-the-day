import { shallow, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import First from '@/components/Blocks/First.vue';
import store from '@/store';

const localVue = createLocalVue();


localVue.use(Vuex);

describe('First.vue', () => {
  it('runs after mount', () => {
    const wrapper = shallow(First, {
      store,
      stubs: ['Btn', 'swiper-slide', 'ProductContainer', 'swiper'],
    });
    expect(wrapper.classes()).toContain('first');
  });
});
