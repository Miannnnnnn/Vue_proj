<template>
  <div class="home">
    <h2>Home</h2>
    <div class="nav">
      <router-link to="/home/recommend">推荐</router-link>
      <router-link to="/home/ranking">排行</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>


<script setup>

</script>

<style scoped></style>