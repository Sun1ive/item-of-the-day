<template>
  <main class="main">
    <section>
      <Offer />
    </section>
  </main>
</template>

<script>
import Offer from '../components/Offer.vue';

export default {
  components: {
    Offer,
  }
};
</script>

<style scoped lang="stylus">
// .main
//   display flex
//   flex-flow column wrap
</style>