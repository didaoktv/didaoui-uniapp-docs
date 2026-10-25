<template>
  <dd-top-navbar title="订单列表" />
  <view class="demo-page">

    <!-- 场景切换 -->
    <view class="demo-section">
      <text class="demo-title">场景切换</text>
      <view class="demo-row">
        <dd-button size="sm" :type="checkable ? 'primary' : 'secondary'" @click="checkable = !checkable">
          {{ checkable ? '多选开' : '多选关' }}
        </dd-button>
        <dd-button size="sm" type="secondary" @click="selected = orders.map((o) => o.id)">全选</dd-button>
        <dd-button size="sm" type="secondary" @click="selected = []">清空选择</dd-button>
      </view>
      <text class="demo-note">点卡片切换选中，选中态主色描边</text>
    </view>

    <!-- 订单列表 -->
    <dd-order-list
      v-model:selected="selected"
      :orders="orders"
      :checkable="checkable"
      @item-click="lastClick = $event.title"
    />

    <!-- 事件回显 -->
    <view class="demo-section">
      <text class="demo-title">事件回显</text>
      <text class="demo-log">selected：{{ selected.join('、') || '—' }}</text>
      <text class="demo-log">item-click：{{ lastClick || '—' }}</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DdOrderItem } from '@didaoktv/didaoui-uniapp'

const checkable = ref(true)
const lastClick = ref('')

/* 模拟订单（金额单位为分） */
const orders: DdOrderItem[] = [
  {
    id: '1001',
    title: '点单 #1001',
    statusText: '待收款',
    timeText: '23:24',
    totalFen: 1580,
    lines: [
      { id: 1, name: '科罗娜啤酒', qty: 2, priceFen: 3960, thumb: 'https://dummyimage.com/200x200/f5a623/0a0a0a&text=啤酒' },
      { id: 2, name: '果盘拼盘', qty: 1, priceFen: 5800, thumb: 'https://dummyimage.com/200x200/4caf50/ffffff&text=果盘' },
      { id: 3, name: '香辣鸡腿堡', qty: 1, priceFen: 2300, thumb: 'https://dummyimage.com/200x200/e53935/ffffff&text=鸡腿堡' },
      { id: 4, name: '黄金薯条', qty: 2, priceFen: 1600, thumb: 'https://dummyimage.com/200x200/ff9800/ffffff&text=薯条' },
      { id: 5, name: '青岛啤酒经典', qty: 3, priceFen: 2400, thumb: 'https://dummyimage.com/200x200/ffc107/0a0a0a&text=啤酒' },
    ],
    remark: '账单 #B20261024001 · 少冰',
  },
  {
    id: '1002',
    title: '#1002',
    statusText: '待收款',
    timeText: '23:58',
    totalFen: 3600,
    lines: [{ id: 3, name: '美味时刻独享3件套', qty: 1, priceFen: 3600 }],
  },
]

const selected = ref<(string | number)[]>(orders.map((o) => o.id))
</script>

<style scoped>
.demo-page {
  padding: 24rpx 0 120rpx;
}
.demo-section {
  margin: 24rpx 32rpx;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
  margin: 16rpx 0;
}
.demo-title {
  display: block;
  font-size: 28rpx;
  font-weight: 600;
  color: var(--dd-text-primary);
}
.demo-note {
  display: block;
  margin-top: 8rpx;
  font-size: 24rpx;
  color: var(--dd-text-secondary);
}
.demo-log {
  display: block;
  font-size: 24rpx;
  color: var(--dd-text-secondary);
}
</style>
