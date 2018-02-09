<template>
  <div class="offer">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h1 class="offer__title">We offer</h1>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row row-wrapper justify-content-center">
          <div 
            class="col col-lg-6 col-sm-12" 
            v-for="product in products"
            :key="product.title">
            <div 
              class="box__title" 
              v-html="product.title"
            />
            <div class="box">
              <img class="box__img" :src="product.src" :alt="product.title">
            </div>
            <div class="box__button" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        title: 'Сувенирные подушечки с <br> лавандой внутри',
        src: '/img/products/3-layers.png',
        scroll: '',
      },
      {
        title: 'Наволочки с принтом <br> декоративные 40*40',
        src: '/img/products/2-layers.png',
        scroll: '',
      },
      {
        title: 'Вафельные кухонные <br> полотенца',
        src: '/img/products/1-layers.png',
        scroll: '',
      },
      {
        title: 'Микрофибра 30*30 <br> (Салфетка для пыли)',
        src: '/img/products/avtomobile.png',
        scroll: '',
      },
    ],
  }),
};
</script>

<style scoped lang="stylus">
.offer
  background-image: url('../../../public/img/bgone.png');
  margin-top: -8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 1300px
  &__title
    background-color: #15101f;
    color: #fefefe;
    font-size: 3.3rem;
    max-width 350px
    text-align center
    margin 1rem auto 3rem auto
  .box
    width: 230px
    height: 230px
    background-color: #15101f
    border-radius: 50%
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    margin 2rem auto

.row-wrapper
  .col
    &:nth-child(3),
    &:nth-child(4)
      margin-top 3rem

.box__title
  text-align center
  font-size 2rem

</style>