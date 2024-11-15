<template>
  <div class="app">
    <button @click="incrementLevel">修改level</button>
    <!-- 1.在模板中直接使用多个状态 -->
    <h2>name: {{ $store.state.name }}</h2>
    <h2>level: {{ $store.state.level }}</h2>
    <h2>avatar: {{ $store.state.avatarURL }}</h2>

    <!-- 2.计算属性（映射状态）-->
    <!-- <h2>name: {{ name }}</h2>
    <h2>level: {{ level }}</h2>
    <h2>avatar: {{ avatarURL }}</h2> -->

    <!-- 3.计算属性（对象状态）-->
    <!-- <h2>name: {{ sName }}</h2>
    <h2>level: {{ sLevel }}</h2>
    <h2>avatar: {{ sAvatar }}</h2> -->

    <!-- 4.setup计算属性（映射状态：对象语法）-->
    <!-- <h2>name: {{ cName }}</h2>
    <h2>level: {{ cLevel }}</h2>
    <h2>avatar: {{ cAvatar }}</h2> -->

    <!-- 5. -->
    <h2>name: {{ name }}</h2>
    <h2>level: {{ level }}</h2>
  </div>
</template>


<!-- <script>
// import { mapState } from 'vuex';



// export default {
//   computed: {
//     fullname () {

//     },
//     ...mapState(["name", "level", "avatarURL"]),
//     ...mapState({
//       sName: state => state.name,
//       sLevel: state => state.level,
//       sAvatar: state => state.avatarURL
//     })
//   }
// }
</script> -->


<script setup>
import { computed, toRefs } from 'vue';
import { mapState, useStore } from 'vuex';
import useState from '../hooks/useState';


// 1.一步一步做
// const { name, level, avatarURL } = mapState(["name", "level", "avatarURL"])
// const store = useStore()
// const cName = computed(name.bind({ $store: store }))
// const cLevel = computed(level.bind({ $store: store }))
// const cAvatar = computed(avatarURL.bind({ $store: store }))


// 2.使用useState
// const { name, level } = useState(["name", "level"])

// 3.直接对store.state进行解构
const store = useStore()
const { name, level } = toRefs(store.state)

function incrementLevel () {
  store.state.level++
}

</script>

<style scoped></style>