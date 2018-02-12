<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Box extends Vue {}
</script>


<style scoped lang="stylus">
.box
  width 220px
  height 220px
  background-color #312648
  border-radius 50%
  display flex
  justify-content center
  align-items center
  margin 0 auto
  img
    width 85%
    height 85%
</style>