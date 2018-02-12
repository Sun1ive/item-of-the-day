<template>
  <main>
    <AllProducts />
    <First />
    <Second />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AllProducts from '../Blocks/AllProducts.vue';
import First from '../Blocks/First.vue';
import Second from '../Blocks/Second.vue';

@Component({
  components: {
    AllProducts,
    First,
    Second,
  },
})
export default class Main extends Vue {}
</script>


<style scoped lang="stylus">

</style>