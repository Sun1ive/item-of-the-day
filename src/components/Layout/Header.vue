<template>
  <header class="header">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h1 class="header__title"><span class="yellow">H</span>ome products</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg">
          <p class="header__text">The best offer for you and for your home space</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>


<style scoped lang="stylus">
.header
  background-image url('/header.png')
  background-position center center
  background-size cover
  min-height 700px
  display flex
  justify-content center
  align-items center
  &__title
  &__text
    color #fff
    text-align center
    background-color rgba(#25213b, 0.8)
    margin .5rem 0
    padding .5rem 0
    letter-spacing 4px
  
  &__text
    font-size 2.1rem
  &__title
    font-size 6rem

</style>