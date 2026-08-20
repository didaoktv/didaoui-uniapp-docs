<template>
  <dd-top-navbar title="轮播" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Autoplay — 自动轮播</text>
      <dd-swipe height="320rpx" :autoplay="3000" show-indicators>
        <dd-swipe-item><view class="banner b1">包房优惠活动</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b2">热门包房推荐</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b3">新歌速报</view></dd-swipe-item>
      </dd-swipe>
    </view>

    <view class="demo-section">
      <text class="demo-title">Loop — 循环 / 非循环</text>
      <view class="demo-col" style="gap:24rpx">
        <dd-swipe height="240rpx" :autoplay="2000" :loop="true" show-indicators>
          <dd-swipe-item><view class="banner b1">循环 A</view></dd-swipe-item>
          <dd-swipe-item><view class="banner b2">循环 B</view></dd-swipe-item>
          <dd-swipe-item><view class="banner b3">循环 C</view></dd-swipe-item>
        </dd-swipe>
      </view>
      <text class="demo-note">loop=false 时，滑到末尾停止</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">Vertical — 纵向轮播</text>
      <dd-swipe height="320rpx" vertical show-indicators>
        <dd-swipe-item><view class="banner b1">公告 1</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b2">公告 2</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b3">公告 3</view></dd-swipe-item>
      </dd-swipe>
    </view>

    <view class="demo-section">
      <text class="demo-title">Duration — 自定义切换时长</text>
      <dd-swipe height="240rpx" :autoplay="3000" :duration="800" show-indicators>
        <dd-swipe-item><view class="banner b1">Slow A</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b2">Slow B</view></dd-swipe-item>
      </dd-swipe>
      <text class="demo-note">duration=800ms（默认 500ms）</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">Touchable — 禁止触摸</text>
      <dd-swipe height="240rpx" :autoplay="2000" :touchable="false" show-indicators>
        <dd-swipe-item><view class="banner b1">不可滑动 A</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b2">不可滑动 B</view></dd-swipe-item>
      </dd-swipe>
      <text class="demo-note">touchable=false 时，仅可通过指示器点击切换</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">IndicatorColor — 自定义指示器颜色</text>
      <dd-swipe height="240rpx" :autoplay="3000" indicator-color="#E53935" show-indicators>
        <dd-swipe-item><view class="banner b1">红色指示器</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b2">Indicator</view></dd-swipe-item>
      </dd-swipe>
    </view>

    <view class="demo-section">
      <text class="demo-title">Custom Indicator Slot</text>
      <dd-swipe height="240rpx" :autoplay="3000" :show-indicators="false">
        <dd-swipe-item><view class="banner b1">自定义 A</view></dd-swipe-item>
        <dd-swipe-item><view class="banner b2">自定义 B</view></dd-swipe-item>
        <template #indicator="{ active, count }">
          <view class="custom-indicator">
            <text class="custom-indicator__text">{{ active + 1 }} / {{ count }}</text>
          </view>
        </template>
      </dd-swipe>
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

.custom-indicator {
  position: absolute;
  bottom: 20rpx;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  padding: 8rpx 24rpx;
  border-radius: 24rpx;
}
.custom-indicator__text {
  color: #FFC107;
  font-size: 24rpx;
}
</style>