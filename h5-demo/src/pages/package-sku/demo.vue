<template>
  <dd-top-navbar title="套餐可选组" />
  <view class="demo-page">

    <!-- 基础用法：N 选 M + 加价 -->
    <view class="demo-section">
      <text class="demo-title">基础用法（3 选 1 + 选 1~2 项，加价标注）</text>
      <dd-package-sku
        ref="skuRef"
        :groups="groups"
        confirm-text="加入购物车"
        @confirm="onConfirm"
      >
        <template #trigger>
          <view class="pkg-btn">选择欢唱套餐内容</view>
        </template>
      </dd-package-sku>
      <text class="demo-note">{{ confirmNote || '未选满必选组时确认按钮禁用' }}</text>
    </view>

    <!-- 固定组只读 -->
    <view class="demo-section">
      <text class="demo-title">固定组只读（FIXED 不可点）</text>
      <dd-package-sku
        :groups="groups2"
        title="套餐内容确认"
        @confirm="onConfirm2"
      >
        <template #trigger>
          <view class="pkg-btn pkg-btn--gold">含固定包含的套餐</view>
        </template>
      </dd-package-sku>
      <text class="demo-note">「固定包含」仅展示；「饮料任选」最多选 3 项</text>
    </view>

    <!-- 售罄置灰 -->
    <view class="demo-section">
      <text class="demo-title">售罄置灰（qty=0 / enabled=false）</text>
      <dd-package-sku
        :groups="groups3"
        @confirm="onConfirm3"
      >
        <template #trigger>
          <view class="pkg-btn pkg-btn--ghost">含售罄项的套餐</view>
        </template>
      </dd-package-sku>
      <text class="demo-note">售罄项置灰显示「已售罄」角标，不隐藏</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* ==================== 基础：时段 3 选 1 + 小食选 1~2 ==================== */
const skuRef = ref()

const groups = [
  {
    id: 'g1',
    name: '欢唱时段',
    minSel: 1,
    maxSel: 1,
    items: [
      { id: 's1', name: '中包 3 小时' },
      { id: 's2', name: '大包 2 小时', priceFen: 3000 },
      { id: 's3', name: '迷你包 4 小时' },
    ],
  },
  {
    id: 'g2',
    name: '小食加选',
    minSel: 1,
    maxSel: 2,
    items: [
      { id: 's4', name: '果盘' },
      { id: 's5', name: '爆米花', priceFen: 1000 },
      { id: 's6', name: '卤味拼盘' },
    ],
  },
]

const confirmNote = ref('')

function onConfirm(val: { options: { groupId: string; skuId: string }[]; surchargeFen: number; selectedText: string }) {
  confirmNote.value = `已选「${val.selectedText}」，加价合计 ￥${val.surchargeFen / 100}`
  skuRef.value.close()
}

/* ==================== 固定组 + 可选组混排 ==================== */
const groups2 = [
  {
    id: 'f1',
    name: '固定包含',
    groupType: 'FIXED' as const,
    items: [
      { id: 's7', name: '啤酒 12 瓶' },
      { id: 's8', name: '果盘 1 份' },
    ],
  },
  {
    id: 'g3',
    name: '饮料任选',
    maxSel: 3,
    items: [
      { id: 's9', name: '可乐' },
      { id: 's10', name: '雪碧' },
      { id: 's11', name: '苏打水' },
      { id: 's12', name: '鲜榨橙汁', priceFen: 1500 },
    ],
  },
]

function onConfirm2(val: { options: unknown[]; surchargeFen: number }) {
  uni.showToast({ title: `已选 ${val.options.length} 项，加价 ${val.surchargeFen / 100} 元`, icon: 'none' })
}

/* ==================== 售罄置灰 ==================== */
const groups3 = [
  {
    id: 'g4',
    name: '小吃',
    minSel: 1,
    maxSel: 1,
    items: [
      { id: 's13', name: '薯条' },
      { id: 's14', name: '鸡米花', qty: 0 },
      { id: 's15', name: '洋葱圈', enabled: false },
    ],
  },
]

function onConfirm3(val: { selectedText: string }) {
  uni.showToast({ title: `已选：${val.selectedText}`, icon: 'none' })
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.pkg-btn {
  padding: 20rpx;
  background: var(--dd-accent);
  color: #fff;
  border-radius: 12rpx;
  font-size: 28rpx;
  text-align: center;
}

.pkg-btn--gold {
  background: #F5A623;
}

.pkg-btn--ghost {
  background: transparent;
  border: 2rpx solid #F5A623;
  color: #F5A623;
}
</style>
