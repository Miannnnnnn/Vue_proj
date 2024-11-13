<template>
    <div class="app">
        <h2>App Message: {{ message }}</h2>
       <home></home>
    </div>
</template>


<script>
    import eventBus from './utils/event-bus';
    import Home from './components/Home.vue';
    export default{
       components: {
        Home
       },
       data() {
            return {
                message: "Hello App"
            }
        },
        created() {
            //
            eventBus.on("whyEvent", (name, age, height) => {
                console.log("whyEvent事件在App中监听", name, age, height)
                this.message = `name:${name}, age:${age}, height:${height}`
            })
        }
       }
</script>

<style scoped>
</style>