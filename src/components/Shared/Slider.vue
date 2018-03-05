<template>
  <swiper :options="swiperOptions">
    <swiper-slide
      v-for="(slide, i) in slider"
      :key="i"
    ><div
      :style="{ background: 'url(' + slide + ')', }"
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
  },
  data: () => ({
    swiperOptions,
  }),
});
</script>


<style scoped lang="stylus">
.image-item
  width 220px
  height 200px
  background-repeat no-repeat !important
  background-size cover !important
</style>
