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
          <Cart
            :type="'two'"
            :title="'Наволочки с принтом декоративные'"
            style="margin-bottom: 1.5rem;"
          />
          <Cart
            :type="'three'"
            :title="'Вафельные кухонные полотенца'"
            style="margin-bottom: 1.5rem;"
          />
          <Cart
            :type="'four'"
            :title="'Микрофибра (Салфетка для пыли)'"
          />
          <div class="discount__wrapper">
            <div class="discount">
              <div>Discount:</div><div>$13</div>
            </div>
            <div class="total">
              <div>Total:</div><div class="total__price">$154</div>
            </div>
          </div>
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

.discount__wrapper
  background-color #fff
  font-size responsive 1rem 2.5rem
  width 200px
  padding 1rem
  letter-spacing 2px

.discount
.total
  display flex
  justify-content space-between
  align-items center

.total
  &__price
    font-size 3rem
    color #CD9936
</style>
