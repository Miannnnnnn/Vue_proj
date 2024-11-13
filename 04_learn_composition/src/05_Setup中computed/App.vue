<template>
  <!-- <h2>{{ names.firstName + " " + names.lastName }}</h2> -->
  <h2>{{ fullname }}</h2>
  <button @click="setFullname">设置fullname</button>
  <h2>{{ scoreLevel }}</h2>
</template>


<script>
import full from 'core-js/full';
import { computed, reactive, ref } from 'vue';

export default {
  setup () {
    // 1.定义数据
    const names = reactive({
      firstName: "kobe",
      lastName: "bryant"
    })

    // const fullname = computed(() => {
    //   return names.firstName + " " + names.lastName
    // })
    const fullname = computed({
      set: function (newValue) {
        const tempNames = newValue.split(" ")
        names.firstName = tempNames[0]
        names.lastName = tempNames[1]
      },
      get: function () {
        return names.firstName + " " + names.lastName
      }
    })

    console.log(fullname)

    function setFullname () {
      fullname.value = "coder why"

    }

    // 2.定义score
    const score = ref(89)
    const scoreLevel = computed(() => {
      return score.value >= 60 ? "及格" : "不及格"
    })

    return {
      names,
      fullname,
      score,
      scoreLevel,
      setFullname
    }
  }
}
</script>

<style scoped></style>