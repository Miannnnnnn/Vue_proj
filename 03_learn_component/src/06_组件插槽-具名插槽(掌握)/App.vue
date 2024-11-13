<template>
    <nav-bar>
        <template #left>
            <button>{{ leftText }}</button>
        </template>
        
        <template v-slot:center>
            <span>内容</span>
        </template>

        <template v-slot:right>
            <a href="#">登录</a>
        </template>
        
    </nav-bar>

    <!-- nav-bar只传入一个参数 -->
     <nav-bar>
        <template v-slot:[position]>
            <a href="#">注册</a>
        </template>
     </nav-bar>
     <button @click="position = 'left' ">左边</button>
     <button @click="position = 'center' ">中间</button>
     <button @click="position = 'right' ">右边</button>
</template>


<script>
import NavBar from './components/NavBar.vue';
    export default{
       components: {
            NavBar
       },
       data() {
        return {
            position: 'center',
            leftText: "返回"
        }
       }
    }
</script>

<style scoped>
</style>