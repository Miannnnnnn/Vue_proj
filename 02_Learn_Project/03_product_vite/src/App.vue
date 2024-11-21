<template>
    <div>
      <h2 class="title">My App</h2>
      <AppHeader></AppHeader>
    <app-header></app-header>
    </div>
    
</template>


<script>
import AppHeader from './components/AppHeader.vue';
    export default{
      components: {
        AppHeader
      }
    }
</script>

<style scoped>
</style>