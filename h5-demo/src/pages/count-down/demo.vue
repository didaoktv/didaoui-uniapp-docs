<template>
  <dd-top-navbar title="倒计时" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">格式 Format</text>
      <view class="cd-row"><text class="cd-label">HH:mm:ss</text><dd-count-down :time="9000000" format="HH:mm:ss" /></view>
      <view class="cd-row"><text class="cd-label">DD天 HH:mm:ss</text><dd-count-down :time="132000000" format="DD天 HH:mm:ss" /></view>
      <view class="cd-row"><text class="cd-label">mm:ss</text><dd-count-down :time="90000" format="mm:ss" /></view>
      <view class="cd-row"><text class="cd-label">HH:mm:ss:SSS</text><dd-count-down :time="9800" format="HH:mm:ss:SSS" millisecond /></view>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义 Slot</text>
      <view class="cd-row">
        <text class="cd-label">倒计时卡片</text>
        <dd-count-down :time="3600000" format="HH:mm:ss">
          <template #default="slotProps">
            <view class="cd-custom">
              <text class="cd-num">{{ slotProps.hours }}</text>
              <text class="cd-sep">:</text>
              <text class="cd-num">{{ slotProps.minutes }}</text>
              <text class="cd-sep">:</text>
              <text class="cd-num">{{ slotProps.seconds }}</text>
            </view>
          </template>
        </dd-count-down>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">事件 Events</text>
      <text class="demo-label">监听 change / finish</text>
      <view class="cd-row">
        <text class="cd-label">状态</text>
        <dd-count-down :time="10000" format="mm:ss" @change="onChange" @finish="onFinish" />
      </view>
      <text class="demo-note">状态: {{ cdState }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">毫秒精度 Millisecond</text>
      <view class="cd-row"><text class="cd-label">毫秒模式</text><dd-count-down :time="5000" format="ss.SSS" millisecond /></view>
    </view>

    <view class="demo-section">
      <text class="demo-title">不同时长 Durations</text>
      <view class="cd-row"><text class="cd-label">1小时</text><dd-count-down :time="3600000" format="HH:mm:ss" /></view>
      <view class="cd-row"><text class="cd-label">30分钟</text><dd-count-down :time="1800000" format="mm:ss" /></view>
      <view class="cd-row"><text class="cd-label">24小时</text><dd-count-down :time="86400000" format="DD天 HH:mm:ss" /></view>
    </view>
  <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdCountDown } from '@didaoktv/didaoui-uniapp'

const cdState = ref('运行中...')
function onChange(d){ cdState.value = `H:${d.hours} M:${d.minutes} S:${d.seconds}` }
function onFinish(){ cdState.value = '已结束!' }
</script>

<style scoped>
.demo-page { }
.cd-row{display:flex;align-items:center;justify-content:space-between;padding:16rpx 0;border-bottom:1px solid #2a2a2a;}
.cd-label{color:#9E9E9E;font-size:26rpx;}
.cd-custom{display:flex;align-items:center;gap:4rpx;font-family:monospace;font-size:28rpx;}
.cd-num{color:#FFC107;font-weight:700;background:#2a2a2a;padding:4rpx 12rpx;border-radius:6rpx;}
.cd-sep{color:#757575;margin:0 2rpx;}
</style>