<template>
  <div class="first">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ProductContainer>
            <h1 slot="item-head" class="head">Сувенирные подушечки с лавандой внутри</h1>
            <Slider slot="item-image" :slider="slider" />
            <div slot="item-size" class="params">40*40</div>
            <div slot="item-composition" class="params">flowers of lavender, sintepon</div>
            <div slot="item-price" class="params">$29</div>
            <p slot="item-text" class="text">Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas numquam ullam expedita
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
      return this.$store.state.typeOne;
    },
    isActive(): boolean {
      return this.$store.state.modalOne;
    },
  },
  methods: {
    showModal() {
      this.$store.commit('showModalOne', true);
    },
    closeModal() {
      this.$store.commit('showModalOne', false);
    },
  },
});
</script>


<style scoped lang="stylus">
.first
  background-image: url('/first.png');
  background-position: center;
  background-size: cover;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;

</style>
