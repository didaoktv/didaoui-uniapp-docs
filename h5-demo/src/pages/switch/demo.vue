<template>
  <dd-top-navbar title="开关" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <text class="demo-label">默认 MD</text>
      <view class="demo-row">
        <dd-switch v-model="on1" />
        <text class="demo-note">{{ on1 ? '开' : '关' }}</text>
      </view>
      <text class="demo-label">小号 SM</text>
      <view class="demo-row">
        <dd-switch v-model="on2" size="sm" />
        <text class="demo-note">{{ on2 ? '开' : '关' }}</text>
      </view>
      <text class="demo-label">尺寸对比 Size Compare</text>
      <view class="demo-row">
        <dd-switch :model-value="true" />
        <dd-switch :model-value="false" />
        <dd-switch :model-value="true" size="sm" />
        <dd-switch :model-value="false" size="sm" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <text class="demo-label">禁用状态</text>
      <view class="demo-row">
        <dd-switch :model-value="true" disabled />
        <dd-switch :model-value="false" disabled />
      </view>
      <text class="demo-label">小号禁用 SM Disabled</text>
      <view class="demo-row">
        <dd-switch :model-value="true" size="sm" disabled />
        <dd-switch :model-value="false" size="sm" disabled />
      </view>
      <text class="demo-label">禁用 + 尺寸组合</text>
      <view class="demo-row">
        <dd-switch :model-value="true" disabled />
        <dd-switch :model-value="false" disabled />
        <dd-switch :model-value="true" size="sm" disabled />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">实时绑定 Binding</text>
      <view class="demo-col">
        <view class="demo-row" style="justify-content:space-between">
          <text class="demo-label">Wi-Fi 开关</text>
          <dd-switch v-model="wifi" />
        </view>
        <view class="demo-row" style="justify-content:space-between">
          <text class="demo-label">蓝牙开关</text>
          <dd-switch v-model="bt" size="sm" />
        </view>
        <view class="demo-row" style="justify-content:space-between">
          <text class="demo-label">通知推送</text>
          <dd-switch v-model="notice" />
        </view>
        <view class="demo-row" style="justify-content:space-between">
          <text class="demo-label">自动续费（禁用）</text>
          <dd-switch :model-value="true" disabled />
        </view>
      </view>
      <text class="demo-note" style="margin-top:24rpx">Wi-Fi: {{ wifi }} · 蓝牙: {{ bt }} · 通知: {{ notice }}</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdSwitch } from '@didaoktv/didaoui-uniapp'


const on1 = ref(true)
const on2 = ref(false)
const wifi = ref(true)
const bt = ref(false)
const notice = ref(true)
</script>

<style scoped>
.demo-page { }
</style>
