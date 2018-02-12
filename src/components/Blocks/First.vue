<template>
  <div class="first">
    <div class="container">
      <div class="row">
        <div class="col">hello world</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class First extends Vue {}
</script>


<style scoped lang="stylus">
.first
  background-image url('/products/first.png')
  background-position center
  background-size cover
  height 1000px
</style>