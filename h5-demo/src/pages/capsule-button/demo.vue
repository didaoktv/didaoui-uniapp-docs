<template>
  <dd-top-navbar title="胶囊按钮" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Variant — Default / Back-Only / Close-Only</text>
      <view class="demo-col">
        <view class="cap-row">
          <text class="cap-label">默认 default</text>
          <dd-capsule-button variant="default" @back="tip('返回')" @menu="tip('菜单')" />
        </view>
        <view class="cap-row">
          <text class="cap-label">仅返回 back-only</text>
          <dd-capsule-button variant="back-only" @back="tip('返回')" />
        </view>
        <view class="cap-row">
          <text class="cap-label">仅关闭 close-only</text>
          <dd-capsule-button variant="close-only" @menu="tip('关闭')" />
        </view>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">ShowBack / ShowMenu</text>
      <view class="demo-col">
        <view class="cap-row">
          <text class="cap-label">show-back=false</text>
          <dd-capsule-button variant="default" :show-back="false" @menu="tip('菜单')" />
        </view>
        <view class="cap-row">
          <text class="cap-label">show-menu=false</text>
          <dd-capsule-button variant="default" :show-menu="false" @back="tip('返回')" />
        </view>
        <view class="cap-row">
          <text class="cap-label">全部隐藏</text>
          <dd-capsule-button variant="default" :show-back="false" :show-menu="false" />
        </view>
      </view>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdCapsuleButton, DdToast } from '@didaoktv/didaoui-uniapp'

import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function tip(m: string) { showToast(m) }
</script>

<style scoped>
.demo-page { }
.cap-row {
  display: flex;
  align-items: center;
  gap: 24rpx;
}
.cap-label {
  color: #9E9E9E;
  font-size: 24rpx;
  width: 180rpx;
}
</style>