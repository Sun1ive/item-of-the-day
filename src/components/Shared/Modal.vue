<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <slot />
        </div>
        <div
          class="modal-btn"
          @click="$emit('close')"
        />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: #fff;
}

.modal-container {
  width: 500px;
  min-height: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
  font-family: 'MyriadPro', Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  overflow-x: scroll;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-btn {
  background-image: url('../../assets/OK.png');
  padding: 1.45rem;
  background-color: orange;
  background-position: center center;
  background-repeat: no-repeat;
  transition: .4s ease;
  max-width: 50px;
  margin-left: auto;
}
.modal-btn:hover {
  cursor: pointer;
  background-color: orangered;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
