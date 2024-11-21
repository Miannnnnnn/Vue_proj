import { createApp } from 'vue'
import App from './App.vue'

import "./utils/abc/cba/nba/index"
/* 
    1.jsconfig.js的演练
    作用：给VSCode来进行读取，VSCode在读取到其中的内容时，给我们的代码更加友好的提示。
    2.引入的vue的版本
    默认vue版本：runtime，vue-loader完成template的编译过程
    vue.esm-bundle：runtime + complie，对template进行编译
    3.补充：单文件Vue style是有自己的作用域的
    4.补充 vite创建一个Vue项目
*/

createApp(App).mount('#app')  
