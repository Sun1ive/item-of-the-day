<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {}

</script>


<style scoped lang="stylus">
.button
  background-color #ffde79
  
</style>