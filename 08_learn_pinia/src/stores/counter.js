// 定义关于counter的store
// user的store
// home的store

import { defineStore } from "pinia";
import useUser from "./user";


const useCounter = defineStore("counter", {
  state: () => ({
    count: 99,
    friends: [
      { id: 111, name: "why" },
      { id: 112, name: "kobe" },
      { id: 113, name: "james" },
    ]
  }),
  getters: {
    // 1.基本使用
    duobleCount (state) {
      return state.count * 2
    },

    // 2. 一个getter引入另外一个getter
    duobleCountAddOne () {
      // this是store实例
      return this.duobleCount + 1
    },

    // 3.getters也支持返回一个函数
    getFriendById (state) {
      return function (id) {
        // return state.friends.find()
        for (let i = 0; i < state.friends.length; i++) {
          const friend = state.friends[i]
          if (friend.id === id) {
            return friend
          }
        }
      }
    },

    // 4.getters中用到别的store中的数据
    showMessage (state) {
      // 1.获取user信息
      const userStore = useUser()

      // 2.获取自己的信息

      // 3.拼接信息
      return `name:${userStore.name}-count:${state.count}`
    }
  },
  actions: {
    increment () {
      this.count++
    },
    incrementNum (num) {
      this.count += num
    }
  }
})


export default useCounter
