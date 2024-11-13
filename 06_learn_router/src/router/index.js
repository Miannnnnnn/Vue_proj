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

export default router