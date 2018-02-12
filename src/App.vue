<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components//Layout/Header.vue';
import Main from '@/components/Layout/Main.vue';
import Footer from '@/components/Layout/Footer.vue';

@Component({
  components: {
    Header,
    Main,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
