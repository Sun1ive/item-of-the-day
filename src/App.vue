<template>
  <div id="app">
    <Header />
    <Main />
    <ScrollTop />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/layout/Header.vue';
import Main from '@/components/layout/Main.vue';
import ScrollTop from '@/components/Shared/ScrollTop.vue';

export default Vue.extend({
  components: {
    Header,
    Main,
    ScrollTop,
  },
});
</script>

<style lang="stylus">
body
  font-family: 'MyriadPro', Arial, Helvetica, sans-serif;

</style>
