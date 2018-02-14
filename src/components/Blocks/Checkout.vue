<template>
  <div class="checkout">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-5">
          <Cart>
            <h1 slot="head" class="head">Hello world</h1>
            <img class="img-border" slot="image" src="all/3-layers.png" alt="3 pillows">
            <div class="text" slot="text">Сувенирные подушечки с лавандой</div>
            <div class="quantity" slot="quantity">+ quantity -</div>
          </Cart>
          <Cart>
            <h1 slot="head" class="head">Hello world</h1>
            <img class="img-border" slot="image" src="all/3-layers.png" alt="3 pillows">
            <div class="text" slot="text">Сувенирные подушечки с лавандой</div>
            <div class="quantity" slot="quantity">+ quantity -</div>
          </Cart>
          <Cart>
            <h1 slot="head" class="head">Hello world</h1>
            <img class="img-border" slot="image" src="all/3-layers.png" alt="3 pillows">
            <div class="text" slot="text">Сувенирные подушечки с лавандой</div>
            <div class="quantity" slot="quantity">+ quantity -</div>
          </Cart>
          <Cart>
            <h1 slot="head" class="head">Hello world</h1>
            <img class="img-border" slot="image" src="all/3-layers.png" alt="3 pillows">
            <div class="text" slot="text">Сувенирные подушечки с лавандой</div>
            <div class="quantity" slot="quantity">+ quantity -</div>
          </Cart>
        </div>
        <div class="col-6">
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Form from '../Shared/Form.vue';
import Cart from '../Shared/Cart.vue';

@Component({
  components: {
    Form,
    Cart,
  },
})
export default class Checkout extends Vue {}
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