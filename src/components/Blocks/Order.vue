<template>
  <div class="checkout">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-5">
          <h1>hello wthere</h1>
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

export default Vue.extend({
  components: {
    Form,
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
