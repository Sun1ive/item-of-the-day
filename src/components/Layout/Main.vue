<template>
  <main>
    <AllProducts />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AllProducts from '../Blocks/AllProducts.vue';

@Component({
  components: {
    AllProducts,
  },
})
export default class Main extends Vue {}
</script>


<style scoped lang="stylus">

</style>