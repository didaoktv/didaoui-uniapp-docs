<template>
  <dd-top-navbar title="进度条" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Linear 线性</text>
      <dd-progress type="linear" :percentage="30" />
      <view style="height:16rpx"></view>
      <dd-progress type="linear" :percentage="60" />
      <view style="height:16rpx"></view>
      <dd-progress type="linear" :percentage="100" />
      <view style="height:16rpx"></view>
      <dd-progress type="linear" :percentage="45" :show-text="false" />
    </view>

    <view class="demo-section">
      <text class="demo-title">Indeterminate 不确定</text>
      <dd-progress type="linear" :percentage="50" :indeterminate="true" />
    </view>

    <view class="demo-section">
      <text class="demo-title">Circular 环形</text>
      <view class="demo-row">
        <dd-progress type="circular" :percentage="25" :size="120" style="margin-right:12rpx" />
        <dd-progress type="circular" :percentage="65" :size="120" style="margin-right:12rpx" />
        <dd-progress type="circular" :percentage="100" :size="120" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义颜色 Custom Color</text>
      <view class="demo-row">
        <dd-progress type="circular" :percentage="70" :size="120" color="#42A5F5" style="margin-right:12rpx" />
        <dd-progress type="circular" :percentage="80" :size="120" color="#66BB6A" style="margin-right:12rpx" />
        <dd-progress type="circular" :percentage="45" :size="120" color="#EF5350" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Steps 步骤</text>
      <text class="demo-label">5 步 / 60% 进度</text>
      <dd-progress type="steps" :percentage="60" :steps="5" />
      <text class="demo-label" style="margin-top:24rpx">3 步 / 100% 进度</text>
      <dd-progress type="steps" :percentage="100" :steps="3" />
      <text class="demo-label" style="margin-top:24rpx">6 步 / 30% 进度</text>
      <dd-progress type="steps" :percentage="30" :steps="6" />
    </view>

    <view class="demo-section">
      <text class="demo-title">环形尺寸 Size</text>
      <view class="demo-row">
        <dd-progress type="circular" :percentage="50" :size="80" style="margin-right:12rpx" />
        <dd-progress type="circular" :percentage="50" :size="120" style="margin-right:12rpx" />
        <dd-progress type="circular" :percentage="50" :size="160" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">描边宽度 Stroke Width</text>
      <view class="demo-row">
        <dd-progress type="circular" :percentage="50" :size="120" :stroke-width="4" style="margin-right:12rpx" />
        <dd-progress type="circular" :percentage="50" :size="120" :stroke-width="12" style="margin-right:12rpx" />
        <dd-progress type="circular" :percentage="50" :size="120" :stroke-width="20" />
      </view>
    </view>
  <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdProgress } from '@didaoktv/didaoui-uniapp'


</script>

<style scoped>
.demo-page { }
</style>