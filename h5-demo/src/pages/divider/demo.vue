<template>
  <dd-top-navbar title="分割线" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">位置 ContentPosition</text>
      <text class="demo-label">Center 居中</text>
      <dd-divider content-position="center">分割线</dd-divider>
      <text class="demo-label" style="margin-top:24rpx">Left 靠左</text>
      <dd-divider content-position="left">分割线</dd-divider>
      <text class="demo-label" style="margin-top:24rpx">Right 靠右</text>
      <dd-divider content-position="right">分割线</dd-divider>
    </view>

    <view class="demo-section">
      <text class="demo-title">样式 Style</text>
      <text class="demo-label">实线 Solid</text>
      <dd-divider>实线分割线</dd-divider>
      <text class="demo-label" style="margin-top:24rpx">虚线 Dashed</text>
      <dd-divider :dashed="true">虚线分割线</dd-divider>
      <text class="demo-label" style="margin-top:24rpx">Hairline 细边线</text>
      <dd-divider :hairline="true">1px 细线</dd-divider>
    </view>

    <view class="demo-section">
      <text class="demo-title">纯文字 Text Only</text>
      <dd-divider content-position="center">歌单列表</dd-divider>
      <dd-divider content-position="left">热门推荐</dd-divider>
      <dd-divider content-position="right">新歌速递</dd-divider>
    </view>

    <view class="demo-section">
      <text class="demo-title">无文字 No Text</text>
      <dd-divider />
      <view style="height:16rpx"></view>
      <dd-divider :dashed="true" />
      <view style="height:16rpx"></view>
      <dd-divider :hairline="true" />
    </view>

    <view class="demo-section">
      <text class="demo-title">组合 Combinations</text>
      <dd-divider content-position="center" :dashed="true">居中+虚线</dd-divider>
      <dd-divider content-position="left" :hairline="true">靠左+细线</dd-divider>
      <dd-divider content-position="right" :dashed="true" :hairline="false">靠右+虚线+粗线</dd-divider>
    </view>
  <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdDivider } from '@didaoktv/didaoui-uniapp'


</script>

<style scoped>
.demo-page { }
</style>