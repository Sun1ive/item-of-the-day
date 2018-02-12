<template>
  <div class="discount">
    <div class="container">
      <div class="row">
        <div class="col discount__box">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Discount extends Vue {}
</script>


<style scoped lang="stylus">
.discount
  background-image url('/products/yellow.png')
  background-position center
  background-size cover
  height 500px
  margin-top -7rem
  display flex
  justify-content center
  align-items center
  &__box
    border 3px dashed #E07400
    display flex
    align-items center
    justify-content center
    min-height 250px
    div
      flex-grow 1
</style>