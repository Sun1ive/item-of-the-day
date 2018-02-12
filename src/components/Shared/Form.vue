<template>
  <form class="form">
    <input required type="text" placeholder="Your name">
    <input required type="number" placeholder="Your phone">
    <input required type="email" placeholder="Your email">
    <textarea required rows="5" placeholder="Address" />
    <textarea required rows="5" placeholder="Comment to the order" />
    <input type="submit" value="hello">
    <button 
      @click.prevent="onCheckout" 
      class="buy-btn" 
      type="submit"
    >Buy</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  private onCheckout(): void {}
  // axios request ..
}
</script>


<style scoped lang="stylus">
.form {
  display: flex;
  flex-flow: column wrap;
  padding: 2rem;
  background-color: #fff;

  input, textarea {
    background-color: #ebe8f1;
    margin-bottom: 1rem;
    border: none;
    padding: 1rem;
    font-size: 1.5rem;
    width: 100%;
  }

  .buy-btn {
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

    &:hover {
      background-color: #dfab1f - 10%;
    }
  }
}
</style>