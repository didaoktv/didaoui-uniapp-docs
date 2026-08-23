<template>
  <dd-top-navbar title="二维码" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础 Basic</text>
      <view class="demo-row" style="justify-content:center;padding:12rpx 0">
        <dd-qrcode val="didaoktv.com" :size="200" @result="onResult" />
      </view>
      <text class="demo-note">result 回调: {{ qrUrl ? '已生成' : '生成中...' }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸 size / 前景色 foreground</text>
      <view class="demo-row" style="justify-content:space-between">
        <dd-qrcode val="didaoktv.com" :size="120" foreground="#2D4BA0" />
        <dd-qrcode val="didaoktv.com" :size="200" foreground="#F5A623" />
        <dd-qrcode val="didaoktv.com" :size="260" foreground="#0A0A0A" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">背景色 background</text>
      <view class="demo-row" style="justify-content:space-around">
        <dd-qrcode val="didaoktv.com" :size="160" background="#FFFFFF" foreground="#0A0A0A" />
        <dd-qrcode val="didaoktv.com" :size="160" background="#F5A623" foreground="#FFFFFF" />
      </view>
      <text class="demo-note">background</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">定位角点颜色 pdground</text>
      <view class="demo-row" style="justify-content:space-around">
        <dd-qrcode val="didaoktv.com" :size="160" foreground="#0A0A0A" />
        <dd-qrcode val="didaoktv.com" :size="160" foreground="#2D4BA0" pdground="#F5A623" />
      </view>
      <text class="demo-note">pdground 单独控制三个定位角点颜色</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">纠错级别 lv (0=L 1=M 2=Q 3=H)</text>
      <view class="demo-row" style="justify-content:space-around">
        <dd-qrcode val="didaoktv.com" :size="150" :lv="0" />
        <dd-qrcode val="didaoktv.com" :size="150" :lv="1" />
        <dd-qrcode val="didaoktv.com" :size="150" :lv="2" />
        <dd-qrcode val="didaoktv.com" :size="150" :lv="3" />
      </view>
      <text class="demo-note">lv 对应二维码纠错级别 correctLevel（RS 块表列索引），H 级可容纳更大 logo</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">icon / iconSize (logo)</text>
      <view class="demo-row" style="justify-content:space-around">
        <dd-qrcode val="didaoktv.com" :size="180" icon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='6' fill='%23F5A623'/%3E%3Ctext x='20' y='26' font-size='22' text-anchor='middle' fill='white' font-family='sans-serif' font-weight='bold'%3EDD%3C/text%3E%3C/svg%3E" :lv="3" />
        <dd-qrcode val="didaoktv.com" :size="180" icon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='6' fill='%23F5A623'/%3E%3Ctext x='20' y='26' font-size='22' text-anchor='middle' fill='white' font-family='sans-serif' font-weight='bold'%3EDD%3C/text%3E%3C/svg%3E" :lv="3" :icon-size="50" />
      </view>
      <text class="demo-note">icon 默认 size 的 18%，可用 iconSize 覆盖；建议配 lv=3（H 级纠错）</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdQrcode } from '@didaoktv/didaoui-uniapp'

const qrUrl = ref('')
function onResult(url: string) { qrUrl.value = url }
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }
</style>