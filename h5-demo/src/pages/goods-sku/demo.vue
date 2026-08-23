<template>
  <dd-top-navbar title="商品SKU" />
  <view class="demo-page">

    <!-- 基础用法 -->
    <view class="demo-section">
      <text class="demo-title">基础用法（trigger 插槽 + confirm 回调）</text>
      <dd-goods-sku
        :goods-info="goods"
        :sku-tree="skuTree"
        :sku-list="skuList"
        confirm-text="立即预订"
        @confirm="onConfirm"
      >
        <template #trigger>
          <view class="sku-btn">选择包房套餐规格</view>
        </template>
      </dd-goods-sku>
      <text class="demo-note">{{ confirmNote || '选择规格并确认后展示结果' }}</text>
    </view>

    <!-- 无效组合置灰 -->
    <view class="demo-section">
      <text class="demo-title">无效组合自动置灰</text>
      <dd-goods-sku
        :goods-info="goods2"
        :sku-tree="skuTree2"
        :sku-list="skuList2"
        @confirm="onConfirm2"
      >
        <template #trigger>
          <view class="sku-btn sku-btn--gold">选酒水套餐（大瓶 x 冰镇 售罄）</view>
        </template>
      </dd-goods-sku>
      <text class="demo-note">大瓶 + 冰镇 组合无库存时自动置灰不可选</text>
    </view>

    <!-- 数量上限 maxBuy -->
    <view class="demo-section">
      <text class="demo-title">限购 maxBuy</text>
      <dd-goods-sku
        :goods-info="goods3"
        :sku-tree="skuTree"
        :sku-list="skuList"
        :max-buy="3"
        @confirm="onConfirm"
      >
        <template #trigger>
          <view class="sku-btn sku-btn--ghost">限购 3 份的套餐</view>
        </template>
      </dd-goods-sku>
      <text class="demo-note">步进器最大值受 maxBuy 与库存共同约束</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* ==================== 基础：包房套餐 ==================== */
const goods = {
  id: 1,
  title: '黄金场欢唱套餐',
  image: 'https://picsum.photos/seed/dd-sku/200/200',
  price: 198,
  stock: 26,
}

/** 规格维度：name 为 skuList 的匹配键 */
const skuTree = [
  {
    name: 'room',
    label: '包房规格',
    children: [
      { id: 'mid', name: '中包 4 小时' },
      { id: 'big', name: '大包 4 小时' },
    ],
  },
  {
    name: 'drink',
    label: '酒水搭配',
    children: [
      { id: 'soft', name: '软饮畅饮' },
      { id: 'beer', name: '精酿一打' },
    ],
  },
]

/** SKU 组合明细：键与 skuTree.name 对应 */
const skuList = [
  { room: 'mid', drink: 'soft', price: 198, stock: 12 },
  { room: 'mid', drink: 'beer', price: 258, stock: 8 },
  { room: 'big', drink: 'soft', price: 288, stock: 6 },
  { room: 'big', drink: 'beer', price: 368, stock: 26 },
]

const confirmNote = ref('')

function onConfirm(val: { sku: Record<string, any> | null; num: number; selectedText: string }) {
  confirmNote.value = `已选「${val.selectedText}」，单价 ￥${val.sku?.price}，数量 ${val.num} 份`
}

/* ==================== 置灰：酒水套餐（缺一档组合） ==================== */
const goods2 = {
  id: 2,
  title: '欢唱酒水套餐',
  image: 'https://picsum.photos/seed/dd-sku2/200/200',
  price: 128,
  stock: 30,
}

const skuTree2 = [
  {
    name: 'size',
    label: '容量',
    children: [
      { id: 'small', name: '小瓶' },
      { id: 'large', name: '大瓶' },
    ],
  },
  {
    name: 'temp',
    label: '温度',
    children: [
      { id: 'ice', name: '冰镇' },
      { id: 'normal', name: '常温' },
    ],
  },
]

/* 大瓶 + 冰镇 无组合 → 置灰 */
const skuList2 = [
  { size: 'small', temp: 'ice', price: 128, stock: 18 },
  { size: 'small', temp: 'normal', price: 118, stock: 10 },
  { size: 'large', temp: 'normal', price: 168, stock: 5 },
]

function onConfirm2(val: { sku: Record<string, any> | null; num: number; selectedText: string }) {
  uni.showToast({ title: `已选：${val.selectedText} x ${val.num}`, icon: 'none' })
}

/* ==================== 限购 ==================== */
const goods3 = {
  id: 3,
  title: '限时秒杀套餐',
  image: 'https://picsum.photos/seed/dd-sku3/200/200',
  price: 68,
  stock: 99,
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.sku-btn {
  padding: 20rpx;
  background: #2D4BA0;
  color: #fff;
  border-radius: 12rpx;
  font-size: 28rpx;
  text-align: center;
}

.sku-btn--gold {
  background: #F5A623;
}

.sku-btn--ghost {
  background: transparent;
  border: 2rpx solid #F5A623;
  color: #F5A623;
}
</style>
