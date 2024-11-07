<template>
    <div class="app">
        <!-- 1.tab-control -->
        <tab-control :titles="['衣服','鞋子','裤子']"></tab-control>

        <tab-control :titles="['流行','最新','优选']"></tab-control>
    </div>
</template>


<script>
import TabControl from './components/TabControl.vue';
    export default{
        components: {
            TabControl
        }
    }
</script>

<style scoped>
</style>