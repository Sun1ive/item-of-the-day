<template>
  <main>
    <AllProducts />
    <First />
    <Second />
    <Third />
    <Fourth />
    <Checkout />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AllProducts from '../Blocks/AllProducts.vue';
import First from '../Blocks/First.vue';
import Second from '../Blocks/Second.vue';
import Third from '../Blocks/Third.vue';
import Fourth from '../Blocks/Fourth.vue';
import Checkout from '../Blocks/Checkout.vue';

@Component({
  components: {
    AllProducts,
    First,
    Second,
    Third,
    Fourth,
    Checkout,
  },
})
export default class Main extends Vue {}
</script>


<style scoped lang="stylus">

</style>