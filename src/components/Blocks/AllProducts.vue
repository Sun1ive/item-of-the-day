<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="offer">We offer</div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="text">Сувенирные подушечки <br> с лавандой внутнри</div>
        <div class="box">
          <img src="/All/3-layers.png" alt="">
        </div>
      </div>
      <div class="col-6">
        <div class="text">Сувенирные подушечки <br> с лавандой внутнри</div>
        <div class="box">
          <img src="/All/2-layers.png" alt="">
        </div>
      </div>
      <div class="col-6">
        <div class="text">Сувенирные подушечки <br> с лавандой внутнри</div>
        <div class="box">
          <img src="/All/1-layer.png" alt="">
        </div>
      </div>
      <div class="col-6">
        <div class="text">Сувенирные подушечки <br> с лавандой внутнри</div>
        <div class="box">
          <img src="/All/micro.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AllProducts extends Vue {}
</script>


<style scoped lang="stylus">
.col-6
  text-align center
  margin 1rem 0
  .text
    font-size 3rem
    margin-bottom 1rem

.box
  width 225px
  height 225px
  background-color #312648
  border-radius 50%
  display flex
  justify-content center
  align-items center
  margin 0 auto
  
.offer
  background-color #15101f
  text-transform uppercase
  color #fefefe
  font-size 3rem
  text-align center

.col-4
  margin-top 5rem
</style>