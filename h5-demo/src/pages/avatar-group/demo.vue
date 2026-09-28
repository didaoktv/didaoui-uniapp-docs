<template>
  <dd-top-navbar title="头像组" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础叠放</text>
      <view class="demo-col">
        <dd-avatar-group :urls="urls" :size="48" />
      </view>
      <text class="demo-note">默认 gap=0.5 叠放；size 单位 px</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">数量折叠 maxCount / showMore</text>
      <view class="demo-col">
        <dd-avatar-group :urls="manyUrls" :size="48" :maxCount="4" />
        <dd-avatar-group :urls="manyUrls" :size="48" :maxCount="4" :showMore="false" />
      </view>
      <text class="demo-note">maxCount 超出折叠；showMore=false 时不显示「+N」</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">形状与间距 shape / gap</text>
      <view class="demo-col">
        <dd-avatar-group :urls="urls" :size="48" shape="square" :gap="0.2" />
        <dd-avatar-group :urls="urls" :size="48" :gap="1" />
      </view>
      <text class="demo-note">square 方形叠放；gap=1 完全展开</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">额外数值 extraValue / showMore 事件</text>
      <view class="demo-col">
        <dd-avatar-group :urls="manyUrls" :size="48" :maxCount="5" :extraValue="128" @show-more="onShowMore" />
      </view>
      <text class="demo-note">{{ moreNote || '点击「+N」触发 showMore 事件' }}</text>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const urls = [
  'https://picsum.photos/seed/dd-ag1/100/100',
  'https://picsum.photos/seed/dd-ag2/100/100',
  'https://picsum.photos/seed/dd-ag3/100/100',
]
const manyUrls = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/dd-agn${i}/100/100`)
const moreNote = ref('')

function onShowMore() {
  moreNote.value = 'showMore 事件触发'
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }
</style>