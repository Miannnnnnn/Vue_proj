import { reactive, ref } from "vue";

export default function useScrollposition () {
  // 1.使用ref记录位置
  // const scrollX = ref(0)
  // const scrollY = ref(0)
  const scrollPosition = reactive({
    x: 0,
    y: 0
  })

  // 2.监听轮动
  // document.addEventListener('scroll', () => {
  //   scrollX.value = window.scrollX
  //   scrollY.value = window.scrollY
  // })
  document.addEventListener('scroll', () => {
    scrollPosition.x = window.scrollX
    scrollPosition.y = window.scrollY
  })

  // return { scrollX, scrollY }
  return {
    scrollPosition
  }
}