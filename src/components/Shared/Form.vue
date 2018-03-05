<template>
  <form class="form">
    <input
      v-model.lazy.trim="user.name"
      required
      type="text"
      placeholder="Your name"
    >
    <input
      v-model.lazy.number="user.phone"
      required
      type="number"
      placeholder="Your phone"
    >
    <input
      v-model.lazy.trim="user.email"
      required
      type="email"
      placeholder="Your email"
    >
    <textarea
      v-model.lazy.trim="user.address"
      required rows="5"
      placeholder="Address"
    />
    <textarea
      v-model.lazy.trim="user.additional"
      required rows="5"
      placeholder="Comment to the order"
    />
    <button
      type="submit"
      class="buy-btn"
      @click.prevent="onCheckout"
    >Buy</button>
  </form>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    name: '',
    phone: null,
    email: '',
    address: '',
    additional: '',
  }),
  methods: {
    onCheckout() {},
  },
});

</script>


<style scoped lang="stylus">
.form
  display: flex;
  flex-flow: column wrap;
  padding: 2rem;
  background-color: #fff;
  input, textarea
    background-color: #ebe8f1;
    margin-bottom: 1rem;
    border: none;
    padding: 1rem;
    font-size: 1.5rem;
    width: 100%;
    &::placeholder
      color #cbc7d4 - 10%
  .buy-btn
    text-transform: uppercase;
    color: #fff;
    background-color: #dfab1f;
    border: none;
    height: 55px;
    margin-left: auto;
    width: 120px;
    font-size: 3rem;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover
      background-color: #dfab1f - 10%

</style>
