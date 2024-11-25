<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <!-- mode属性掌握 -->
    <transition name="why" mode="in-out">
      <h2 v-if="isShow">
        哈哈哈
      </h2>
      <h2 v-else>
        呵呵呵
      </h2>
    </transition>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const isShow = ref(true)


</script>

<style lang="less" scoped>
.h2 {
  display: inline-block;
}

.why-enter-active {
  animation: whyAnim 2s ease;
  transition: opacity 2s ease;
}

.why-leave-active {
  animation: whyLeaveAnim 2s ease;
  transition: opacity 2s ease;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;

}


.why-enter-to,
.why-leave-from {
  opacity: 1;

}

.why-enter-active,
.why-leave-active {
  transition: all 2s ease;
}

@keyframes whyAnim {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes whyLeaveAnim {
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(-500px);
    opacity: 0;
  }
}
</style>