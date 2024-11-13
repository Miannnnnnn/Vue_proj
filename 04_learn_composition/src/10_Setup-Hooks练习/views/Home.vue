<template>
  <h2>Home计数：{{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

  <button @click="popularClick">首页-流行</button>
  <button @click="hotClick">首页-热门</button>
  <button @click="songClick">首页-歌单</button>


  <div class="scroll">
    <h2>x: {{ scrollPosition.x }}</h2>
    <h2>y: {{ scrollPosition.y }}</h2>
  </div>
</template>


<script>
import { onMounted, ref } from 'vue'
import useCounter from '../hooks/useCounter';
import useTitle from '../hooks/useTitle';
import useScrollposition from '../hooks/useScrollPosition';

export default {
  setup () {
    // 1.counter逻辑
    const { counter, increment, decrement } = useCounter()

    // 2.修改标题
    const { title } = useTitle("首页")

    // 3.监听按钮的点击
    function popularClick () {
      // useTitle("首页-流行")
      title.value = "首页-流行"
    }
    function hotClick () {
      // useTitle("首页-热门")
      title.value = "首页-热门"
    }
    function songClick () {
      // useTitle("首页-歌单")
      title.value = "首页-歌单"
    }

    // 获取滚动位置
    const { scrollPosition } = useScrollposition()


    return {
      counter,
      increment,
      decrement,
      popularClick,
      hotClick,
      songClick,
      title,
      scrollPosition
      // ...useScrollposition()
    }
  }
}
</script>

<style scoped></style>