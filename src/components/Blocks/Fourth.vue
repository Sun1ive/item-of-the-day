<template>
  <div class="fourth">
    <div class="container">
      <div class="row">
        <div class="col">
          <ProductContainer>
            <h1 slot="item-head">Микрофибра (Салфетка для пыли)</h1>
            <img slot="item-image" src="/all/micro.png" alt="one-pillow">
            <div slot="item-size">30*30</div>
            <div slot="item-composition">polyester, polyamide</div>
            <div slot="item-price">$19</div>
            <p class="text" slot="item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam ullam expedita incidunt necessitatibus consectetur, provident, voluptatem fuga repellat molestiae alias laborum sunt rerum molestias amet quisquam dolores culpa eius.</p>
          </ProductContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Fourth extends Vue {}
</script>


<style scoped lang="stylus">
.fourth
  background-image url('/products/fourth.png')
  background-position center
  background-size cover
  height 1080px
  display flex
  justify-content center
  align-items center
  .box
    img
      width 100%
      height 100%
</style>