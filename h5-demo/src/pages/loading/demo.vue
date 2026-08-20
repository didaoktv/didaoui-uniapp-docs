<template>
  <dd-top-navbar title="加载" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Type — Spinner / Dots / Pulse</text>
      <view class="demo-row">
        <view class="demo-col" style="align-items:center">
          <dd-loading type="spinner" />
          <text class="demo-note">Spinner</text>
        </view>
        <view class="demo-col" style="align-items:center">
          <dd-loading type="dots" />
          <text class="demo-note">Dots</text>
        </view>
        <view class="demo-col" style="align-items:center">
          <dd-loading type="pulse" />
          <text class="demo-note">Pulse</text>
        </view>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Size — SM / MD / LG</text>
      <view class="demo-row">
        <view class="demo-col" style="align-items:center">
          <dd-loading type="spinner" size="sm" />
          <text class="demo-note">SM</text>
        </view>
        <view class="demo-col" style="align-items:center">
          <dd-loading type="spinner" size="md" />
          <text class="demo-note">MD</text>
        </view>
        <view class="demo-col" style="align-items:center">
          <dd-loading type="spinner" size="lg" />
          <text class="demo-note">LG</text>
        </view>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Size × Type 组合</text>
      <view class="demo-row">
        <dd-loading type="spinner" size="sm" text="小" />
        <dd-loading type="dots" size="md" text="中" />
        <dd-loading type="pulse" size="lg" text="大" />
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-loading type="dots" size="sm" />
        <dd-loading type="pulse" size="sm" />
        <dd-loading type="spinner" size="lg" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Color — 自定义颜色</text>
      <view class="demo-row">
        <dd-loading type="spinner" color="#F5A623" />
        <dd-loading type="dots" color="#2D4BA0" />
        <dd-loading type="pulse" color="#E53935" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Text — 文字提示</text>
      <view class="demo-row">
        <dd-loading type="spinner" text="加载中..." />
        <dd-loading type="dots" text="请稍候" />
        <dd-loading type="pulse" text="处理中" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Fullscreen — 全屏加载</text>
      <view class="demo-row">
        <dd-button type="primary" @click="fs = true; setTimeout(()=>fs=false,2000)">全屏加载 2s</dd-button>
      </view>
      <dd-loading :fullscreen="fs" text="加载中..." size="lg" />
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdLoading, DdButton } from '@didaoktv/didaoui-uniapp'

const fs = ref(false)
</script>

<style scoped>
.demo-page {  }
</style>