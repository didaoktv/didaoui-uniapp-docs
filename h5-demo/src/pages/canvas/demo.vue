<template>
  <dd-top-navbar title="画布" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础绘制（ready 后调用绘图方法）</text>
      <view class="canvas-wrap">
        <dd-canvas ref="canvasRef" :width="320" :height="160" bgColor="#0A0A0A" @ready="onReady" />
      </view>
      <view class="canvas-actions">
        <view class="cb-btn" @click="redraw">重新绘制</view>
        <view class="cb-btn" @click="exportCanvas">导出图片</view>
      </view>
      <text class="demo-note">方法：setFillStyle / setFontSize / fillRect / fillText / arc / draw 等</text>
      <image v-if="exportPath" :src="exportPath" class="canvas-result" mode="aspectFit" />
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸与单位 unit</text>
      <view class="canvas-wrap">
        <dd-canvas ref="canvasRef2" :width="240" :height="120" unit="px" bgColor="#ffffff" @ready="onReady2" />
      </view>
      <text class="demo-note">width/height 数字默认单位 px；unit 支持 'px' / 'rpx'</text>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const canvasRef = ref<any>(null)
const canvasRef2 = ref<any>(null)
const exportPath = ref('')

function onReady() {
  drawScene(canvasRef.value)
}

function onReady2() {
  const c = canvasRef2.value
  if (!c) return
  c.setFillStyle('#F5A623')
  c.fillRect(10, 10, 60, 60)
  c.setFillStyle('#0A0A0A')
  c.setFontSize(16)
  c.fillText('单元格式 240x120', 80, 40)
  c.draw()
}

function drawScene(c: any) {
  if (!c) return
  c.setFillStyle('#F5A623')
  c.fillRect(0, 0, 320, 160)
  c.setFillStyle('#0A0A0A')
  c.setFontSize(24)
  c.fillText('帝到KTV · 欢唱之夜', 24, 48)
  c.setFillStyle('#3A1C00')
  c.setFontSize(14)
  c.fillText('Canvas 绘图示例', 24, 80)
  c.beginPath()
  c.arc(260, 80, 36, 0, Math.PI * 2)
  c.setFillStyle('#1E3A8A')
  c.fill()
  c.draw()
}

function redraw() {
  drawScene(canvasRef.value)
  exportPath.value = ''
}

async function exportCanvas() {
  const c = canvasRef.value
  if (!c) return
  try {
    exportPath.value = await c.exportImage()
  } catch (e) {
    uni.showToast({ title: '导出失败', icon: 'none' })
  }
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.canvas-wrap {
  background: #fff;
  border-radius: 12rpx;
  padding: 16rpx;
  margin-bottom: 16rpx;
}

.canvas-actions {
  display: flex;
  gap: 16rpx;
  margin-bottom: 16rpx;
}

.cb-btn {
  flex: 1;
  padding: 16rpx 0;
  background: var(--dd-accent);
  color: #fff;
  border-radius: 12rpx;
  font-size: 26rpx;
  text-align: center;
}

.canvas-result {
  width: 320px;
  height: 160px;
  border-radius: 12rpx;
  margin-top: 16rpx;
}
</style>