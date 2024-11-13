<template>
  <div>
    <h2>ShowInfo: {{ info }}</h2>
    <!-- 代码没有错误，但是违背规范（单向数据流） -->
    <button @click="info.name = 'kobe'">ShowInfo按钮</button>
    <!-- 正确的做法： -->
    <button @click="showInfoClick">ShowInfo按钮</button>

    <hr>
    <!-- 使用readonly数据 -->
    <h2>ShowInfo: {{ roInfo }}</h2>
    <!-- 代码就会无效 -->
    <!-- <button @click="info.name = 'james'">ShowInfo按钮</button> -->
    <!-- 正确的做法 -->
    <button @click="roInfoBtnClick">roInfo按钮</button>
  </div>
</template>


<script>
import ShowInfo from '@/02_Setup定义数据/ShowInfo.vue';

export default {
  props: {
    // reactive数据
    info: {
      type: Object,
      default: () => ({})
    },
    // readonly数据
    roInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["changeInfoName", "changeInfoName"],
  setup (props, context) {
    function showInfoClick () {
      context.emit("changeInfoName", "kobe")
    }

    function roInfoBtnClick () {
      context.emit("changeInfoName", "james")
    }
    return {
      showInfoClick,
      roInfoBtnClick
    }
  }
}
</script>

<style scoped></style>