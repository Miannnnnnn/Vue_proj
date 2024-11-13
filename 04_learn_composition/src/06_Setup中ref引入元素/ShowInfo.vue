<template>
  <div>ShowInfo</div>
</template>


<script>
import ShowInfo from '@/02_Setup定义数据/ShowInfo.vue';

export default {
  // methods: {
  //   ShowInfoFoo () {
  //     console.log("showInfo foo function")
  //   }
  // }
  setup () {
    function showInfoFoo () {
      console.log("showInfo foo function")
    }

    return {
      showInfoFoo
    }
  }
}
</script>

<style scoped></style>