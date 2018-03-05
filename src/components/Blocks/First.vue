<template>
  <div class="first">
    <div class="container">
      <div class="row">
        <div class="col">
          <ProductContainer>
            <h1 slot="item-head">Сувенирные подушечки с лавандой внутнри</h1>
            <Slider slot="item-image" :slider="slider" />
            <div slot="item-size">40*40</div>
            <div slot="item-composition">flowers of lavender, sintepon</div>
            <div slot="item-price">$29</div>
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
              @click.native="showModal = !showModal"
            >Add to</Btn>
          </ProductContainer>
        </div>
      </div>
    </div>
    <Modal
      v-if="showModal"
      @close="showModal = !showModal"
    >
      <BoxItemModal
        v-for="(item, i) in slider"
        :key="i"
        @increment="increment"
      ><img slot="image" :src="item.src">
      </BoxItemModal>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Slider from '../Shared/Slider.vue';

export default Vue.extend({
  components: {
    Slider,
  },
  data: () => ({
    showModal: false as boolean,
    slider: [
      {
        src: '/3-layers.png',
        price: 21,
      },
      {
        src: '/2-layers.png',
        price: 21,
      },
      {
        src: '/3-layers.png',
        price: 21,
      },
      {
        src: '/3-layers.png',
        price: 21,
      },
      {
        src: '/3-layers.png',
        price: 21,
      },
    ] as Array<{ src: string; price: number }>,
  }),
  methods: {
    increment() {
      console.log('213');
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
