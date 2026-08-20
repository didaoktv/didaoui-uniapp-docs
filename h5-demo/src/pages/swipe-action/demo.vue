<template>
  <dd-top-navbar title="滑动单元格" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">RightActions — 右滑操作</text>
      <text class="demo-note">向右滑动内容显示右侧操作按钮</text>
      <dd-swipe-action :right-actions="right" @click="onClick">
        <view class="sa-item">消息：您的包房预订已确认</view>
      </dd-swipe-action>
    </view>

    <view class="demo-section">
      <text class="demo-title">LeftActions — 左滑操作</text>
      <text class="demo-note">向左滑动内容显示左侧操作按钮</text>
      <dd-swipe-action :left-actions="left" @click="onClick">
        <view class="sa-item">歌单：我的收藏</view>
      </dd-swipe-action>
    </view>

    <view class="demo-section">
      <text class="demo-title">双向滑动 — Left + Right</text>
      <dd-swipe-action :left-actions="left" :right-actions="right" @click="onClick">
        <view class="sa-item">双向滑动操作</view>
      </dd-swipe-action>
    </view>

    <view class="demo-section">
      <text class="demo-title">Disabled — 禁用滑动</text>
      <dd-swipe-action :right-actions="right" disabled @click="onClick">
        <view class="sa-item sa-item--disabled">此项已禁用滑动</view>
      </dd-swipe-action>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义 ActionWidth</text>
      <dd-swipe-action :right-actions="right" :action-width="200" @click="onClick">
        <view class="sa-item">自定义按钮宽度 200rpx</view>
      </dd-swipe-action>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义颜色 / 图标</text>
      <dd-swipe-action :right-actions="coloredRight" @click="onClick">
        <view class="sa-item">彩色操作按钮</view>
      </dd-swipe-action>
    </view>

    <dd-toast />

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdSwipeAction, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'


const right = [
  { text: '置顶', color: '#2D4BA0', icon: 'bars' },
  { text: '删除', color: '#E53935', icon: 'delete-o' },
]
const left = [
  { text: '收藏', color: '#F5A623', icon: 'star' },
]
const coloredRight = [
  { text: '分享', color: '#2D4BA0', icon: 'share-o' },
  { text: '升级', color: '#F5A623', icon: 'upgrade' },
  { text: '删除', color: '#E53935', icon: 'cross' },
]

function onClick(e: any) { showToast(e.action.text) }
</script>

<style scoped>
.demo-page {  }
.sa-item {
  padding: 32rpx;
  background: #171717;
  color: #F5F5F5;
}
.sa-item--disabled {
  opacity: 0.5;
}
</style>
