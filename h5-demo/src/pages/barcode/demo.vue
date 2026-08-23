<template>
  <dd-top-navbar title="条形码" />
  <view class="demo-page">

    <!-- 基础 CODE128 -->
    <view class="demo-section">
      <text class="demo-title">基础 CODE128</text>
      <view class="bc-wrap">
        <dd-barcode value="DDKTV-2026-0822" format="CODE128" :width="280" :height="80" />
      </view>
      <text class="demo-note">默认 format=CODE128，displayValue=true 显示条码文本</text>
    </view>

    <!-- 多种格式 -->
    <view class="demo-section">
      <text class="demo-title">条码格式 format（CODE128 / CODE39 / EAN13）</text>
      <view class="bc-wrap">
        <dd-barcode value="KTV-88001" format="CODE39" :width="240" :height="70" />
      </view>
      <view class="bc-wrap">
        <dd-barcode value="5901234123457" format="EAN13" :width="240" :height="70" />
      </view>
      <text class="demo-note">CODE39 适合字母数字；EAN13 需要 12/13 位纯数字</text>
    </view>

    <!-- displayValue -->
    <view class="demo-section">
      <text class="demo-title">displayValue 显示/隐藏文本</text>
      <view class="bc-wrap">
        <dd-barcode value="SHOW-TEXT-001" :width="260" :height="70" :displayValue="true" />
      </view>
      <view class="bc-wrap">
        <dd-barcode value="HIDE-TEXT-001" :width="260" :height="70" :displayValue="false" />
      </view>
    </view>

    <!-- 自定义文本 text / 位置 textPosition -->
    <view class="demo-section">
      <text class="demo-title">自定义文本 text / 位置 textPosition</text>
      <view class="bc-wrap">
        <dd-barcode value="88888866" format="EAN13" :width="240" :height="70" text="会员卡号 88888866" />
      </view>
      <view class="bc-wrap">
        <dd-barcode value="TOP-POS-01" :width="240" :height="80" text="文本在上方" text-position="top" />
      </view>
    </view>

    <!-- lineColor -->
    <view class="demo-section">
      <text class="demo-title">条码颜色 lineColor</text>
      <view class="bc-wrap">
        <dd-barcode value="GOLD-MEMBER" :width="240" :height="70" line-color="#F5A623" />
      </view>
      <view class="bc-wrap">
        <dd-barcode value="BLUE-MEMBER" :width="240" :height="70" line-color="#2D4BA0" />
      </view>
    </view>

    <!-- useCanvas 两种模式 -->
    <view class="demo-section">
      <text class="demo-title">渲染模式 useCanvas</text>
      <view class="bc-wrap">
        <text class="demo-subtitle">useCanvas=true（canvas 渲染，默认）</text>
        <dd-barcode value="CANVAS-MODE-01" :width="260" :height="70" :useCanvas="true" />
      </view>
      <view class="bc-wrap">
        <text class="demo-subtitle">useCanvas=false（图片渲染）</text>
        <dd-barcode value="IMAGE-MODE-01" :width="260" :height="70" :useCanvas="false" />
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.bc-wrap {
  background: #fff;
  border-radius: 12rpx;
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
  margin-bottom: 16rpx;
}
</style>
