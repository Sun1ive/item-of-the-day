<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="item-box">
          <img src="/3-layers.png" alt="">
          <div class="text__wrapper">
            <div>Сувенирные подушечки с лавандой</div>
            <div class="text__item">
              <div class="quantity">10</div>
              <div class="total">29$</div>
            </div>
            <div class="more">...more</div>
          </div>
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
.item-box
  width 100%
  padding 1rem
  background-color #fff
  display flex
  align-items center
  position relative
  .more
    position absolute
    bottom 0
    right 0
    background-color #dfab1f
    color #fff
    padding 0 1rem
    cursor pointer
  img
    width 100px
    height 100px
    border 2px solid #cbc4dc
  .text__wrapper
    font-size 2rem
    margin-left 2rem

.quantity
  background-color #cbc4dc
  font-size 2rem
  width 70px
  text-align center

.text__item
  display flex
  align-items center
  margin-top 1rem

.total
  font-size 2.5rem
  color: #dfab1f
  margin-left 3rem

</style>
