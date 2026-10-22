<template>
  <dd-top-navbar title="购物车栏" />
  <view class="demo-page">

    <!-- 场景切换 -->
    <view class="demo-section">
      <text class="demo-title">场景切换</text>
      <view class="demo-row">
        <dd-button size="sm" :type="scene === 'basic' ? 'primary' : 'secondary'" @click="scene = 'basic'">基础</dd-button>
        <dd-button size="sm" :type="scene === 'tips' ? 'primary' : 'secondary'" @click="scene = 'tips'">凑单提示</dd-button>
        <dd-button size="sm" :type="scene === 'clear' ? 'primary' : 'secondary'" @click="scene = 'clear'">直接清空</dd-button>
      </view>
      <text class="demo-note">{{ sceneNote }}</text>
    </view>

    <!-- 模拟点单：加购 -->
    <view class="demo-section">
      <text class="demo-title">模拟点单（点「加购」添加）</text>
      <view v-for="g in goods" :key="g.id" class="demo-goods">
        <view class="demo-goods__info">
          <text class="demo-goods__name">{{ g.name }}</text>
          <text class="demo-goods__price">¥{{ (g.price / 100).toFixed(2) }}</text>
        </view>
        <dd-button size="sm" type="primary" @click="addGoods(g)">加购</dd-button>
      </view>
      <text class="demo-note">角标数量变化时会弹跳；减到 1 再减即移除该项</text>
    </view>

    <!-- 事件回显 -->
    <view class="demo-section">
      <text class="demo-title">事件回显</text>
      <text class="demo-log">change：{{ lastChange }}</text>
      <text class="demo-log">submit：{{ lastSubmit }}</text>
      <text class="demo-log">clear：{{ lastClear }}</text>
    </view>

    <demo-footer />

    <!-- 常驻底部（placeholder 占位防遮挡） -->
    <dd-cart-bar
      v-model="showCart"
      :items="items"
      :placeholder="true"
      :suffix-label="suffixLabel"
      :tips="tips"
      :clear-confirm="clearConfirm"
      button-text="去结算"
      @change="onChange"
      @submit="onSubmit"
      @clear="lastClear = new Date().toLocaleTimeString()"
      @item-click="onItemClick"
    />
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { DdCartItem } from '@didaoktv/didaoui-uniapp'

const scene = ref<'basic' | 'tips' | 'clear'>('basic')
const showCart = ref(false)
const lastChange = ref('—')
const lastSubmit = ref('—')
const lastClear = ref('—')

/* 场景参数 */
const suffixLabel = computed(() => (scene.value === 'tips' ? '共减¥19' : ''))
const tips = computed(() => (scene.value === 'tips' ? '温馨提示，请适量点餐' : ''))
const clearConfirm = computed(() => scene.value !== 'clear')

const sceneNote = computed(() => {
  if (scene.value === 'basic') return '基础：点圆钮弹出已选商品，清空需二次确认'
  if (scene.value === 'tips') return '凑单：suffixLabel 附注优惠、tips 渲染提示条'
  return '直接清空：clearConfirm=false，点清空立即回传空数组并收起弹层'
})

/* 模拟商品（price 单位为分） */
const goods = [
  { id: 1, name: '科罗娜啤酒', price: 990 },
  { id: 2, name: '果盘拼盘', price: 5800 },
  { id: 3, name: '美味时刻独享3件套', price: 3600 },
]

const items = ref<DdCartItem[]>([])

function addGoods(g: { id: number; name: string; price: number }) {
  const found = items.value.find((it) => it.id === g.id)
  items.value = found
    ? items.value.map((it) => (it.id === g.id ? { ...it, count: it.count + 1 } : it))
    : [...items.value, { id: g.id, name: g.name, price: g.price, count: 1 }]
  lastChange.value = `加购 ${g.name} → 共 ${items.value.reduce((s, it) => s + it.count, 0)} 件`
}

function onChange(next: DdCartItem[]) {
  items.value = next
  lastChange.value = `当前 ${next.length} 项 / ${next.reduce((s, it) => s + it.count, 0)} 件`
}

function onItemClick(item: DdCartItem) {
  lastChange.value = `item-click：${item.name}`
}

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
.demo-goods {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16rpx 0;
}
.demo-goods__info {
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}
.demo-goods__name {
  font-size: 26rpx;
  color: var(--dd-text-primary);
}
.demo-goods__price {
  font-size: 24rpx;
  color: var(--dd-error);
}
</style>
