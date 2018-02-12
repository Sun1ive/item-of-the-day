<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="offer">We offer</div>
      </div>
    </div>
    <div class="row">
      <div 
        class="col-6" 
        v-for="item in products" 
        :key="item.title"
      >
        <div class="text" v-html="item.title"></div>
        <div class="box">
          <img :src="src" :alt="item.title">
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
    { title: 'Сувенирные подушечки <br> с лавандой внутнри', src: '/All/3-layers.png' },
  ];
}
</script>


<style scoped lang="stylus">
.col-6
  text-align center
  margin 1rem 0
  .text
    font-size 3rem
    margin-bottom 1rem

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
  margin-top 5rem

.icon
  margin-left 1rem
  font-size .9rem
  background-image url('/svg/arrows.svg')
  width 20px
  height 20px
  background-repeat no-repeat
  background-position center
</style>