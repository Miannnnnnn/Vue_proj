import { defineStore } from "pinia";

const useUser = defineStore("user", {
  state: () => ({
    name: "why",
    age: 20,
    level: 100
  })
})

export default useUser