<template>
  <dd-top-navbar title="价格" />
  <view class="demo-page">

    <!-- 基础用法 -->
    <view class="demo-section">
      <text class="demo-title">基础用法</text>
      <view class="demo-price-row">
        <dd-price :rate="3999" />
        <dd-price :rate="3999" class="demo-price-gold" />
        <dd-price :rate="12.5" suffix="起" />
      </view>
      <text class="demo-note">rate 直接传元（不除以 100），颜色 inherit 跟随上下文</text>
    </view>

    <!-- 小数位数与前后缀 -->
    <view class="demo-section">
      <text class="demo-title">小数位数与前后缀</text>
      <view class="demo-price-col">
        <dd-price :rate="199" :decimal-length="0" />
        <dd-price :rate="12.5" prefix="会员价" suffix="/小时" class="demo-price-gold" />
        <dd-price rate="88.8" />
      </view>
      <text class="demo-note">decimalLength=0 隐藏小数；string rate 原样拆分不补位</text>
    </view>

    <!-- submit-bar 内的用法 -->
    <view class="demo-section">
      <text class="demo-title">在提交订单栏中（内部复用）</text>
      <text class="demo-note">dd-submit-bar 的 price（分）除以 100 后交给 dd-price 渲染，语义色红</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }
.demo-price-row {
  display: flex;
  align-items: baseline;
  gap: 48rpx;
  margin: 16rpx 0;
}
.demo-price-col {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  margin: 16rpx 0;
}
.demo-price-gold {
  color: var(--dd-primary);
}
</style>
