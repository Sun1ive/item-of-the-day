<template>
  <div
    :style="{ width: width + 'px', height: height + 'px' }"
    class="button"
  >
    <slot/>
    <div
      :class="{ 'cart': cart, 'arrow': arrow, }"
      :style="{
        width: iconWidth + 'px',
        height: iconHeight + 'px'
      }"
      class="icon"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    cart: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: 40,
    },
    width: {
      type: Number,
      default: 200,
    },
    iconWidth: {
      type: Number,
      default: 20,
    },
    iconHeight: {
      type: Number,
      default: 20,
    },
  },
});
</script>


<style scoped lang="stylus">
.button
  background-color: #ffde79;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s linear;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  &:active
    top: 1px;
    background-color: #ffde79 - 30%;
  &:hover
    background-color: #ffde79 - 30%;

</style>
