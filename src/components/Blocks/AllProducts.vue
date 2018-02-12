<template>
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
        <div class="box">
          <img :src="item.src" :alt="item.title">
        </div>
        <Btn 
          :icon="item.icon"
          class="my-btn"
        >Look</Btn>
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
    { title: 'Сувенирные подушечки <br> с лавандой внутнри', src: 'All/3-layers.png', icon: '/svg/arrows.svg' },
    { title: 'Наволочки с принтом <br> декоративные 40*40', src: 'All/2-layers.png', icon: '/svg/arrows.svg' },
    { title: 'Вафельные кухонные <br> полотенца', src: 'All/1-layer.png', icon: '/svg/arrows.svg' },
    { title: 'Микрофибра 30*30 <br> (Салфетка для пыли)', src: 'All/micro.png', icon: '/svg/arrows.svg' },
  ];
}
</script>


<style scoped lang="stylus">
.col-5
  text-align center
  margin 3rem 0
  .text
    font-size 2rem
    margin-bottom 1rem
  .my-btn
    margin-left auto

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
  margin 5rem 0 2rem 0

.justify-content-between
  margin 2rem 0

</style>