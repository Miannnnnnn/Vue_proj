<template>
  <div class="app">
    <button @click="counter++">+1</button>

    <!-- 1.参数-修饰符-值 -->
    <!-- <h2 v-why:kobe.abc.cba="message">hhhh</h2> -->

    <!-- 2.价格拼接单位符号 -->
    <h2 v-unit>{{ finalPrice }}</h2>
  </div>
</template>



<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onUnmounted } from 'vue';
import { ref } from 'vue';

const counter = ref(0)

const message = '你好啊，李银河'

const vWhy = {

  mounted (el, bindings) {
    el.textContent = bindings.value
  },


}

</script>

<style lang="less" scoped></style>