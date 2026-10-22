<template>
  <view class="demo-page">
    <view class="home-header">
      <text class="home-title">DidaoUI-uniapp</text>
      <text class="home-subtitle">帝到KTV UniApp 组件库 · 97 组件 · 5 端编译</text>
      <view class="home-author" @click="openAuthor">
        <text class="home-author-label" @click="openAuthor">作者</text>
        <text class="home-author-name">i@duminghong.com</text>
      </view>
    </view>

    <!-- 分区导航：数据源 home-registry.ts（与文档站侧边栏共享，1:1 派生） -->
    <view v-for="s in homeSections" :key="s.key" class="home-section">
      <text class="home-section-title">{{ s.title }}</text>
      <view class="home-grid">
        <view v-for="c in s.comps" :key="c.path" class="home-item" @click="go(c.path)">
          <text class="home-item-name">{{ c.name }}</text>
          <text class="home-item-en">{{ c.en }}</text>
          <text v-if="c.ver" class="home-item-ver">{{ c.ver }}</text>
        </view>
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { homeSections } from '../../home-registry'

function openAuthor() {
  // #ifdef H5
  window.open('https://duminghong.com/', '_blank')
  // #endif
  // #ifndef H5
  uni.setClipboardData({
    data: 'i@duminghong.com',
    success: () => uni.showToast({ title: '邮箱已复制', icon: 'none' }),
  })
  // #endif
}

function go(path: string) {
  uni.navigateTo({ url: '/' + path })
}
</script>

<style lang="scss" scoped>
.home-header {
  padding: 48rpx 32rpx 32rpx;
  text-align: left;
}

.home-title {
  display: block;
  font-size: 48rpx;
  font-weight: 800;
  color: var(--dd-primary, #f5a623);
  letter-spacing: 2rpx;
  margin-bottom: 12rpx;
}

.home-subtitle {
  display: block;
  font-size: 24rpx;
  color: var(--dd-muted, var(--dd-muted));
  line-height: 1.5;
}

.home-section {
  margin-bottom: 32rpx;
}

.home-section-title {
  display: block;
  font-size: 28rpx;
  font-weight: 700;
  color: var(--dd-fg, #f5f5f5);
  padding: 16rpx;
  letter-spacing: 1rpx;
}

.home-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20rpx;
}

.home-item {
  position: relative;
  background: var(--dd-bg-card, var(--dd-bg-card));
  border-radius: 12rpx;
  padding: 24rpx 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rpx;
  transition: background 0.15s;
}

.home-item:active {
  background: var(--dd-surface-hover, var(--dd-surface-container-high));
}

.home-item-name-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8rpx;
}

.home-item-name {
  font-size: 24rpx;
  color: var(--dd-fg, #f5f5f5);
  font-weight: 500;
}

.home-item-ver {
  position: absolute;
  top: 0rpx;
  right: 0rpx;
  font-size: 18rpx;
  color: var(--dd-primary, #f5a623);
  background: rgba(245, 166, 35, 0.12);
  border-radius: 6rpx;
  padding: 2rpx 8rpx;
}

.home-item-en {
  font-size: 20rpx;
  color: var(--dd-muted, var(--dd-muted));
}

.home-author {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12rpx;
  margin-top: 20rpx;
  padding: 12rpx 20rpx;
  background: var(--dd-bg-card, var(--dd-bg-card));
  border-radius: 32rpx;
  align-self: flex-start;
}

.home-author-label {
  font-size: 22rpx;
  color: var(--dd-text-tertiary, #616161);
}

.home-author-name {
  font-size: 22rpx;
  color: var(--dd-primary, #f5a623);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4rpx;
}

.home-footer {
  padding: 48rpx 32rpx 32rpx;
  text-align: center;
}

.home-footer-text {
  font-size: 22rpx;
  color: var(--dd-text-tertiary, #424242);
}
</style>