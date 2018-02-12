<template>
  <div class="third">
    <div class="container">
      <div class="row">
        <div class="col">
          <ProductContainer>
            <h1 slot="item-head">Наволочки с принтом декоративные</h1>
            <img slot="item-image" src="/all/1-layer.png" alt="one-pillow">
            <div slot="item-size">50*40</div>
            <div slot="item-composition">sintepon</div>
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
export default class Third extends Vue {}
</script>


<style scoped lang="stylus">
.third
  background-image url('/products/third.png')
  background-position center
  background-size cover
  height 1080px
  display flex
  justify-content center
  align-items center
</style>