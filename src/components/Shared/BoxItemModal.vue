<template>
  <div class="modal">
    <div class="BoxItemWrapper">
      <div class="border">
        <slot name="image" />
      </div>
      <div class="cart__actions">
        <div class="increment" @click="quantity++">+</div>
        <div class="quantity">{{ quantity }}</div>
        <div class="decrement" @click="decrement">-</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    quantity: 0,
  }),
  methods: {
    decrement() {
      if (this.quantity > 0) {
        this.quantity -= 1;
      }
    },
  },
});
</script>


<style scoped lang="stylus">
.BoxItemWrapper
  overflow hidden
  min-width 200px
  min-height 150px
  margin 0 1rem

.border
  border 5px solid #dcd7e9
  margin 1rem 0

.cart__actions
  display flex
  align-items center
  justify-content center

.increment
.decrement
  font-size 4rem
  cursor pointer
  padding 1rem

.quantity
  background-color #dcd7e9
  padding 0.1rem 2rem
  font-size 2rem

</style>
