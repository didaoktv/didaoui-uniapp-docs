<template>
  <dd-top-navbar title="吸顶容器" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础 Sticky</text>
      <view class="sticky-scroll-outer">
        <view class="sticky-scroll-inner">
          <view v-for="i in 20" :key="i" class="sticky-ph">
            <text>占位行 {{ i }}</text>
          </view>
          <dd-sticky :offset-top="0" :z-index="10">
            <view class="sticky-bar">
              <text>吸顶栏 offsetTop=0 zIndex=10</text>
            </view>
          </dd-sticky>
          <view v-for="i in 20" :key="'b'+i" class="sticky-ph">
            <text>占位行 {{ i + 20 }}</text>
          </view>
        </view>
      </view>
      <text class="demo-note">滚动容器查看吸顶效果</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">不同 OffsetTop</text>
      <view class="sticky-scroll-outer">
        <view class="sticky-scroll-inner">
          <view v-for="i in 10" :key="i" class="sticky-ph">
            <text>顶部占位 {{ i }}</text>
          </view>
          <dd-sticky :offset-top="40" :z-index="20">
            <view class="sticky-bar sticky-bar--offset">
              <text>offsetTop=40rpx zIndex=20</text>
            </view>
          </dd-sticky>
          <view v-for="i in 20" :key="'c'+i" class="sticky-ph">
            <text>占位 {{ i + 10 }}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <view class="sticky-scroll-outer">
        <view class="sticky-scroll-inner">
          <view v-for="i in 5" :key="i" class="sticky-ph">
            <text>占位 {{ i }}</text>
          </view>
          <dd-sticky :disabled="true">
            <view class="sticky-bar">
              <text>禁用态 - 不吸顶</text>
            </view>
          </dd-sticky>
          <view v-for="i in 20" :key="'d'+i" class="sticky-ph">
            <text>占位 {{ i + 5 }}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Change 事件</text>
      <view class="sticky-scroll-outer">
        <view class="sticky-scroll-inner">
          <view v-for="i in 15" :key="i" class="sticky-ph">
            <text>顶部占位 {{ i }}</text>
          </view>
          <dd-sticky :offset-top="0" @change="onStickyChange">
            <view class="sticky-bar">
              <text>吸顶状态: {{ stickyState ? '已固定' : '未固定' }}</text>
            </view>
          </dd-sticky>
          <view v-for="i in 30" :key="'e'+i" class="sticky-ph">
            <text>占位 {{ i + 15 }}</text>
          </view>
        </view>
      </view>
      <text class="demo-note">当前状态: {{ stickyState ? 'fixed' : 'not fixed' }}</text>
    </view>

  <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdSticky } from '@didaoktv/didaoui-uniapp'


const stickyState = ref(false)
function onStickyChange(e){ stickyState.value = e.isFixed }
</script>

<style scoped>
.demo-page { }
.sticky-scroll-outer{height:600rpx;overflow-y:auto;background:#1a1a1a;border-radius:12rpx;}
.sticky-scroll-inner{position:relative;}
.sticky-ph{height:60rpx;padding:0 32rpx;display:flex;align-items:center;color:#757575;font-size:26rpx;border-bottom:1px solid #2a2a2a;}
.sticky-bar{background:linear-gradient(135deg,#FFC107,#D4891A);color:#1a1a1a;padding:20rpx 32rpx;font-weight:600;border-radius:8rpx;text-align:center;}
.sticky-bar--offset{background:linear-gradient(135deg,#42A5F5,#1565C0);color:#fff;}
</style>