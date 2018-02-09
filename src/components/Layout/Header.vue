<template>
  <header class="header">
    <div class="container-fluid">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <h1 class="header__title">Home products</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="header__text">The best offer for you and for your home space</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="stylus">
.container-fluid
  background-image url('../../../public/img/header.png')
  height 700px
  display flex
  justify-content center
  align-items center
  text-align center
  color #fefefe
  background-position center center !important
  background-size cover !important

.header
  &__title
  &__text
    background rgba(37,33,59, .8)
    padding .5rem
    margin .5rem 0
  &__title
    font-size 6.25rem
  &__text
    font-size 2.2rem

</style>