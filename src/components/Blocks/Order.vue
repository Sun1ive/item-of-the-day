<template>
  <div class="checkout">
    <div class="container">
      <div class="row order">
        <div class="inCart col-lg col-md col-sm col-11">
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
              <div>Discount:</div>
              <div>$5</div>
            </div>
            <div class="total">
              <div>Total:</div>
              <div class="total__price">${{ totalPrice }}</div>
            </div>
          </div>
        </div>
        <div class="col-lg col-md col-sm col-11">
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
      return this.$store.getters.totalPrice;
    },
  },
});
</script>


<style scoped lang="stylus">
.checkout
  margin: 6rem 0
  background-image: url('/checkout.jpg')
  background-position: center
  background-size: cover
  height: 1020px
  display: flex
  justify-content: center
  align-items: center
  .head
    font-size: 3rem

.inCart
  text-align center

.order
  justify-content space-around

.discount__wrapper
  background-color #fff
  font-size responsive 1rem 2.5rem
  width 250px
  padding 1rem
  letter-spacing 2px
  margin-top 1rem

.discount
.total
  display flex
  justify-content space-between
  align-items center

.total
  &__price
    font-size responsive 1.5rem 3rem
    color #CD9936
@media (max-width 450px)
  .order
    justify-content center
  .inCart
    margin 1rem 0
</style>
