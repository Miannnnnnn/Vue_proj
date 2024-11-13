import { ref, watch } from "vue"
export default function useTitle (titleValue) {
  // document.title = title

  // 定义ref的引入的数据
  const title = ref(titleValue)

  watch(title, (newValue) => {
    document.title = newValue
  }, {
    immediate: true
  })
  return {
    title
  }
}