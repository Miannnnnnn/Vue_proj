<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <template #default>
            <span>{{ item.text }}</span>
          </template>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
    <!-- <template v-for="(item, index) in tabbarData">
      <div class="tab-bar-item" :class="{ active: index === currentIndex }" @click="itemClick(index, item)">
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
  </div>
</template>


<script setup>

import tabbarData from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/load_assets.js';
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const currentIndex = ref(0)
// const router = useRouter()

watch(route, (newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path)
  if (index == -1) return
  currentIndex.value = index
})



</script>

<style lang="less" scoped>
.tab-bar {
  // height: 50px;
  // 局部定义一个变量：只针对于tab-bar子元素
  // --van-tabbar-item-icon-size: 30px !important;

  // 找到类，对类中的CSS属性重写
  // :deep(.class)找到子组件的类，让子组件的类也可以生效
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }

  img {
    height: 26px;
  }
}
</style>