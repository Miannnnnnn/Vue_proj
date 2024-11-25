<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <transition name="why" type="transition" :duration="1000">
      <h2 v-if="isShow">
        因为我既不生活在过去，也不生活在未来，我只有现在，它才是我感兴趣的。
        如果你能永远停留在现在，那你将是最幸福的人。
        你会发现沙漠里有生命，发现天空中有星星，发现士兵们打仗是因为战争是人类生活的一部分。
        生活就是一个节日，是一场盛大庆典。因为生活永远是，也仅仅是我们现在经历的这一刻。
      </h2>
    </transition>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const isShow = ref(false)


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