<template>
  <div class="scrolltop" @click="scrollToTop">
    <div class="custom__icon" />
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import throttle from 'lodash/throttle';

export default {
  mounted() {
    window.addEventListener('wheel', throttle(this.scrollTop, 750));
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.scrollTop);
  },
  methods: {
    scrollTop() {
      const offset = window.pageYOffset;
      const scroll = document.querySelector('.scrolltop');
      if (offset >= 300 && !scroll.classList.contains('visible')) {
        scroll.classList.add('visible');
      } else if (offset <= 300 && scroll.classList.contains('visible')) {
        scroll.classList.remove('visible');
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped lang='stylus'>
.scrolltop
  width: 70px;
  height: 70px;
  background-color: #fff;
  border: 1px solid #c0c0c0;
  position: fixed;
  bottom: -150px;
  right: 30px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.3;
  transition: 0.4s linear;
  animation: topDown 2s linear infinite alternate;
  z-index: 15;
  will-change position
  .custom__icon
    position: absolute;
    top: 40%;
    left: 53%;
    width 30px
    height 30px
    background-repeat no-repeat
    background-image url('../../assets/arrows.svg')
    transform: translate(-50%, -50%) rotate(180deg)
    font-size: 5rem;

  &:hover
    background-color: #FFDE82
    border-color: #333
    opacity: 1;
    transition: 0.4s linear;
    animation-play-state: paused;

.visible
  display: block;
  bottom: 9%;
  right: 30px;


@keyframes topDown {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(5px);
  }
}

@media (max-width: 400px)
  .scrolltop
    height: 65px;
    width: 65px;
  .visible
    bottom: 11%;

</style>
