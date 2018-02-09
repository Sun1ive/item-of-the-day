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
        <div class="row">
          <div 
            class="col" 
            v-for="product in products"
            :key="product.title">
            <div class="box">
              <img class="box__img" :src="product.src" :alt="product.title">
            </div>
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
        title: 'Сувенирные подушечки с лавандой внутнри',
        src: '../../../public/img/products/3-layers.png',
        scroll: '',
      },
      {
        title: 'Наволочки с принтом декоративные 40*40',
        src: '../../../public/img/products/2-layers.png',
        scroll: '',
      },
      {
        title: 'Вафельные кухонные полотенца',
        src: '../../../public/img/products/1-layers.png',
        scroll: '',
      },
      {
        title: 'Микрофибра 30*30 (Салфетка для пыли)',
        src: '../../../public/img/products/avtomobile.png',
        scroll: '',
      },
    ],
  }),
};
</script>

<style scoped lang="stylus">
.offer {
  background-image: url('../../../public/img/bgone.png');
  margin-top: -8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 1000px;

  &__title {
    background-color: #15101f;
    color: #fefefe;
    font-size: 3.3rem;
    padding: 0.5rem 3rem;
  }

  .box {
    width: 220px;
    height: 220px;
    background-color: #15101f;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>