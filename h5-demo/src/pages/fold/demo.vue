<template>
  <dd-top-navbar title="折叠容器" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础 Basic</text>
      <dd-fold v-model:expanded="open">
        <view class="fold-card">
          <dd-list-cell
            v-for="i in 8"
            :key="i"
            size="xs"
            :title="`键值行 ${i}`"
            value="值"
          />
        </view>
      </dd-fold>
      <text class="demo-note">内容超过 320rpx 自动折叠：底部渐变渐隐 + 「展开详情」；未超高则原样展示</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义高度与文案 Custom</text>
      <dd-fold
        v-model:expanded="open2"
        :max-height="200"
        :fade-height="64"
        expand-text="查看全部明细"
        collapse-text="收起明细"
      >
        <view class="fold-card">
          <dd-list-cell
            v-for="i in 8"
            :key="i"
            size="xs"
            :title="`键值行 ${i}`"
            value="值"
          />
        </view>
      </dd-fold>
    </view>

    <view class="demo-section">
      <text class="demo-title">短内容不折叠 Short</text>
      <dd-fold v-model:expanded="open3">
        <view class="fold-card">
          <dd-list-cell size="xs" title="单号" value="OD26102900010001" />
          <dd-list-cell size="xs" title="来源" value="店员代点" />
        </view>
      </dd-fold>
      <text class="demo-note">两行远低于折叠高度，不会出现渐变与展开入口</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">渐变终色 Fade Color</text>
      <view class="tint-bg">
        <dd-fold v-model:expanded="open4" fade-color="#222">
          <view class="fold-card">
            <dd-list-cell
              v-for="i in 8"
              :key="i"
              size="xs"
              :title="`键值行 ${i}`"
              value="值"
            />
          </view>
        </dd-fold>
      </view>
      <text class="demo-note">所在区域底色不同时传 fade-color，渐变才能衔接（这里底色 #222）</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdFold } from '@didaoktv/didaoui-uniapp'

const open = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const open4 = ref(false)
</script>

<style scoped>
.demo-page { }
.fold-card { background: var(--dd-bg-card); border-radius: 12rpx; overflow: hidden; }
.tint-bg { background: #222; border-radius: 12rpx; padding: 16rpx; }
</style>
