<template>
  <dd-top-navbar title="日历选择" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">单选 Single（含选中/今日/禁用状态）</text>
      <dd-calendar
        v-model="single"
        :min-date="today"
        :max-date="maxDate"
        @change="onChange"
        @confirm="onConfirmSingle"
      />
      <text class="demo-note">选中: {{ single[0] || '未选' }} · 今日高亮 · minDate 前禁用 · maxDate 后禁用</text>
      <text class="demo-note">change: {{ changeNote }} · confirm: {{ singleNote }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">区间选择 Range（含区间高亮/周日禁选）</text>
      <dd-calendar
        v-model="rangeVal"
        range
        :disabled-date="isSunday"
        @change="onChange"
        @confirm="onConfirmRange"
      />
      <text class="demo-note">区间: {{ rangeVal.join(' ~ ') || '未选' }} · 中间日期 in-range 高亮 · 周日 disabled</text>
      <text class="demo-note">confirm: {{ rangeNote }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">时段选择 Time Slots（需先选日期）</text>
      <dd-calendar
        v-model="slotDate"
        :time-slots="['下午茶', '黄金场', '欢唱', '通宵']"
        @slot-click="onSlot"
        @confirm="onConfirmSlot"
      />
      <text class="demo-note">{{ slotNote }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">预填状态 Pre-filled（默认选中展示）</text>
      <dd-calendar
        v-model="preRange"
        range
        :min-date="minPre"
        :max-date="maxPre"
      />
      <text class="demo-note">默认选中 {{ preRange[0] }} ~ {{ preRange[1] }}，两端 selected + 中间 in-range</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdCalendar } from '@didaoktv/didaoui-uniapp'

const fmt = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

const today = fmt(new Date())
const maxDate = fmt(new Date(Date.now() + 30 * 86400000))
const minPre = fmt(new Date(Date.now() + 2 * 86400000))
const maxPre = fmt(new Date(Date.now() + 20 * 86400000))

const single = ref<string[]>([])
const rangeVal = ref<string[]>([])
const slotDate = ref<string[]>([today])
const preRange = ref<string[]>([fmt(new Date(Date.now() + 5 * 86400000)), fmt(new Date(Date.now() + 10 * 86400000))])

const changeNote = ref('-')
const singleNote = ref('-')
const rangeNote = ref('-')
const slotNote = ref('点击日期后选择时段')

function onChange(v: string | string[]) {
  changeNote.value = JSON.stringify(v || '空')
}
function onConfirmSingle(v: string | string[]) {
  singleNote.value = JSON.stringify(v)
}
function onConfirmRange(v: string | string[]) {
  rangeNote.value = JSON.stringify(v)
}
function onConfirmSlot(v: string | string[]) {
  slotNote.value = `confirm: ${JSON.stringify(v)} · 时段: ${activeSlot.value || '未选'}`
}
function isSunday(date: string) {
  return new Date(date + 'T00:00:00').getDay() === 0
}
const activeSlot = ref('')
function onSlot(v: { date: string; time: string }) {
  activeSlot.value = v.time
  slotNote.value = `slot-click: ${v.date} ${v.time}`
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }
</style>