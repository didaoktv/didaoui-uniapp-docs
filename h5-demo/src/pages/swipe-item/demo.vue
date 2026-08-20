<template>
  <dd-top-navbar title="轮播项" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">SwipeItem — 基础用法</text>
      <text class="demo-note">dd-swipe-item 作为 dd-swipe 的子项，自动注册计数</text>
      <dd-swipe height="300rpx" :autoplay="4000" show-indicators style="margin-top:16rpx">
        <dd-swipe-item><view class="banner b1">横幅 1</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b2">横幅 2</view></dd-swipe-item>
      </dd-swipe>
    </view>

    <view class="demo-section">
      <text class="demo-title">多项轮播</text>
      <dd-swipe height="280rpx" :autoplay="2500" show-indicators>
        <dd-swipe-item><view class="banner b1">1</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b2">2</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b3">3</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b1">4</view></dd-swipe-item>
      </dd-swipe>
    </view>

    <view class="demo-section">
      <text class="demo-title">无 Swipe 父级（独立使用）</text>
      <text class="demo-note">dd-swipe-item 在没有 dd-swipe 父级时静默忽略</text>
      <dd-swipe-item style="margin-top:16rpx">
        <view class="banner b2">独立 SwipeItem</view>
      </dd-swipe-item>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdSwipe, DdSwipeItem } from '@didaoktv/didaoui-uniapp'

</script>

<style scoped>
.demo-page {  }
.banner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 32rpx;
  font-weight: 700;
}
.b1 { background: linear-gradient(135deg, #F5A623, #D4891A); }
.b2 { background: linear-gradient(135deg, #2D4BA0, #1E3A8A); }
.b3 { background: linear-gradient(135deg, #9C27B0, #6A1B9A); }
</style>