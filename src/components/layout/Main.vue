<template>
  <main>
    <AllProducts />
    <First />
    <Second />
    <Discount />
    <Third />
    <Fourth />
    <Order />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import AllProducts from '../Blocks/AllProducts.vue';
import First from '../Blocks/First.vue';
import Second from '../Blocks/Second.vue';
import Discount from '../Blocks/Discount.vue';
import Third from '../Blocks/Third.vue';
import Fourth from '../Blocks/Fourth.vue';
import Order from '../Blocks/Order.vue';

export default Vue.extend({
  components: {
    AllProducts,
    First,
    Discount,
    Second,
    Third,
    Fourth,
    Order,
  },
});
</script>


<style scoped lang="stylus">
</style>
