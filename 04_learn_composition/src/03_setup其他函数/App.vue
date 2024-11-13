<template>
  <div>
    <show-info :info="info" :roInfo="roInfo" @changeInfoName="changeInfoName"
      @changeRoInfoName="changeRoInfoName"></show-info>
  </div>
</template>


<script>
import { reactive, readonly } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components: {
    ShowInfo
  },
  setup () {
    // 本地定义多个数据，都需要传递给子组件

    const info = reactive({
      name: "why",
      age: 18,
      height: 1.88
    })

    function changeInfoName (payload) {
      info.name = payload
    }
    // 使用readonly包裹info
    const roInfo = readonly(info)
    function changeRoInfoName (payload) {
      info.name = payload
    }

    return {
      info,
      changeInfoName,
      roInfo,
      changeRoInfoName
    }
  }
}
</script>

<style scoped></style>