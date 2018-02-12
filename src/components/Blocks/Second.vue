<template>
  <div class="second">
    <div class="container">
      <div class="row">
        <div class="col">
          <ProductContainer>
            <h1 slot="item-head">Наволочки с принтом декоративные</h1>
            <img slot="item-image" src="/all/2-layers.png" alt="3 pillows">
            <div slot="item-size">40*40</div>
            <div slot="item-composition">sintepon</div>
            <div slot="item-price">$29</div>
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
export default class Second extends Vue {}
</script>


<style scoped lang="stylus">
.second
  background-image url('/products/second.png')
  background-position center
  background-size cover
  height 1170px
  display flex
  justify-content center
  align-items center
  position relative
  z-index 2
</style>