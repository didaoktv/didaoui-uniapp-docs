<template>
  <dd-top-navbar title="遮罩层" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础 — 显示遮罩</text>
      <dd-button type="primary" @click="show1 = true">显示遮罩</dd-button>
    </view>

    <view class="demo-section">
      <text class="demo-title">CloseOnClickOverlay</text>
      <text class="demo-label">close-on-click-overlay=false</text>
      <dd-button type="primary" @click="show2 = true">遮罩不可点击关闭</dd-button>
    </view>

    <view class="demo-section">
      <text class="demo-title">ZIndex / Duration</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="show3 = true">高 z-index</dd-button>
        <dd-button size="sm" type="primary" @click="show4 = true">慢速过渡</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">LockScroll</text>
      <text class="demo-label">lock-scroll=false 时遮罩下仍可滚动</text>
      <dd-button size="sm" type="primary" @click="show5 = true">不锁定滚动</dd-button>
    </view>

    <dd-overlay v-model="show1">
      <view style="display:flex;align-items:center;justify-content:center;height:100vh">
        <view class="overlay-card">遮罩层上的内容</view>
      </view>
    </dd-overlay>

    <dd-overlay v-model="show2" :close-on-click-overlay="false">
      <view style="display:flex;align-items:center;justify-content:center;height:100vh">
        <view class="overlay-card">
          <text>点击遮罩不会关闭</text>
          <dd-button size="sm" type="primary" style="margin-top:20rpx" @click="show2 = false">关闭</dd-button>
        </view>
      </view>
    </dd-overlay>

    <dd-overlay v-model="show3" :z-index="3000">
      <view style="display:flex;align-items:center;justify-content:center;height:100vh">
        <view class="overlay-card">Z-Index: 3000</view>
      </view>
    </dd-overlay>

    <dd-overlay v-model="show4" :duration="0.8">
      <view style="display:flex;align-items:center;justify-content:center;height:100vh">
        <view class="overlay-card">Duration: 0.8s</view>
      </view>
    </dd-overlay>

    <dd-overlay v-model="show5" :lock-scroll="false">
      <view style="display:flex;align-items:center;justify-content:center;height:100vh">
        <view class="overlay-card">不锁定滚动</view>
      </view>
    </dd-overlay>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdOverlay, DdButton } from '@didaoktv/didaoui-uniapp'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
</script>

<style scoped>
.demo-page {  }
.overlay-card {
  background: #171717;
  padding: 48rpx;
  border-radius: 16rpx;
  color: #FFC107;
  text-align: center;
}
</style>