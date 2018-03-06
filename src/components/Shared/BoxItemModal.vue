<template>
  <div class="modal">
    <div class="boxItem__wrapper">
      <div class="border">
        <img :src="src" :alt="alt">
      </div>
      <div class="boxItem__actions">
        <div class="increment" @click="increment">+</div>
        <div class="quantity">{{ quantity }}</div>
        <div class="decrement" @click="decrement">-</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { IProductsArray } from '../../types/types';

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    quantity: 0,
  }),
  created() {
    this.quantity = this.$store.state.cart.filter((x: IProductsArray) => x.id === this.id).length;
  },
  methods: {
    increment() {
      this.$store.commit('increment', {
        title: this.title,
        item: this.src,
        price: this.price,
        id: this.id,
        type: this.type,
      });
      this.quantity += 1;
    },
    decrement() {
      if (this.quantity > 0) {
        this.$store.commit('decrement', {
          item: this.src,
        });
        this.quantity -= 1;
      }
    },
  },
});
</script>


<style scoped lang="stylus">
.boxItem__wrapper
  overflow: hidden
  min-width: 200px
  min-height: 150px
  margin: 0 1rem

.border
  border: 5px solid #dcd7e9;
  margin: 1rem 0;

.boxItem__actions
  display: flex;
  align-items: center;
  justify-content: center

.increment, .decrement
  font-size: 4rem;
  cursor: pointer;
  padding: 0 1rem;

.quantity
  background-color: #dcd7e9;
  padding: 0.1rem 2rem;
  font-size: 2rem;

</style>
