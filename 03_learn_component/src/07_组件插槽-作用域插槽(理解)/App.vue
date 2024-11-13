<template>
    <div class="app">
        <!-- 1.tab-control -->
        <tab-control :titles="['衣服','鞋子','裤子']" @tabItemClick="tabItemClick"></tab-control>

        <!-- <tab-control :titles="['流行','最新','优选']"></tab-control> -->
        <!-- 2.展示内容 -->
        <h1>{{ pageContents[currentIndex] }}</h1>

        <!-- 1. tab-control: button -->
        <tab-control :titles="['衣服','鞋子','裤子']" @tabItemClick="tabItemClick">
            <template v-slot:default="props">
                <button>{{ props.item }}</button>
            </template>
        </tab-control>

        <!-- 2. tab-control: a元素 -->
        <tab-control :titles="['衣服','鞋子','裤子']" @tabItemClick="tabItemClick">
            <template v-slot:default="props">
                <a href="#">{{ props.item }}</a>
            </template>
        </tab-control>

        <!-- 3. 独占默认插槽的简写（了解） -->
        <tab-control :titles="['衣服','鞋子','裤子']" @tabItemClick="tabItemClick">
            <template v-slot="props">
                <a href="#">{{ props.item }}</a>
            </template>
        </tab-control>

    </div>
</template>


<script>
import TabControl from './components/TabControl.vue';
    export default{
        components: {
            TabControl
        },
        data(){
            return {
                pageContents:[ "衣服列表", "鞋子列表", "裤子列表" ],
                currentIndex: 0
            }
        },
        methods: {
            tabItemClick(index) {
                console.log("app", index),
                this.currentIndex = index
            }
        }
    }
</script>

<style scoped>
</style>