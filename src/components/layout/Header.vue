<template>
  <header class="header">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h1 class="header__title"><span class="yellow">H</span>ome products</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <p class="header__text">The best offer for you and for your home space</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>


<style scoped lang="stylus">
.header
  background-image: url('/header.png');
  background-position: center center;
  background-size: cover;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &__title
  &__text
    color: #fff;
    text-align: center;
    background-color: rgba(#25213b, 0.8);
  &__text
    font-size: responsive 2rem 3rem;
    letter-spacing 4px
    font-weight bold
  &__title
    font-size: responsive 1.5rem 7rem;
    letter-spacing 5px

</style>
