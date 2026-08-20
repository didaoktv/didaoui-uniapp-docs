<template>
  <dd-top-navbar title="骨架屏" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Text 文本骨架</text>
      <dd-skeleton type="text" :rows="4" />
    </view>

    <view class="demo-section">
      <text class="demo-title">Card 卡片骨架</text>
      <dd-skeleton type="card" />
    </view>

    <view class="demo-section">
      <text class="demo-title">List 列表骨架</text>
      <dd-skeleton type="list" :rows="3" :avatar="true" />
    </view>

    <view class="demo-section">
      <text class="demo-title">Avatar 头像骨架</text>
      <dd-skeleton type="avatar" />
    </view>

    <view class="demo-section">
      <text class="demo-title">Image 图片骨架</text>
      <dd-skeleton type="image" />
    </view>

    <view class="demo-section">
      <text class="demo-title">加载完成 Loading Done</text>
      <dd-skeleton type="text" :rows="2" :loading="false">
        <view class="sk-content">
          <text style="color:#ccc;font-size:28rpx">加载完成的真实内容</text>
        </view>
      </dd-skeleton>
    </view>

    <view class="demo-section">
      <text class="demo-title">不同行数 Rows</text>
      <dd-skeleton type="text" :rows="3" />
      <view style="height:16rpx"></view>
      <dd-skeleton type="list" :rows="5" />
    </view>
  <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdSkeleton } from '@didaoktv/didaoui-uniapp'


</script>

<style scoped>
.demo-page { }
.sk-content{padding:20rpx;background:#2a2a2a;border-radius:12rpx;}
</style>