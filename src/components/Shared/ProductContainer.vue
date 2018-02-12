<template>
  <div class="product">
    <div class="container">
      <div class="row justify-content-center">
        <h1>hello world</h1>
      </div>
      <div class="row">
        <div class="col-4">
          <img src="/All/1-layer.png" alt="">
        </div>
        <div class="col-8 flex"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ProductContainer extends Vue {}
</script>


<style scoped lang="stylus">
.product
  background-color rgba(#312648, .7)
  color #fff
</style>