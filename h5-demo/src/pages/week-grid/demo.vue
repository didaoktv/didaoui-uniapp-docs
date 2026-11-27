<template>
  <dd-top-navbar title="周视图排班网格" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">只读周视图（含休息日）</text>
      <dd-week-grid :days="days" @day-tap="onTap" />
      <text class="demo-note">day-tap 回传日期：{{ tapNote }}</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdWeekGrid } from '@didaoktv/didaoui-uniapp'

const days = [
  {
    date: '2026-11-23',
    dayType: 'SHIFT',
    shifts: [{ id: '1', startTime: '14:00', endTime: '22:00', role: '服务员' }],
  },
  { date: '2026-11-24', dayType: 'REST', shifts: [] },
  {
    date: '2026-11-25',
    dayType: 'SHIFT',
    shifts: [{ id: '2', startTime: '18:00', endTime: '02:00', role: '收银' }],
  },
  { date: '2026-11-26', dayType: 'REST', shifts: [] },
  { date: '2026-11-27', dayType: 'REST', shifts: [] },
  {
    date: '2026-11-28',
    dayType: 'SHIFT',
    shifts: [{ id: '3', startTime: '13:00', endTime: '21:00', role: '服务员' }],
  },
  { date: '2026-11-29', dayType: 'REST', shifts: [] },
]

const tapNote = ref('-')
function onTap(day: { date: string }) {
  tapNote.value = day.date
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }
</style>
