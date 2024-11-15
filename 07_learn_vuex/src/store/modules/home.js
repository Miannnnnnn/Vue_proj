export default {
  state: () => ({
    // 服务器数据
    banners: [],
    recommends: []
  }),
  mutations: {
    changeBanners (state, banners) {
      state.banners = banners
    },
    changeRecommends (state, recommends) {
      state.recommends = recommends
    }
  },
  actions: {
    fetchHomeMultidataAction (context) {
      // 1.返回Promise，给Promise设置then
      // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //   res.json().then(data => {
      //     console.log(data)
      //   })
      // })

      // 2. Promise链式调用
      // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //   return res.json()
      // }).then(data => {
      //   console.log(data)
      // })


      // // 3.await/async
      // const res = await fetch("http://123.207.32.32:8000/home/multidata")
      // const data = await res.json()

      // // 修改state数据
      // context.commit("changeBanners", data.data.banner.list)
      // context.commit("changeRecommends", data.data.recommend.list)

      return new Promise(async (resolve, reject) => {
        // 3.await/async
        const res = await fetch("http://123.207.32.32:8000/home/multidata")
        const data = await res.json()

        // 修改state数据
        context.commit("changeBanners", data.data.banner.list)
        context.commit("changeRecommends", data.data.recommend.list)

        resolve("aaaa")
      })
    }
  }
}