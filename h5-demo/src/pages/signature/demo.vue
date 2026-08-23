<template>
  <dd-top-navbar title="签名" />
  <view class="demo-page">

    <!-- 基础签名 -->
    <view class="demo-section">
      <text class="demo-title">基础签名（含默认工具栏）</text>
      <view class="sg-wrap">
        <dd-signature
          :width="300"
          :height="180"
          @confirm="onConfirm"
          @clear="onClear"
        />
      </view>
      <text class="demo-note">工具栏自左向右：回退 / 清空 / 笔画设置 / 颜色设置 / 确认导出</text>
    </view>

    <!-- 无工具栏 -->
    <view class="demo-section">
      <text class="demo-title">无工具栏 showToolbar=false</text>
      <view class="sg-wrap">
        <dd-signature :width="300" :height="160" :showToolbar="false" />
      </view>
      <text class="demo-note">隐藏工具栏，仅保留画布，适合嵌入自定义操作区</text>
    </view>

    <!-- 笔画与颜色 -->
    <view class="demo-section">
      <text class="demo-title">笔画粗细 thickness / 颜色 color / 背景色 bgColor</text>
      <view class="sg-wrap">
        <dd-signature :width="300" :height="150" :thickness="6" color="#E60012" bg-color="#FFFBEF" />
      </view>
      <view class="sg-wrap" style="margin-top:16rpx">
        <dd-signature :width="300" :height="150" :thickness="2" color="#2D4BA0" />
      </view>
      <text class="demo-note">上：粗笔 6px 红色 / 米黄底；下：细笔 2px 蓝色 / 默认白底。工具栏内也可实时调整笔画与颜色</text>
    </view>

    <!-- 导出结果 -->
    <view class="demo-section">
      <text class="demo-title">导出结果（confirm 回调返回图片路径）</text>
      <image v-if="signPath" :src="signPath" class="sg-result" mode="aspectFit" />
      <text v-else class="demo-note">在上方画布签名后点击 ✓ 导出</text>
      <text v-if="signPath" class="demo-note">{{ clearNote }}导出路径：{{ signPath }}</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const signPath = ref('')
const clearNote = ref('')

function onConfirm(path: string) {
  signPath.value = path
}

function onClear() {
  clearNote.value = '画布已清空。'
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.sg-wrap {
  border-radius: 12rpx;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sg-result {
  width: 300px;
  height: 180px;
  border-radius: 12rpx;
  background: #fff;
}
</style>
