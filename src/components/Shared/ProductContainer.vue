<template>
  <div class="product">
    <h1>hello world htere</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ProductContainer extends Vue {}
</script>


<style scoped lang="stylus">
.product
  background-color rgba(#7135de, .4)
</style>