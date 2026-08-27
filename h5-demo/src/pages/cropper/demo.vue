<template>
  <dd-top-navbar title="图片裁剪" />
  <view class="demo-page">

    <!-- 基础用法 -->
    <view class="demo-section">
      <text class="demo-title">基础用法（默认插槽触发选图）</text>
      <dd-cropper
        :areaWidth="'300rpx'"
        :areaHeight="'300rpx'"
        :exportWidth="'260rpx'"
        :exportHeight="'260rpx'"
        @confirm="onConfirm"
      >
        <view class="crop-btn">选择图片并裁剪</view>
      </dd-cropper>
      <text class="demo-note">点击插槽区域调起相册/相机 → 拖拽缩放调整裁剪框 → 确认导出</text>
    </view>

    <!-- 裁剪结果 -->
    <view class="demo-section">
      <text class="demo-title">裁剪结果（confirm 回调）</text>
      <image v-if="cropPath" :src="cropPath" class="crop-result" mode="aspectFit" />
      <text v-else class="demo-note">尚未裁剪，confirm 回调返回 { avatar, path, index, data }</text>
      <text v-if="cropPath" class="demo-note">导出路径：{{ cropPath }}</text>
    </view>

    <!-- 自定义裁剪区域 -->
    <view class="demo-section">
      <text class="demo-title">自定义裁剪区域 areaWidth / areaHeight</text>
      <dd-cropper
        areaWidth="400rpx"
        areaHeight="240rpx"
        exportWidth="400rpx"
        exportHeight="240rpx"
        @confirm="onConfirm"
      >
        <view class="crop-btn crop-btn--gold">横版 400x240 裁剪</view>
      </dd-cropper>
      <text class="demo-note">横版裁剪框适合制作门店横幅、房间展示图</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cropPath = ref('')

function onConfirm(res: { avatar: unknown; path: string; index: unknown; data: unknown }) {
  cropPath.value = res.path
  uni.showToast({ title: '裁剪成功', icon: 'success' })
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.crop-btn {
  padding: 20rpx;
  background: var(--dd-accent);
  color: #fff;
  border-radius: 12rpx;
  font-size: 28rpx;
  text-align: center;
}

.crop-btn--gold {
  background: #F5A623;
}

.crop-result {
  width: 260rpx;
  height: 260rpx;
  border-radius: 12rpx;
  background: #fff;
}
</style>
