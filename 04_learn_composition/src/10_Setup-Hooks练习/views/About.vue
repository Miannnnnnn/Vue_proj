<template>
  <h2>About计数: {{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>


<script>
import useCounter from '../hooks/useCounter';
import useTitle from '../hooks/useTitle';
export default {
  setup () {
    // 切换标题
    useTitle("关于")

    return {
      ...useCounter()
    }
  }
}
</script>

<style scoped></style>