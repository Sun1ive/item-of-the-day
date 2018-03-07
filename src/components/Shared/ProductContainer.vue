<template>
  <div class="product">
    <div class="container">
      <div class="head row justify-content-center">
        <slot name="item-head" />
      </div>
      <div class="row align-items-center">
        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
          <Box>
            <slot name="item-image" />
          </Box>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-8 col-12">
          <div class="flex">
            <img src="../../assets/line.png" alt="size">
            <slot name="item-size" />
          </div>
          <div class="flex">
            <img src="../../assets/spin.png" alt="composition">
            <slot name="item-composition" />
          </div>
          <div class="flex">
            <img src="../../assets/label.png" alt="price">
            <span class="yellow">
              <slot name="item-price" />
            </span>
          </div>
          <div class="flex">
            <slot name="item-text" />
          </div>
        </div>
      </div>
      <slot name="button" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});

</script>


<style scoped lang="stylus">
.product
  background-color rgba(#312648, .7)
  color #fff
  .container
    padding 2rem 1rem
    .head
      margin-bottom 1rem
  .flex
    display flex
    align-items center
    font-size 2rem
    margin-top 1rem
    img
      margin-right 1rem
  .btn
    color #333
    margin-left auto
    font-size responsive 1rem 2rem


</style>
