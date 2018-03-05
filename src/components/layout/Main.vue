<template>
  <main>
    <AllProducts />
    <First />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import AllProducts from '../Blocks/AllProducts.vue';
import First from '../Blocks/First.vue';

export default Vue.extend({
  components: {
    AllProducts,
    First,
  },
});
</script>


<style scoped lang="stylus">
</style>
