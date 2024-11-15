<template>
  <div class="app">
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <h2>friendsTotalAge: {{ $store.getters.totalAge }}</h2>
    <h2>message: {{ $store.getters.message }}</h2>

    <!-- 根据id获取某一个朋友的信息 -->
    <h2>id-111的朋友的信息： {{ $store.getters.getFriendById(111) }}</h2>
    <h2>id-112的朋友的信息： {{ $store.getters.getFriendById(112) }}</h2>
    <h2>id-113的朋友的信息： {{ $store.getters.getFriendById(113) }}</h2>
  </div>
</template>


<script>
export default {

} 
</script>


<script setup>

</script>

<style scoped></style>