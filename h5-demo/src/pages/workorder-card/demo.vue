<template>
  <dd-top-navbar title="工单卡片" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">类型 Type（service/repair/feedback/decoration/todo）</text>
      <view class="demo-col">
        <dd-workorder-card title="客人按铃呼叫" type="service" status="待处理" time="18:52" />
        <dd-workorder-card title="VIP01 音响检修" type="repair" status="维修中" time="15:30" />
        <dd-workorder-card title="客户投诉反馈" type="feedback" status="已受理" time="14:00" />
        <dd-workorder-card title="A03 房间生日布置" type="decoration" status="进行中" time="19:00" />
        <dd-workorder-card title="交接班待办" type="todo" status="待办" />
      </view>
      <text class="demo-note">五种 type 标签配色 · status 覆盖时优先显示 status</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">清单 + 进度联动 Checklist / Progress</text>
      <dd-workorder-card
        title="A03 房间生日布置"
        type="decoration"
        status="进行中"
        :checklist="steps"
        :progress="progress"
        time="2026-08-22 19:00"
        @check="onCheck"
      >
        <template #actions>
          <dd-button type="primary" size="sm" @click="onConfirm">完成确认</dd-button>
        </template>
      </dd-workorder-card>
      <text class="demo-note">勾选清单实时更新进度：{{ progress }}% · check: {{ checkNote }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">进度边界 0% / 50% / 100%</text>
      <view class="demo-col">
        <dd-workorder-card title="开工前 · 0%" type="repair" status="待派单" :progress="0" />
        <dd-workorder-card title="检修中 · 50%" type="repair" status="维修中" :progress="50" />
        <dd-workorder-card title="已完成 · 100%" type="repair" status="已完成" :progress="100" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">最简形态 Minimal（无 status 默认 type 标签 · 无 checklist/progress/time）</text>
      <view class="demo-col">
        <dd-workorder-card title="默认 todo 标签" />
        <dd-workorder-card title="最简 · 仅标题" type="service" />
        <dd-workorder-card title="全部清单已勾选" type="todo" :checklist="allDone" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">事件 Events（click / check）</text>
      <dd-workorder-card title="A03 房间生日布置" type="decoration" status="已完成" @click="onCardClick" />
      <text class="demo-note">click: {{ clickNote }}</text>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdWorkorderCard, DdButton, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

interface Step { id: string; text: string; done: boolean }
const steps = ref<Step[]>([
  { id: '1', text: '放置气球灯牌', done: true },
  { id: '2', text: '铺设茶几台布', done: true },
  { id: '3', text: '点亮星空投影', done: false },
])
const allDone = ref<Step[]>([
  { id: '1', text: '清理台面', done: true },
  { id: '2', text: '补充酒水', done: true },
])
const progress = ref(67)
const clickNote = ref('未点击')
const checkNote = ref('-')

function onCheck({ item, done }: { item: Step; done: boolean }) {
  item.done = done
  const n = steps.value.filter((s) => s.done).length
  progress.value = Math.round((n / steps.value.length) * 100)
  checkNote.value = `${item.text} → ${done ? '完成' : '未完成'}`
}
function onConfirm() {
  showToast('提交完成确认（演示）')
}
function onCardClick() {
  clickNote.value = `点击了工单（${Date.now()}）`
}
</script>

<style scoped>
.demo-page { }
</style>
