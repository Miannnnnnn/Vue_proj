<template>
  <h2 class="title">我是App.vue中的h2元素</h2>

  <!-- AppHeader -->
   <AppHeader></AppHeader>
   <app-header></app-header>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}

</script>

<style scoped>
  .title {
    color: aquamarine;
  }
</style>
