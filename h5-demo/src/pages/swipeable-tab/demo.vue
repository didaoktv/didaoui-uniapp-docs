<template>
  <dd-top-navbar title="可滑动标签" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">等分模式 (fixed)</text>
      <dd-swipeable-tab
        v-model="fixedVal"
        :options="['基本', '音效', '隐私', '关于']"
        mode="fixed"
      />
      <text class="demo-note">选中：{{ ['基本', '音效', '隐私', '关于'][fixedVal] }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">可滚动模式 (scrollable)</text>
      <dd-swipeable-tab
        v-model="scrollVal"
        :options="scrollOpts"
        mode="scrollable"
      />
      <text class="demo-note">选中：{{ scrollOpts[scrollVal] }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义指示线宽度</text>
      <dd-swipeable-tab
        v-model="lineVal"
        :options="['窄线', '宽线']"
        mode="fixed"
        :line-width="80"
      />
      <text class="demo-note">lineWidth = 80rpx</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">等分模式（多项）</text>
      <dd-swipeable-tab
        v-model="fixedVal2"
        :options="['推荐', '热门', '新歌', '经典', '榜单']"
        mode="fixed"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">可滚动（短列表）</text>
      <dd-swipeable-tab
        v-model="scrollVal2"
        :options="['选项一', '选项二', '选项三']"
        mode="scrollable"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">change 事件</text>
      <text class="demo-note">最新事件：{{ swipeEvent }}</text>
      <dd-swipeable-tab
        v-model="eventVal"
        :options="['A', 'B', 'C', 'D']"
        mode="fixed"
        @change="(i: number) => (swipeEvent = '切换到: ' + ['A','B','C','D'][i])"
      />
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdSwipeableTab, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'



const fixedVal = ref(0)
const scrollVal = ref(1)
const lineVal = ref(0)
const fixedVal2 = ref(2)
const scrollVal2 = ref(0)
const eventVal = ref(0)
const swipeEvent = ref('暂无')

const scrollOpts = ['推荐', '热门', '新歌', '经典', '榜单', '歌手', '曲风', '主题']
</script>

<style lang="scss" scoped>
.demo-page { }
</style>