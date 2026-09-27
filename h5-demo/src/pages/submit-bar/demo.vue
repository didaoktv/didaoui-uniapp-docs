<template>
  <dd-top-navbar title="提交订单栏" />
  <view class="demo-page">

    <!-- 场景切换 -->
    <view class="demo-section">
      <text class="demo-title">场景切换</text>
      <view class="demo-row">
        <dd-button size="sm" :type="scene === 'basic' ? 'primary' : 'secondary'" @click="scene = 'basic'">基础</dd-button>
        <dd-button size="sm" :type="scene === 'fmt' ? 'primary' : 'secondary'" @click="scene = 'fmt'">格式/状态</dd-button>
        <dd-button size="sm" :type="scene === 'tip' ? 'primary' : 'secondary'" @click="scene = 'tip'">提示/品牌色</dd-button>
      </view>
      <text class="demo-note">{{ sceneNote }}</text>
    </view>

    <!-- 状态控制 -->
    <view class="demo-section">
      <text class="demo-title">按钮状态</text>
      <view class="demo-row">
        <dd-button size="sm" @click="disabled = !disabled">切换禁用：{{ disabled ? '开' : '关' }}</dd-button>
        <dd-button size="sm" type="secondary" @click="loading = !loading">切换加载：{{ loading ? '开' : '关' }}</dd-button>
      </view>
      <text class="demo-note">禁用或加载中点击不触发 submit</text>
    </view>

    <!-- 事件回显 -->
    <view class="demo-section">
      <text class="demo-title">submit 事件</text>
      <text class="demo-log">最近触发：{{ lastSubmit }}</text>
    </view>

    <demo-footer />

    <!-- 常驻底部（placeholder 占位防遮挡） -->
    <dd-submit-bar
      :price="price"
      :label="label"
      :decimal-length="decimalLength"
      :suffix-label="suffixLabel"
      :tip="tip"
      :tip-icon="tipIcon"
      :button-text="buttonText"
      :button-color="buttonColor"
      :loading="loading"
      :disabled="disabled"
      placeholder
      @submit="onSubmit"
    />
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const scene = ref<'basic' | 'fmt' | 'tip'>('basic')
const disabled = ref(false)
const loading = ref(false)
const lastSubmit = ref('—')

/* 场景参数：price 单位为分 */
const price = computed(() => (scene.value === 'basic' ? 3050 : scene.value === 'fmt' ? 12500 : 19800))
const label = computed(() => (scene.value === 'fmt' ? '应付：' : '合计：'))
const decimalLength = computed(() => (scene.value === 'fmt' ? 0 : 2))
const suffixLabel = computed(() => (scene.value === 'fmt' ? '含服务费' : ''))
const tip = computed(() => (scene.value === 'tip' ? '订单包含低消商品，开具发票请联系门店前台' : ''))
const tipIcon = computed(() => (scene.value === 'tip' ? 'info-o' : ''))
const buttonText = computed(() => (scene.value === 'fmt' ? '去结算' : '提交订单'))
const buttonColor = computed(() => (scene.value === 'tip' ? 'var(--dd-primary)' : ''))

const sceneNote = computed(() => {
  if (scene.value === 'basic') return '基础：3050 分 → ¥30.50，buttonType 默认 danger'
  if (scene.value === 'fmt') return '格式：decimalLength=0 隐藏小数，suffixLabel 附注费用口径'
  return '提示：tip/tipIcon 渲染提示条，button-color 覆盖为帝王金'
})

function onSubmit() {
  lastSubmit.value = new Date().toLocaleTimeString()
}
</script>

<style scoped>
.demo-page {
  padding: 24rpx 0 480rpx;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
  margin: 16rpx 0;
}
.demo-note {
  font-size: 24rpx;
  color: var(--dd-text-secondary);
}
.demo-log {
  font-size: 24rpx;
  color: var(--dd-text-secondary);
}
</style>
