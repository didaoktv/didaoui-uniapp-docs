<template>
  <dd-top-navbar title="滑块" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础滑块 Basic</text>
      <dd-slider v-model="v" show-tooltip />
      <text class="demo-note">当前值：{{ v }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">范围与步进 Range & Step</text>
      <view class="demo-col">
        <text class="demo-label">步进滑块 Step=2</text>
        <dd-slider v-model="step" :min="0" :max="10" :step="2" show-tooltip />
        <text class="demo-note">step = {{ step }}</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">音量 Volume</text>
        <dd-slider v-model="vol" :min="0" :max="100" show-tooltip />
        <text class="demo-note">vol = {{ vol }}</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义颜色 Color</text>
      <view class="demo-col">
        <text class="demo-label">激活色 Active Color</text>
        <dd-slider v-model="cv" active-color="#FF6B6B" show-tooltip />
        <text class="demo-note">cv = {{ cv }}</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">轨道色 Track Color</text>
        <dd-slider v-model="tv" track-color="#1A3C40" show-tooltip />
        <text class="demo-note">tv = {{ tv }}</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">双色组合 Dual Color</text>
        <dd-slider v-model="dv" active-color="#4ECDC4" track-color="#162626" show-tooltip />
        <text class="demo-note">dv = {{ dv }}</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">最小最大值 Min Max</text>
      <view class="demo-col">
        <text class="demo-label">范围 0-10</text>
        <dd-slider v-model="r1" :min="0" :max="10" show-tooltip />
        <text class="demo-note">r1 = {{ r1 }}</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">范围 50-200</text>
        <dd-slider v-model="r2" :min="50" :max="200" show-tooltip />
        <text class="demo-note">r2 = {{ r2 }}</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">负数范围 -100 到 100</text>
        <dd-slider v-model="r3" :min="-100" :max="100" show-tooltip />
        <text class="demo-note">r3 = {{ r3 }}</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <dd-slider :model-value="30" disabled />
      <text class="demo-note">禁用值 30</text>
      <dd-slider :model-value="70" :min="0" :max="100" disabled style="margin-top:24rpx" />
      <text class="demo-note">禁用值 70</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">Tooltip 提示</text>
      <view class="demo-col">
        <text class="demo-label">无 Tooltip</text>
        <dd-slider v-model="nt" />
        <text class="demo-note">nt = {{ nt }}</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">有 Tooltip</text>
        <dd-slider v-model="wt" show-tooltip />
        <text class="demo-note">wt = {{ wt }}</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">步进 + Tooltip Step Tooltip</text>
        <dd-slider v-model="st" :min="0" :max="10" :step="1" show-tooltip />
        <text class="demo-note">st = {{ st }}</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">小步进 Fine Step</text>
        <dd-slider v-model="fs" :min="0" :max="1" :step="0.1" show-tooltip />
        <text class="demo-note">fs = {{ fs }}</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">连续滑动 Continuous (step=1)</text>
        <dd-slider v-model="cont" :min="0" :max="100" :step="1" show-tooltip />
        <text class="demo-note">cont = {{ cont }}</text>
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdSlider } from '@didaoktv/didaoui-uniapp'


const v = ref(40)
const step = ref(2)
const vol = ref(60)
const cv = ref(65)
const tv = ref(35)
const dv = ref(50)
const r1 = ref(5)
const r2 = ref(120)
const r3 = ref(0)
const nt = ref(25)
const wt = ref(75)
const st = ref(3)
const fs = ref(0.5)
const cont = ref(42)
</script>

<style scoped>
.demo-page { }
</style>
