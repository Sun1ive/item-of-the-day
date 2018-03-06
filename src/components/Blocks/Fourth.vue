<template>
  <div class="fourth">
    <div class="container">
      <div class="row">
        <div class="col">
          <ProductContainer>
            <h1 slot="item-head">Вафельные кухонные полотенца</h1>
            <Slider
              slot="item-image"
              :slider="slider"
              :height="170"
            />
            <div slot="item-size">40*40</div>
            <div slot="item-composition">flowers of lavender, sintepon</div>
            <div slot="item-price">$19</div>
            <p
              slot="item-text"
              class="text"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam ullam expedita
            incidunt necessitatibus consectetur, provident, voluptatem fuga repellat
            molestiae alias laborum sunt rerum molestias amet quisquam dolores culpa eius.</p>
            <Btn
              slot="button"
              :cart="true"
              :height="55"
              :width="220"
              :iconWidth="30"
              :iconHeight="30"
              class="btn"
              @click.native="showModal"
            >Add to</Btn>
          </ProductContainer>
        </div>
      </div>
    </div>
    <Modal
      v-if="isActive"
      @close="closeModal"
    >
      <BoxItemModal
        v-for="(item, i) in slider"
        :key="i"
        :src="item.src"
        :price="item.price"
        :alt="item.alt"
        :id="item.id"
        :title="item.title"
        :type="item.type"
      />
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Slider from '../Shared/Slider.vue';
import { IProductsArray } from '../../types/types';

export default Vue.extend({
  components: {
    Slider,
  },
  computed: {
    slider(): IProductsArray[] {
      return this.$store.state.typeFour;
    },
    isActive(): boolean {
      return this.$store.state.modalFour;
    },
  },
  methods: {
    showModal() {
      this.$store.commit('showModalFour', true);
    },
    closeModal() {
      this.$store.commit('showModalFour', false);
    },
  },
});
</script>


<style scoped lang="stylus">
.fourth
  background-image: url('/fourth.png');
  background-position: center;
  background-size: cover;
  height: 1078px;
  display: flex;
  justify-content: center;
  align-items: center;

</style>
