<template>
    <div class="app">
        <div class="tabs">
            <template v-for="(item, index) in tabs" :key="item">
                <button :class="{ active: currentTab === item}" 
                @click="itemClick(item)">
                {{ item }}
            </button>
            </template>

            <div class="view">
                <!-- 1. 第一种做法：v-if进行判断逻辑，决定要显示哪一个组件 -->
                <!-- <template v-if="currentIndex === 0">
                    <home></home>
                </template>

                <template v-else-if="currentIndex === 1">
                    <about></about>
                </template>

                <template v-else>
                    <category></category>
                </template> -->

                <!-- 2.第二种做法：动态组件 component -->
                 <!-- is中的组件需要来自两个地方：1.全局组件的组件 2.内部注册的组件 -->
                 <component name="why" 
                 :age = "18"
                 @homeClick="homeClick"
                 :is="currentTab">
                </component>
            </div>
        </div>
    </div>
</template>


<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Category from './components/Category.vue'
    export default{
        components: {
            Home, About, Category
        },
       data() {
        return {
            tabs: ["home", "about", "category"],
            // currentIndex: 0
            currentTab: "home"
        }
       },
       methods: {
        itemClick(tab) {
            this.currentTab = tab
        },
        homeClick(payload) {
            console.log("homeClick: ", payload)
        }
       }
    }
</script>

<style scoped>
    .active {
        color: red;
    }
</style>