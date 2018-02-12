<template>
  <main>
    <AllProducts />
    <First />
    <Second />
    <Third />
    <Fourth />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AllProducts from '../Blocks/AllProducts.vue';
import First from '../Blocks/First.vue';
import Second from '../Blocks/Second.vue';
import Third from '../Blocks/Third.vue';
import Fourth from '../Blocks/Fourth.vue';

@Component({
  components: {
    AllProducts,
    First,
    Second,
    Third,
    Fourth,
  },
})
export default class Main extends Vue {}
</script>


<style scoped lang="stylus">

</style>