<template>
  <dd-top-navbar title="图片" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">适配模式 Fit</text>
      <view class="demo-row">
        <dd-image src="https://picsum.photos/300/200?fit1" fit="cover" :width="150" :height="100" style="margin-right:12rpx" />
        <dd-image src="https://picsum.photos/300/200?fit2" fit="contain" :width="150" :height="100" style="margin-right:12rpx" />
        <dd-image src="https://picsum.photos/300/200?fit3" fit="fill" :width="150" :height="100" />
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-image src="https://picsum.photos/300/200?fit4" fit="none" :width="150" :height="100" style="margin-right:12rpx" />
        <dd-image src="https://picsum.photos/300/200?fit5" fit="scale-down" :width="150" :height="100" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">圆角 Radius</text>
      <view class="demo-row">
        <dd-image src="https://picsum.photos/200/200?r1" :radius="8" :width="120" :height="120" style="margin-right:12rpx" />
        <dd-image src="https://picsum.photos/200/200?r2" :radius="24" :width="120" :height="120" style="margin-right:12rpx" />
        <dd-image src="https://picsum.photos/200/200?r3" round :width="120" :height="120" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">加载 Loading</text>
      <view class="demo-row">
        <dd-image src="https://picsum.photos/300/300?load1" :width="200" :height="200" style="margin-right:12rpx" />
        <dd-image src="" :width="200" :height="200" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义加载/错误 Custom Loading / Error</text>
      <view class="demo-row">
        <dd-image src="https://invalid-url-that-will-fail" :width="200" :height="200">
          <template #loading><view class="img-loading">⏳</view></template>
          <template #error><view class="img-error"><text>加载失败</text></view></template>
        </dd-image>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <view class="demo-row">
        <dd-image src="https://picsum.photos/100/100?s1" :width="80" :height="80" style="margin-right:12rpx" />
        <dd-image src="https://picsum.photos/150/150?s2" :width="150" :height="150" style="margin-right:12rpx" />
        <dd-image src="https://picsum.photos/200/200?s3" :width="200" :height="200" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">点击 Click</text>
      <view class="demo-row">
        <dd-image src="https://picsum.photos/200/200?click1" :width="200" :height="200" @click="tip('图片点击')" />
      </view>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdImage, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function tip(m){ showToast(m) }
</script>

<style scoped>
.demo-page { }
.img-loading{display:flex;align-items:center;justify-content:center;color:#FFC107;font-size:36rpx;}
.img-error{display:flex;align-items:center;justify-content:center;color:#757575;}
</style>