<template>
  <dd-top-navbar title="账单明细" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">全部状态 Status（unpaid/paid/refunding/refunded/cancelled）</text>
      <view class="demo-col">
        <dd-bill-detail header="金卡包厢 · ¥288/时" :items="items3" subtotal="¥436.00" :delivery-fee="fee" :total="totals[0]" status="unpaid" />
        <dd-bill-detail header="豪华大包 · 2小时" :items="items2" subtotal="¥524.00" :delivery-fee="fee" :total="totals[1]" status="paid" />
        <dd-bill-detail :items="items1" :total="totals[2]" status="refunding" />
        <dd-bill-detail :items="items1" :total="totals[2]" status="refunded" />
        <dd-bill-detail :items="items2" :total="totals[3]" status="cancelled" />
      </view>
      <text class="demo-note">五种状态标签 + 小计/服务费/合计 + 无 header 简版</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">点击行事件 + actions 插槽</text>
      <dd-bill-detail
        header="金卡包厢 · ¥288/时"
        :items="items3"
        subtotal="¥436.00"
        :delivery-fee="fee"
        :total="totals[0]"
        status="unpaid"
        @click="onClickItem"
      >
        <template #actions>
          <dd-button type="secondary" size="sm" @click="onInvoice">开票</dd-button>
          <dd-button type="primary" size="sm" @click="onCollect">去支付</dd-button>
        </template>
      </dd-bill-detail>
      <text class="demo-note">点击商品行 → {{ clickNote }}</text>
    </view>
    <view class="demo-section">
      <text class="demo-title">插槽 header / footer / empty</text>
      <dd-bill-detail :items="items2" :total="totals[1]" status="paid">
        <template #header>
          <view style="display:flex;align-items:center;gap:12rpx">
            <text style="font-weight:600">header 插槽（自定义）</text>
            <text class="demo-note">支持任意节点</text>
          </view>
        </template>
        <template #footer>
          <text class="demo-note">footer 插槽：含配送费与发票说明……</text>
        </template>
      </dd-bill-detail>
      <view class="demo-col" style="margin-top:16rpx">
        <dd-bill-detail :items="[]">
          <template #empty>
            <text class="demo-note">empty 插槽：暂无消费记录（自定义文案）</text>
          </template>
        </dd-bill-detail>
        <dd-bill-detail :items="[]" />
      </view>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdBillDetail, DdButton, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

const items3 = [
  { name: '豪华大包（2小时）', price: '¥144', count: 2, amount: '¥288.00' },
  { name: '果盘', price: '¥88', count: 1, amount: '¥88.00' },
  { name: '雪碧×4', price: '¥15', count: 4, amount: '¥60.00' },
]
const items2 = [
  { name: '豪华大包（2小时）', price: '¥218', count: 2, amount: '¥436.00' },
  { name: '果盘', price: '¥88', count: 1, amount: '¥88.00' },
]
const items1 = [{ name: '果盘', price: '¥88', count: 1, amount: '¥88.00' }]
const fee = '¥6.00'
const totals = ['¥436.00', '¥530.00', '¥88.00', '¥288.00']
const clickNote = ref('未点击')

function onClickItem({ item, index }: { item: { name: string }; index: number }) {
  clickNote.value = `第 ${index + 1} 行：${item.name}`
}
function onCollect() {
  showToast('去支付（演示）')
}
function onInvoice() {
  showToast('发起开票（演示）')
}
</script>

<style scoped>
.demo-page { }
</style>
