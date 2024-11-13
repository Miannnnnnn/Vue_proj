<template>
    <h2>Home</h2>
</template>


<script>
    export default{
       beforeUnmount() {
        console.log("home beforeUnmount")
       },
       unmounted() {
        console.log("unmounted")
       }
    }
</script>

<style scoped>
</style>