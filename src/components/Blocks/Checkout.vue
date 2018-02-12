<template>
  <div class="checkout">
    <div class="container">
      <div class="row">
        <div class="col-6"></div>
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

@Component({
  components: {
    Form,
  },
})
export default class Checkout extends Vue {}
</script>


<style scoped lang="stylus">
.checkout
  margin-top 6rem
  background-image url('/checkout.jpg')
  background-position center
  background-size cover
  height 1020px
  display flex
  justify-content center
  align-items center
</style>