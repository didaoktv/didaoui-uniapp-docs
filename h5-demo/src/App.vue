<script setup lang="ts">
import { onLaunch, onShow } from '@dcloudio/uni-app'

onLaunch(() => {
  // eslint-disable-next-line no-console
  console.log('[DidaoUI-uniapp] demo launched')
})

onShow(() => {
  // page show hook (no-op)
})
</script>

<style lang="scss">
/* ============================================================
   全局暗色 demo 样式 — 设计 token 对齐 @didaoktv/didaoui-uniapp
   背景 #0A0A0A · 帝王金 #F5A623 · 皇家蓝 #2D4BA0
   ============================================================ */
page {
  background: #0a0a0a;
  color: #f5f5f5;
  font-family: 'Noto Sans SC', -apple-system, sans-serif;
  font-size: 28rpx;
  min-height: 100vh;
}

/* demo 容器：限制手机宽度 375px，居中 */
.demo-page {
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 24rpx 24rpx 24rpx;
  box-sizing: border-box;
  background: #0a0a0a;
}

.demo-section {
  background: #171717;
  border-radius: 16rpx;
  padding: 28rpx 24rpx;
  margin-bottom: 24rpx;
}

.demo-title {
  display: block;
  font-size: 26rpx;
  font-weight: 700;
  color: #ffc107;
  margin-bottom: 20rpx;
  letter-spacing: 1rpx;
}

.demo-subtitle {
  display: block;
  font-size: 22rpx;
  color: #9e9e9e;
  margin-bottom: 16rpx;
  margin-top: 20rpx;
}

.demo-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20rpx;
  align-items: center;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.demo-label {
  display: inline-block;
  font-size: 22rpx;
  color: #9e9e9e;
  margin-right: 16rpx;
  margin-bottom: 16rpx;
}

.demo-note {
  display: block;
  font-size: 22rpx;
  color: #757575;
  margin-top: 16rpx;
  line-height: 1.5;
}

.demo-spacer {
  height: 1200rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
  font-size: 24rpx;
}

.demo-fill {
  width: 100%;
}
</style>
