<template>
  <div class="allProducts">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="offer">We offer</div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div 
          class="col-5" 
          v-for="item in products" 
          :key="item.title"
        >
          <div class="text" v-html="item.title" />
          <Box>
            <img :src="item.src" :alt="item.title">
          </Box>
          <Btn 
            :icon="item.icon"
            class="my-btn"
          >Look</Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ProductTypes } from '@/Types/Types.ts';

@Component
export default class AllProducts extends Vue {
  private products: ProductTypes[] = [
    { title: 'Сувенирные подушечки <br> с лавандой внутнри', src: 'all/3-layers.png', icon: '/svg/arrows.svg' },
    { title: 'Наволочки с принтом <br> декоративные 40*40', src: 'all/2-layers.png', icon: '/svg/arrows.svg' },
    { title: 'Вафельные кухонные <br> полотенца', src: 'all/1-layer.png', icon: '/svg/arrows.svg' },
    { title: 'Микрофибра 30*30 <br> (Салфетка для пыли)', src: 'all/micro.png', icon: '/svg/arrows.svg' },
  ];
}
</script>


<style scoped lang="stylus">
.allProducts
  background-image url('/products/gray.png')
  margin-top -7rem
  .container
    padding-top 6rem

.col-5
  text-align center
  margin 3rem 0
  .text
    font-size 2rem
    margin-bottom 1rem
  .my-btn
    margin-left auto
  
.offer
  background-color #15101f
  text-transform uppercase
  color #fefefe
  font-size 3rem
  text-align center

.col-4
  margin 5rem 0 2rem 0

.justify-content-between
  padding 2rem 0

</style>