<template>
  <div v-if="inCart" class="container">
    <div class="row">
      <div class="col">
        <div class="item-box">
          <img :src="img" alt="Awesome Pillow">
          <div class="text__wrapper">
            <div class="title">{{ title }}</div>
            <div class="text__item">
              <div class="quantity">{{ quantity }}</div>
              <div class="total">{{ total }}$</div>
            </div>
            <div class="more" @click="showModal">...more</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { IProductsArray } from '../../types/types';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    inCart(): boolean {
      return this.quantity > 0;
    },
    quantity(): number {
      return this.filtered.length;
    },
    img(): string {
      return this.$store.state.cart
        .filter((x: IProductsArray) => x.type === this.type)
        .map((t: IProductsArray) => t.item)
        .splice(0, 1);
    },
    filtered(): IProductsArray[] {
      return this.$store.state.cart.filter((x: IProductsArray) => x.type === this.type);
    },
    total(): number {
      if (this.filtered.length > 0) {
        return this.filtered.reduce((acc, item) => acc + item.price, 0);
      }
      return 0;
    },
  },
  methods: {
    showModal() {
      if (this.type === 'one') {
        this.$store.commit('showModalOne', true);
      } else if (this.type === 'two') {
        this.$store.commit('showModalTwo', true);
      } else if (this.type === 'three') {
        this.$store.commit('showModalThree', true);
      } else if (this.type === 'four') {
        this.$store.commit('showModalFour', true);
      }
    },
  },
});
</script>


<style scoped lang="stylus">
.item-box
  width 100%
  padding 1rem
  background-color #fff
  display flex
  align-items center
  position relative
  .more
    position absolute
    bottom 0
    right 0
    background-color #dfab1f
    color #fff
    padding 0 1rem
    cursor pointer
  img
    width 100px
    height 100px
    border 2px solid #cbc4dc
  .text__wrapper
    font-size 2rem
    margin-left 2rem

.quantity
  background-color #cbc4dc
  font-size 2rem
  width 70px
  text-align center

.text__item
  display flex
  align-items center
  margin-top 1rem

.total
  font-size 2.5rem
  color: #dfab1f
  margin-left 3rem

</style>
