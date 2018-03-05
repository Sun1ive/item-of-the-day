<template>
  <div class="allProducts">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3">
          <div class="offer">We offer</div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div
          v-for="item in products"
          :key="item.title"
          class="col-5"
        >
          <div class="text" v-html="item.title" />
          <Box>
            <img :src="item.src" :alt="item.title">
          </Box>
          <Btn
            :width="150"
            :arrow="true"
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
      { title: 'Сувенирные подушечки <br> с лавандой внутнри', src: '3-layers.png' },
      { title: 'Наволочки с принтом <br> декоративные 40*40', src: '2-layers.png' },
      { title: 'Вафельные кухонные <br> полотенца', src: '1-layer.png' },
      { title: 'Микрофибра 30*30 <br> (Салфетка для пыли)', src: 'micro.png' },
    ],
  }),
});
</script>


<style scoped lang="stylus">
.allProducts
  background-image: url('/gray.png');
  margin-top: -10.5rem;
  .container
    padding-top: 6rem

.col-5
  text-align: center;
  margin: 3rem 0;
  .text
    font-size: 2rem;
    margin-bottom: 1rem;
  .my-btn
    margin-left: auto;
    font-size responsive 1rem 2rem

.offer
  background-color: #15101f;
  text-transform: uppercase;
  color: #fefefe;
  font-size: responsive 2rem 3rem
  font-family 'MyriadPro', Arial, serif
  text-align: center;
  height 34px
  margin-top 7rem

</style>

