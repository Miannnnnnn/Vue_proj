<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path" icon="home-o">
          <span>{{ item.text }}</span>
          <!-- <template #icon>
              <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
              <img v-else :src="getAssetURL(item.imageActive)" alt="">
            </template>> -->
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
import { ref } from 'vue'
import { useRouter } from 'vue-router';


const currentIndex = ref(0)
const router = useRouter()


</script>

<style lang="less" scoped>
.tab-bar {
  // 局部定义一个变量：只针对于tab-bar子元素
  // --van-tabbar-item-icon-size: 30px !important;

  // 找到类，对类中的CSS属性重写
  // :deep(.class)找到子组件的类，让子组件的类也可以生效
  :deep(.van-tabbar-item__icon) {
    font-size: 30px;
  }

  img {
    height: 30px;
  }
}
</style>