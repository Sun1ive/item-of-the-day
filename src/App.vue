<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/layout/Header.vue';
import Main from '@/components/layout/Main.vue';
import Footer from '@/components/layout/Footer.vue';

export default Vue.extend({
  components: {
    Header,
    Main,
    Footer,
  },
});
</script>

<style lang="stylus">
body
  font-family: 'MyriadPro', Arial, Helvetica, sans-serif;

</style>
