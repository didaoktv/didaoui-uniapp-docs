<template>
  <view class="demo-footer">
    <text class="demo-footer__copyright">© 2026 DidaoUI-uniapp</text>
    <text class="demo-footer__sep">·</text>
    <view class="demo-footer__author" @click="openAuthor">
      <text class="demo-footer__name">i@duminghong.com</text>
    </view>
  </view>
</template>

<script setup lang="ts">
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
</script>

<style lang="scss" scoped>
.demo-footer {
  padding: 48rpx 32rpx 64rpx;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12rpx;
}

.demo-footer__author {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.demo-footer__label {
  font-size: 22rpx;
  color: #616161;
}

.demo-footer__name {
  font-size: 22rpx;
  color: #f5a623;
  text-decoration: underline;
  text-underline-offset: 4rpx;
}

.demo-footer__sep {
  font-size: 22rpx;
  color: #424242;
}

.demo-footer__copyright {
  font-size: 22rpx;
  color: #424242;
}
</style>