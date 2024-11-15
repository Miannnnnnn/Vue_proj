<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>doubleCount: {{ counterStore.duobleCount }}</h2>
    <h2>doubleCountAddOne: {{ counterStore.duobleCountAddOne }}</h2>
    <h2>friend111: {{ counterStore.getFriendById(111) }}</h2>
    <h2>friend112: {{ counterStore.getFriendById(112) }}</h2>
    <h2>showMessage: {{ counterStore.showMessage }}</h2>
  </div>
</template>


<script setup>

import useCounter from '@/stores/counter';

const counterStore = useCounter()
</script>

<style scoped></style>