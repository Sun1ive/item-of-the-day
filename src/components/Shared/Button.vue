<template>
  <div 
    class="button"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <slot name="text" />
    <slot name="icon" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ default: 200 })
  public width!: number;

  @Prop({ default: 45 })
  public height!: number;
}
</script>


<style scoped lang="stylus">
.button
  background-color: #ffde79
  border-radius 10px
  display flex
  justify-content center
  align-items center
  transition .4s linear
  cursor pointer
</style>