<template>
  <div class="cart-container">
    <div class="cart-item">
      <div>
        <slot name="image" />
      </div>
      <div>
        <slot name="text" />
        <slot name="quantity" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Cart extends Vue {}
</script>


<style scoped lang="stylus">
.cart-item
  display flex
  align-items center

.cart-item
  background-color #fff
  margin-top 1rem
  justify-content space-around
  padding 1rem

</style>