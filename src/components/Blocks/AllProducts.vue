<template>
  <div class="allProducts">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-3 col-sm-3 col-4">
          <div class="offer">
            <p class="offer__title">We offer</p>
          </div>
        </div>
      </div>
      <div class="row products">
        <div
          v-for="item in products"
          :key="item.title"
          class="col-lg-6 col-md-6 col-sm-6 col-12"
        >
          <div class="text" v-html="item.title" />
          <Box>
            <img :src="item.src" :alt="item.title">
          </Box>
          <Btn
            v-scroll-to="`${item.el}`"
            :width="150"
            :arrow="true"
            :iconWidth="30"
            :iconHeight="16"
            class="my-btn"
          >Look</Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    products: [
      { title: 'Сувенирные подушечки <br> с лавандой внутнри', src: '3-layers.png', el: '.first' },
      { title: 'Наволочки с принтом <br> декоративные 40*40', src: '2-layers.png', el: '.second' },
      { title: 'Вафельные кухонные <br> полотенца', src: '1-layer.png', el: '.third' },
      { title: 'Микрофибра 30*30 <br> (Салфетка для пыли)', src: 'micro.png', el: '.fourth' },
    ],
  }),
});
</script>


<style scoped lang="stylus">
.allProducts
  background-image: url('/gray.png')
  background-size cover
  margin-top: -10.5rem;
  .container
    padding-top: 6rem

.col-lg-6
  text-align: center;
  margin: 3rem 0;
  .text
    font-size: responsive 2rem 3.5rem
    color #2e2444
    margin-bottom: 1rem;
  .my-btn
    margin-left: auto;
    font-size responsive 1.5rem 2rem

.products
  justify-content space-between

.offer
  background-color: #15101f;
  text-transform: uppercase;
  color: #fefefe;
  font-size: responsive 1.5rem 3rem
  font-family  Arial, Helvetica, sans-serif
  text-align: center;
  margin-top 9rem
  display flex
  justify-content center
  align-items center
  text-align center

@media (max-width 450px)
  .allProducts
    margin-top -2.5rem
    height 1550px
    .container
      padding-top 1rem
  .offer
    margin-top 6rem
  .col-12
    margin 1rem 0
    padding 0
    .my-btn
      margin 1rem auto

</style>
