import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// import Home from "../Views/Home.vue";
// import About from "../Views/About.vue";

// 路由的懒加载
// const Home = () => import(/* webpackChunkName: 'home' */"../Views/Home.vue")
// const About = () => import(/* webpackChunkName: 'about' */"../Views/About.vue")

// 创建一个路由：映射关系
const router = createRouter({
  // 指定采用的模式：Hash
  history: createWebHashHistory(),
  // history: createWebHistory(),
  // 映射关系
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      name: "home",
      path: "/home",
      // component: Home
      component: () => import("../Views/Home.vue"),
      meta: {
        name: "why",
        age: 18
      },
      children: [
        {
          path: "/home",
          redirect: "/home/recommend"
        },
        {
          path: "recommend", // /home/recommend
          component: () => import("../Views/HomeRecommend.vue")
        },
        {
          path: "ranking", // /home/ranking
          component: () => import("../Views/HomeRanking.vue")
        },
      ]
    },
    {
      name: "about",
      path: "/about",
      // component: About
      component: () => import("../Views/About.vue")
    },
    {
      path: "/user/:id",
      component: () => import("../Views/User.vue")
    },
    {
      path: "/order",
      component: () => import("../Views/Order.vue")
    },
    {
      path: "/login",
      component: () => import("../Views/Login.vue")
    },
    {
      // 如果匹配到任何一个不存在的路径，那么就自动显示下面的这个组件
      // path后面再加*的话，会将路径解析为数组.
      // abc/cba/nba -> ['abc', 'cba', 'nba']
      // path: "/:pathMatch(.*)*",
      // path后面不加*的话，abc/cba/nba 就是 abc/cba/nba
      path: "/:pathMatch(.*)",
      component: () => import("../Views/NotFound.vue")
    }
  ]
})

// 动态管理路由
let isAdmin = true
if (isAdmin) {
  // 一级路由
  router.addRoute({
    path: "/admin",
    component: () => import("../Views/Admin.vue")
  })
  // 添加vip页面
  router.addRoute("home", {
    path: "vip",
    component: () => import("../Views/HomeVip.vue")
  })
}


// 获取router中所有映射路由对象
console.log(router.getRoutes())

// 2.路由导航守卫
// 进行任何的路由跳转之前，传入的beforeEach中的函数都会被回调
// 需求：进入到订单页面时，判断用户是否登录
// 情况一：用户没有登录，那么跳转到登录页面，进行登录的操作
// 情况二：用户已经登录，那么直接进入到订单页面
router.beforeEach((to, from) => {
  // 1.进入到任何别的页面，都跳转到login页面
  // if (to.path !== "/login")
  //   return "/login"

  // 2.进入到订单页面时，判断用户是否登录
  const token = localStorage.getItem("token")
  if (!token && to.path === "/order") {
    return "/login"
  }
})


export default router