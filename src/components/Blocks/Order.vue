<template>
  <div class="checkout">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-5">
          <Cart
            :type="'one'"
            :title="'Сувенирные подушечки с лавандой'"
            style="margin-bottom: 1.5rem;"
          />
          <!-- <Cart
            style="margin-bottom: 1.5rem;"
          />
          <Cart
            style="margin-bottom: 1.5rem;"
          />
          <Cart /> -->
        </div>
        <div class="col-6">
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Form from '../Shared/Form.vue';
import Cart from './Cart.vue';
import { IProduct } from '../../types/types';

export default Vue.extend({
  components: {
    Form,
    Cart,
  },
  computed: {
    totalPrice(): number {
      return this.$store.state.cart.reduce(
        (acc: number, value: IProduct) => acc + value.price,
        0,
      );
    },
  },
});
</script>


<style scoped lang="stylus">
.checkout
  margin-top: 6rem
  background-image: url('/checkout.jpg')
  background-position: center
  background-size: cover
  height: 1020px
  display: flex
  justify-content: center
  align-items: center
  .head
    font-size: 3rem


</style>
