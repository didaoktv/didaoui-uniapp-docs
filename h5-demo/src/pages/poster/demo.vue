<template>
  <dd-top-navbar title="海报" />
  <view class="demo-page">

    <!-- 海报配置说明 -->
    <view class="demo-section">
      <text class="demo-title">json 配置（text / image / qrcode / view）</text>
      <text class="demo-note">views 数组按顺序绘制：view=色块容器、text=文本、image=图片、qrcode=二维码，css 支持 rpx 定位</text>
      <view class="pt-btn" @click="exportPoster">生成海报并导出</view>
    </view>

    <!-- 海报组件（隐藏渲染） -->
    <dd-poster ref="posterRef" :json="posterJson" />

    <!-- 导出结果 -->
    <view class="demo-section">
      <text class="demo-title">导出结果（exportImage）</text>
      <image v-if="posterPath" :src="posterPath" class="pt-result" mode="aspectFit" />
      <text v-else class="demo-note">点击上方按钮调用 exportImage()，返回 { width, height, path, blob }</text>
      <text v-if="posterPath" class="demo-note">导出尺寸：{{ posterSize }}px</text>
      <text v-if="errorMsg" class="demo-note">导出失败：{{ errorMsg }}</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const posterRef = ref<any>(null)
const posterPath = ref('')
const posterSize = ref('')
const errorMsg = ref('')

/* 海报 json：渐变底 + 标题 + 门店图 + 优惠信息 + 二维码 */
const posterJson = {
  css: {
    width: '600rpx',
    height: '900rpx',
    background: 'linear-gradient(180deg, #1A1A2E 0%, #2D4BA0 100%)',
  },
  views: [
    {
      type: 'view',
      css: {
        left: '40rpx',
        top: '40rpx',
        width: '520rpx',
        height: '120rpx',
        background: 'rgba(245, 166, 35, 0.18)',
        radius: '20rpx',
      },
    },
    {
      type: 'text',
      text: '帝到KTV · 欢唱之夜',
      css: {
        left: '60rpx',
        top: '70rpx',
        width: '480rpx',
        fontSize: '44rpx',
        fontWeight: 'bold',
        color: '#F5A623',
      },
    },
    {
      type: 'image',
      src: 'https://picsum.photos/seed/dd-poster/520/320',
      css: {
        left: '40rpx',
        top: '200rpx',
        width: '520rpx',
        height: '320rpx',
        radius: '16rpx',
      },
    },
    {
      type: 'text',
      text: '黄金场 4 小时套餐',
      css: {
        left: '40rpx',
        top: '570rpx',
        fontSize: '34rpx',
        color: '#FFFFFF',
      },
    },
    {
      type: 'text',
      text: '仅 ￥198 · 含果盘与软饮畅饮',
      css: {
        left: '40rpx',
        top: '630rpx',
        fontSize: '28rpx',
        color: '#F5A623',
      },
    },
    {
      type: 'text',
      text: '有效期至 2026-09-30',
      css: {
        left: '40rpx',
        top: '680rpx',
        fontSize: '24rpx',
        color: '#BBBBBB',
      },
    },
    {
      type: 'qrcode',
      text: 'https://didaoktv.com/poster-demo',
      css: {
        left: '210rpx',
        top: '740rpx',
        width: '180rpx',
        height: '180rpx',
      },
    },
  ],
}

async function exportPoster() {
  errorMsg.value = ''
  try {
    const res = await posterRef.value?.exportImage()
    if (res?.path) {
      posterPath.value = res.path
      posterSize.value = `${res.width} x ${res.height}`
    } else {
      errorMsg.value = '未返回图片路径'
    }
  } catch (e) {
    errorMsg.value = e instanceof Error ? e.message : String(e)
  }
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.pt-btn {
  padding: 20rpx;
  background: #F5A623;
  color: #0A0A0A;
  border-radius: 12rpx;
  font-size: 28rpx;
  text-align: center;
  margin-top: 16rpx;
}

.pt-result {
  width: 300px;
  height: 450px;
  border-radius: 12rpx;
}
</style>
