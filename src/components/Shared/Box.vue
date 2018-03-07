<template>
  <div class="box">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>


<style scoped lang="stylus">
.box
  width: 220px;
  height: 220px;
  background-color: #312648;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  img
    width: 90%;
    height: 85%;


@media (max-width 450px)
  .box
    width 190px
    height 190px
</style>
