<template>
  <main>
    <AllProducts />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import AllProducts from '../Blocks/AllProducts.vue';

export default Vue.extend({
  components: {
    AllProducts,
  },
});
</script>


<style scoped lang="stylus">
</style>
