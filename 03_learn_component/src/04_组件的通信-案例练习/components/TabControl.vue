<template>
    <div class="tab-control">
        <template v-for="(item, index) in titles" :key="item">
             <div class="tab-control-item" 
             :class="{ active: index === currentIndex}"
             @click="itemClick(index)">
                {{ item }}</div>
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
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index
                console.log(this.currentIndex)
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
    .tab-control-item.active {
        color: red;
        font-weight: 700;
    }
</style>