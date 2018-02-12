<template>
  <main>
    <AllProducts />
    <First />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AllProducts from '../Blocks/AllProducts.vue';
import First from '../Blocks/First.vue';

@Component({
  components: {
    AllProducts,
    First,
  },
})
export default class Main extends Vue {}
</script>


<style scoped lang="stylus">

</style>