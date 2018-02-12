<template>
  <div class="product">
    <div class="container">
      <div class="head row justify-content-center">
        <slot name="item-head" />
      </div>
      <div class="row align-items-center">
        <div class="col-4">
          <Box>
            <slot name="item-image" />
          </Box>
        </div>
        <div class="col-8">
          <div class="flex">
            <img src="/icons/line.png" alt="size">
            <slot name="item-size" />
          </div>
          <div class="flex">
            <img src="/icons/spin.png" alt="composition">
            <slot name="item-composition" />
          </div>
          <div class="flex">
            <img src="/icons/label.png" alt="price">
            <span class="yellow">
              <slot name="item-price" />
            </span>
          </div>
          <div class="flex">
            <slot name="item-text" />
          </div>
        </div>
      </div>
      <Btn 
        class="btn" 
        :cart="true"
        :height="50"
        :width="220"
        :iconWidth="30"
        :iconHeight="30"
      >Add to</Btn>
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
</style>