<template>
  <dd-top-navbar title="图标" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础用法 Basic</text>
      <text class="demo-label">默认字体大小继承父元素</text>
      <view class="demo-row">
        <dd-icon name="search" />
        <dd-icon name="success" />
        <dd-icon name="warning" />
        <dd-icon name="info" />
        <dd-icon name="cross" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <view class="demo-row">
        <dd-icon name="star-o" size="16" />
        <dd-icon name="star-o" size="20" />
        <dd-icon name="star-o" size="24" />
        <dd-icon name="star-o" size="32" />
        <dd-icon name="star-o" size="48" />
      </view>
      <text class="demo-label">不同尺寸展示</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">颜色 Color</text>
      <view class="demo-row">
        <dd-icon name="star" size="28" color="#F5A623" />
        <dd-icon name="star" size="28" color="#E60012" />
        <dd-icon name="star" size="28" color="#07C160" />
        <dd-icon name="star" size="28" color="#1989FA" />
        <dd-icon name="star" size="28" color="#909399" />
      </view>
      <text class="demo-label">自定义颜色</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">红点提示 Dot</text>
      <view class="demo-row">
        <dd-icon name="friends" size="28" :dot="true" />
        <dd-icon name="manager" size="28" :dot="true" />
        <dd-icon name="gift" size="28" :dot="true" />
        <dd-icon name="bag-o" size="28" :dot="true" />
      </view>
      <text class="demo-label">右上角红点</text>
    </view>

    <view
      v-for="[group, names] in Object.entries(iconGroups)"
      :key="group"
      class="demo-section"
    >
      <text class="demo-title">{{ group }}（{{ names.length }}）</text>
      <view class="demo-grid">
        <view v-for="n in names" :key="n" class="demo-icon-cell">
          <dd-icon :name="n" size="24" />
          <text class="demo-icon-name">{{ n }}</text>
        </view>
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdIcon, iconGroups } from '@didaoktv/didaoui-uniapp'
</script>

<style lang="scss" scoped>
.demo-page { }

.demo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16rpx;
}

.demo-icon-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;
  padding: 20rpx 8rpx;
  background: #171717;
  border-radius: 12rpx;
}

.demo-icon-name {
  font-size: 20rpx;
  color: #9e9e9e;
  text-align: center;
  word-break: break-all;
}
</style>
