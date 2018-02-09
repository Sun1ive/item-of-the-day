<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue';
import Main from './components/Layout/Main.vue';
import Footer from './components/Layout/Footer.vue';


export default {
  components: {
    Header,
    Main,
    Footer,
  }
}
</script>

<style>

</style>
