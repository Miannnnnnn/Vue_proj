<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button :class="{ active: currentTab === item }" @click="itemClick(item)">
          {{ item }}
        </button>
      </template>

      <div class="view">
        <keep-alive include="home,about">
          <component :is="currentTab"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>


<script>
import { defineAsyncComponent } from 'vue';

import Home from './views/Home.vue'
import About from './views/About.vue'
// import Category from './components/Category.vue'
const AsyncCategory = defineAsyncComponent(() => import('./views/Category.vue'))

export default {
  components: {
    Home,
    About,
    Category
  },
  data () {
    return {
      tabs: ['home', 'about', 'category'],
      // currentIndex: 0
      currentTab: 'home'
    }
  },
  methods: {
    itemClick (tab) {
      this.currentTab = tab
    },
    homeClick (payload) {
      console.log('homeClick: ', payload)
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
}
</style>