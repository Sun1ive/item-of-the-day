<template>
  <div class="discount">
    <div class="container">
      <div class="row">
        <div class="col discount__box">
          <div class="discount__image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>


<style scoped lang="stylus">
.discount
  background-image url('/yellow.png')
  background-position center
  background-size cover
  height 700px
  z-index 0
  margin-top -7rem
  display flex
  justify-content center
  align-items center
  &__image
    background-image url('/discount_image.png')
    height 470px
    width 100%
    background-position center center
    background-size cover
    background-repeat no-repeat
    margin-top 2rem
    div
      flex-grow 1
</style>
