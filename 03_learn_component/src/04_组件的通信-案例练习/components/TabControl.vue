<template>
    <div class="tab-control">
        <template v-for="item in titles" :key="item">
            <div class="tab-control-item">{{ item }}</div>
        </template>

    </div>
</template>


<script>
    export default{
        props: {
            titles:{
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .tab-control-item {
        flex: 1;
    }
</style>