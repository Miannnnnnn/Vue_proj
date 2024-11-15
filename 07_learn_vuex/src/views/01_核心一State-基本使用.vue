<template>
  <div class="app">
    <!-- store中的counter -->
    <h2>Home当前计数：{{ $store.state.counter }}</h2>
    <h2>Computed当前计数：{{ storeCounter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>


<script>
export default {
  computed: {
    storeCounter () {
      return this.$store.state.counter
    }
  }
}
</script>


<script setup>
import { useStore } from 'vuex';

const store = useStore()

function increment () {
  // store.state.counter++
  store.commit("increment")
}

</script>

<style scoped></style>