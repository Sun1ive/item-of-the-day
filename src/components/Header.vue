<template>
  <header class="header">
    <div class="container-fluid">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <h1 class="header__title">Home products</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="header__text">The best offer for you and for your home space</p>
          </div>
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
  min-height 700px
  display flex
  justify-content center
  align-items center
  &__title
  &__text
    color #fff
    font-weight bold
    text-align center
    background-color rgba(#25213b, 0.8)
</style>