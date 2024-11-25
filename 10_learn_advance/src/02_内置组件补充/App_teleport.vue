<template>
  <div class="app">
    <div class="hello">
      <p class="content">

        <!-- <teleport to="body">
          <hello-world></hello-world>
        </teleport> -->

        <teleport to="#abc">
          <hello-world></hello-world>
        </teleport>
      </p>
    </div>

    <div class="content">
      <teleport to="#abc">
        <h2>hahahaha</h2>
      </teleport>

    </div>
  </div>
</template>


<script setup>

import HelloWorld from './HelloWorld.vue';

</script>

<style lang="less" scoped></style>