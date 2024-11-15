<template>
  <div class="app">
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="counterBtnClick">发起action修改counter</button>
    <h2>name：{{ $store.state.name }}</h2>
    <button @click="nameBtnClick">发起action修改Name</button>
  </div>
</template>


<script>

export default {
  methods: {
    counterBtnClick () {
      this.$store.dispatch("incrementAction")
    },
    nameBtnClick () {
      this.$store.dispatch("changeNameAction", "why")
    }
  }
} 
</script>


<script setup>
import { useStore } from 'vuex';

const store = useStore

</script>

<style scoped></style>