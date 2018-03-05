<template>
  <swiper :options="swiperOptions">
    <swiper-slide
      v-for="(slide, i) in slider"
      :key="i"
    ><div
      :style="{
        background: 'url(' + slide + ')',
        width: width + 'px',
        height: height + 'px',
      }"
      class="image-item"
    />
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev" />
    <div slot="button-next" class="swiper-button-next" />
  </swiper>
</template>

<script lang="ts">
import Vue from 'vue';
import swiperOptions from '@/utils/options.ts';

export default Vue.extend({
  props: {
    slider: {
      type: Array,
      required: true,
    },
    height: {
      type: Number,
      default: 200,
    },
    width: {
      type: Number,
      default: 220,
    },
  },
  data: () => ({
    swiperOptions,
  }),
});
</script>


<style scoped lang="stylus">
.image-item
  background-repeat no-repeat !important
  background-size cover !important
  background-position center center !important
</style>
