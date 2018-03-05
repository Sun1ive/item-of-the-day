<template>
  <main>
    <AllProducts />
    <First />
    <Second />
    <Discount />
    <Third />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import AllProducts from '../Blocks/AllProducts.vue';
import First from '../Blocks/First.vue';
import Second from '../Blocks/Second.vue';
import Discount from '../Blocks/Discount.vue';
import Third from '../Blocks/Third.vue';

export default Vue.extend({
  components: {
    AllProducts,
    First,
    Discount,
    Second,
    Third,
  },
});
</script>


<style scoped lang="stylus">
</style>
