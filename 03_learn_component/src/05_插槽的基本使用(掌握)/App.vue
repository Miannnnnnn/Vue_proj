<template>
    <div class="app">
        <!-- 1.内容是button -->
        <ShowMessage title="hahaha">
            <button>我是按钮元素</button>
        </ShowMessage>

        <!-- 2.内容是超链接 -->
         <ShowMessage>
            <a href="#">百度一下</a>
         </ShowMessage>

         <!-- 3. 内容是一张图片 -->
        <ShowMessage>
            <img src="@/img/wallhaven-6q7g16.jpg" alt="">
        </ShowMessage>

        <!-- 4.内容没有传递 -->
        <ShowMessage>
        </ShowMessage>
    </div>
</template>


<script>
import ShowMessage from './components/ShowMessage.vue';
    export default{
       components: {
            ShowMessage,
       }
    }
</script>

<style scoped>
</style>