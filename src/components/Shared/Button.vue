<template>
  <div 
    class="button"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <slot/>
    <div 
      class="icon"
      :class="{ 'cart': cart, 'arrow': arrow, }"
      :style="{ 
        width: iconWidth + 'px', 
        height: iconHeight + 'px'
      }" 
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ default: false })
  public cart?: boolean;

  @Prop({ default: false })
  public arrow?: boolean;

  @Prop({ default: 200 })
  public width?: number;

  @Prop({ default: 40 })
  public height?: number;

  @Prop({ default: 20 })
  public iconWidth?: number;

  @Prop({ default: 20 })
  public iconHeight?: number;
}
</script>


<style scoped lang="stylus">
.button
  background-color: #ffde79
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s linear;
  cursor: pointer;
  text-transform: uppercase
  position relative
  &:active
    top 1px
    background-color #ffde79 - 30%
  &:hover
    background-color #ffde79 - 30%

</style>