<template>
  <dd-top-navbar title="卡片" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">变体 Variant</text>
      <view class="demo-col">
        <dd-card variant="vertical">
          <template #header><text class="dd-card-h">VIP 包房套餐</text></template>
          <view class="dd-card-b">含啤酒12瓶、果盘2份、小吃4份</view>
          <template #footer><dd-button size="sm" type="primary">立即预订</dd-button></template>
        </dd-card>
        <dd-card variant="horizontal">
          <view class="dd-card-b">横向卡片内容</view>
        </dd-card>
        <dd-card variant="compact">
          <view class="dd-card-b">紧凑卡片</view>
        </dd-card>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">边框 Border</text>
      <view class="demo-row">
        <dd-card :border="true" style="flex:1">
          <view class="dd-card-b">有边框</view>
        </dd-card>
        <dd-card :border="false" style="flex:1">
          <view class="dd-card-b">无边框</view>
        </dd-card>
      </view>
      <text class="demo-title" style="margin-top:24rpx">选中 Active</text>
      <view class="demo-row">
        <dd-card active style="flex:1">
          <view class="dd-card-b">选中态</view>
        </dd-card>
        <dd-card :active="false" style="flex:1">
          <view class="dd-card-b">默认态</view>
        </dd-card>
      </view>

      <text class="demo-title" style="margin-top:24rpx">悬浮 Hover</text>
      <view class="demo-row">
        <dd-card hover style="flex:1">
          <view class="dd-card-b">悬浮态</view>
        </dd-card>
        <dd-card hoverable style="flex:1" @click="tip('点击')">
          <view class="dd-card-b">可悬浮点击</view>
        </dd-card>
      </view>
      <text class="demo-title" style="margin-top:24rpx">状态组合 States</text>
      <view class="demo-row">
        <dd-card variant="horizontal" active hoverable style="flex:1" @click="tip('组合')">
          <view class="dd-card-b">horizontal + active + hoverable</view>
        </dd-card>
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-card variant="compact" :border="false" hover style="flex:1">
          <view class="dd-card-b">compact + 无边框 + hover</view>
        </dd-card>
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-card variant="vertical" :border="false" hoverable active style="flex:1">
          <view class="dd-card-b">vertical + 无边框 + active + hoverable</view>
        </dd-card>
      </view>
      <text class="demo-label" style="margin-top:24rpx">Slot 演示</text>
      <view class="demo-row">
        <dd-card style="flex:1">
          <template #header><text class="dd-card-h">标题</text></template>
          <template #extra><text class="dd-card-ext">附加</text></template>
          <view class="dd-card-b">默认内容区域</view>
          <template #footer><text class="dd-card-f">底部说明</text></template>
        </dd-card>
      </view>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdCard, DdButton, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function tip(m){ showToast(m) }
</script>

<style scoped>
.demo-page { }
.dd-card-h{color:#F5F5F5;font-weight:600;}
.dd-card-b{padding:16rpx 0;color:#9E9E9E;}
.dd-card-ext{color:#FFC107;font-size:24rpx;}
.dd-card-f{color:#757575;font-size:22rpx;}
</style>