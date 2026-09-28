<template>
  <dd-top-navbar title="传送门" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础传送</text>
      <view class="portal-btn" @click="show = !show">切换传送内容</view>
      <text class="demo-note">dd-portal 无 Props，纯 slot 传送适配器：H5 → Teleport 到 body，MP → root-portal，其余平台原位渲染</text>
      <dd-portal>
        <view v-if="show" class="portal-badge">Portal 内容（已传送到页面根节点）</view>
      </dd-portal>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.portal-btn {
  padding: 16rpx 32rpx;
  background: var(--dd-accent);
  color: #fff;
  border-radius: 12rpx;
  font-size: 26rpx;
  text-align: center;
  margin-bottom: 16rpx;
}

.portal-badge {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20rpx 32rpx;
  background: #F5A623;
  color: #0A0A0A;
  border-radius: 12rpx;
  font-size: 28rpx;
  z-index: 9999;
}
</style>