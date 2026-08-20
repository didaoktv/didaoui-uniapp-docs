<template>
  <dd-top-navbar title="评分" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础评分 Basic</text>
      <dd-rate v-model="score" />
      <text class="demo-note">{{ score }} 星</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">半星 AllowHalf</text>
      <dd-rate v-model="half" allow-half />
      <text class="demo-note">{{ half }} 星（支持半星）</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义数量 Count</text>
      <view class="demo-col">
        <text class="demo-label">3 星评分</text>
        <dd-rate v-model="c3" :count="3" />
        <text class="demo-note">{{ c3 }} / 3</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">10 星评分</text>
        <dd-rate v-model="c10" :count="10" />
        <text class="demo-note">{{ c10 }} / 10</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">5 星 + 半星</text>
        <dd-rate v-model="ch" :count="5" allow-half />
        <text class="demo-note">{{ ch }} / 5</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义颜色 Color</text>
      <view class="demo-col">
        <text class="demo-label">金色 Gold</text>
        <dd-rate v-model="gold" color="#FFD700" void-color="#333333" />
        <text class="demo-note">{{ gold }} 星</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">红色 Red</text>
        <dd-rate v-model="red" color="#FF6B6B" void-color="#2A2A2A" />
        <text class="demo-note">{{ red }} 星</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">青色 Cyan</text>
        <dd-rate v-model="cyan" color="#4ECDC4" void-color="#1A3C40" />
        <text class="demo-note">{{ cyan }} 星</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">半星 + 自定义色 Half + Color</text>
        <dd-rate v-model="hcolor" allow-half color="#FFC107" void-color="#333333" />
        <text class="demo-note">{{ hcolor }} 星</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">只读 Readonly</text>
      <view class="demo-col">
        <text class="demo-label">只读评分</text>
        <dd-rate v-model="ro" readonly />
        <text class="demo-note">{{ ro }} 星</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">只读 + 半星</text>
        <dd-rate v-model="rohalf" readonly allow-half />
        <text class="demo-note">{{ rohalf }} 星</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">只读 + 自定义数量</text>
        <dd-rate v-model="ro10" readonly :count="10" />
        <text class="demo-note">{{ ro10 }} / 10</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <view class="demo-col">
        <text class="demo-label">禁用</text>
        <dd-rate v-model="dis" disabled />
        <text class="demo-note">{{ dis }} 星</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">禁用 + 半星</text>
        <dd-rate v-model="dishalf" disabled allow-half />
        <text class="demo-note">{{ dishalf }} 星</text>
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">禁用 + 自定义色</text>
        <dd-rate v-model="discolor" disabled color="#FF6B6B" void-color="#333" />
        <text class="demo-note">{{ discolor }} 星</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <view class="demo-col">
        <text class="demo-label">size=16 (小)</text>
        <dd-rate v-model="sz16" :size="16" />
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">size=20 (默认)</text>
        <dd-rate v-model="sz20" :size="20" />
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">size=28 (大)</text>
        <dd-rate v-model="sz28" :size="28" />
      </view>
      <view class="demo-col" style="margin-top:16rpx">
        <text class="demo-label">size=36 (超大)</text>
        <dd-rate v-model="sz36" :size="36" />
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdRate } from '@didaoktv/didaoui-uniapp'


const score = ref(4)
const half = ref(3.5)
const c3 = ref(2)
const c10 = ref(7)
const ch = ref(4.5)
const gold = ref(5)
const red = ref(3)
const cyan = ref(4)
const hcolor = ref(2.5)
const ro = ref(4)
const rohalf = ref(3.5)
const ro10 = ref(8)
const dis = ref(2)
const dishalf = ref(1.5)
const discolor = ref(3)
const sz16 = ref(3)
const sz20 = ref(4)
const sz28 = ref(2)
const sz36 = ref(5)
</script>

<style scoped>
.demo-page { }
</style>
