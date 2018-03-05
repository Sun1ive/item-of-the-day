<template>
  <main>
    <AllProducts />
    <First />
    <Second />
    <Third />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import AllProducts from '../Blocks/AllProducts.vue';
import First from '../Blocks/First.vue';
import Second from '../Blocks/Second.vue';
import Third from '../Blocks/Third.vue';

export default Vue.extend({
  components: {
    AllProducts,
    First,
    Second,
    Third,
  },
});
</script>


<style scoped lang="stylus">
</style>
