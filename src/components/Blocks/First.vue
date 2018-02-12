<template>
  <div class="first">
    <div class="container">
      <div class="row">
        <div class="col">
          <ProductContainer>
            <h1 slot="item-head">Сувенирные подушечки с лавандой внутнри</h1>
            <img slot="item-image" src="/all/3-layers.png" alt="3 pillows">
            <div slot="item-size">40*40</div>
            <div slot="item-composition">flowers of lavender, sintepon</div>
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
export default class First extends Vue {}
</script>


<style scoped lang="stylus">
.first
  background-image url('/products/first.png')
  background-position center
  background-size cover
  height 1080px
  display flex
  justify-content center
  align-items center
</style>