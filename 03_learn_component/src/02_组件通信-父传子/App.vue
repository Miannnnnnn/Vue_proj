<template>
        <!-- 1.展示why的个人信息 -->
        <!-- 如果当前的属性是一个非prop，那么该属性会默认添加到子组件的根元素上 -->
        <show-info name="why" :age="18" :height="1.7" 
        address="广州市" abc="cba" class="active" />

        <!-- 2.展示kobe的个人信息 -->
        <show-info name="kobe" :age="40" :height="1.98" />

        <!-- 2.展示默认的个人信息 -->
        <show-info :age="18" show-message="hahahaha"/>
</template>


<script>
import ShowInfo from './ShowInfo.vue';
    export default{
        components: {
            ShowInfo
        }
    }
</script>

<style scoped>

</style>