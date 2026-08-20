<template>
  <dd-top-navbar title="步进器" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础数量 Basic</text>
      <view class="demo-row">
        <dd-stepper v-model="count" :min="1" :max="99" />
        <text class="demo-note">已选 {{ count }} 首</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <view class="demo-row">
        <dd-stepper v-model="qty" :min="1" :max="10" />
        <text class="demo-note">默认 MD</text>
      </view>
      <view class="demo-row" style="margin-top:16rpx">
        <dd-stepper v-model="qty2" size="sm" :min="1" :max="10" />
        <text class="demo-note">小号 SM</text>
      </view>
      <view class="demo-row" style="margin-top:16rpx">
        <text class="demo-label">尺寸对比 Compare</text>
      </view>
      <view class="demo-row">
        <dd-stepper :model-value="3" :min="1" :max="10" />
        <dd-stepper :model-value="3" size="sm" :min="1" :max="10" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">边界 Boundary</text>
      <view class="demo-row">
        <dd-stepper v-model="people" :min="1" :max="6" />
        <text class="demo-note">人数 {{ people }} / 6</text>
      </view>
      <view class="demo-row" style="margin-top:16rpx">
        <dd-stepper :model-value="1" :min="1" :max="5" />
        <text class="demo-note">达到最小值 Min Reached</text>
      </view>
      <view class="demo-row" style="margin-top:16rpx">
        <dd-stepper :model-value="5" :min="1" :max="5" />
        <text class="demo-note">达到最大值 Max Reached</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义步进 Step</text>
      <view class="demo-row">
        <dd-stepper v-model="price" :min="0" :max="100" :step="5" />
        <text class="demo-note">价格 {{ price }} (步进 5)</text>
      </view>
      <view class="demo-row" style="margin-top:16rpx">
        <dd-stepper v-model="points" :min="0" :max="1000" :step="100" />
        <text class="demo-note">积分 {{ points }} (步进 100)</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <view class="demo-row">
        <dd-stepper v-model="d1" disabled />
        <text class="demo-note">完全禁用</text>
      </view>
      <view class="demo-row" style="margin-top:16rpx">
        <dd-stepper v-model="d2" :min="1" :max="5" :disable-minus="d2<=1" />
        <text class="demo-note">仅禁用减号</text>
      </view>
      <view class="demo-row" style="margin-top:16rpx">
        <dd-stepper v-model="d3" :min="1" :max="5" :disable-plus="d3>=5" />
        <text class="demo-note">仅禁用加号</text>
      </view>
      <view class="demo-row" style="margin-top:16rpx">
        <dd-stepper v-model="d4" size="sm" disabled />
        <text class="demo-note">小号禁用 SM Disabled</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">状态组合 States</text>
      <view class="demo-col">
        <text class="demo-label">全部禁用 All Disabled</text>
        <view class="demo-row">
          <dd-stepper :model-value="3" disabled />
          <dd-stepper :model-value="3" size="sm" disabled />
        </view>
        <text class="demo-label" style="margin-top:16rpx">步进 + 禁用减号 Step + Disable Minus</text>
        <view class="demo-row">
          <dd-stepper v-model="s1" :min="0" :max="10" :step="3" :disable-minus="s1<=0" />
          <text class="demo-note">s1 = {{ s1 }}</text>
        </view>
        <text class="demo-label" style="margin-top:16rpx">步进 + 禁用加号 Step + Disable Plus</text>
        <view class="demo-row">
          <dd-stepper v-model="s2" :min="0" :max="10" :step="3" :disable-plus="s2>=10" />
          <text class="demo-note">s2 = {{ s2 }}</text>
        </view>
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdStepper } from '@didaoktv/didaoui-uniapp'


const count = ref(5)
const qty = ref(2)
const qty2 = ref(3)
const people = ref(1)
const price = ref(50)
const points = ref(300)
const d1 = ref(5)
const d2 = ref(1)
const d3 = ref(5)
const d4 = ref(2)
const s1 = ref(0)
const s2 = ref(6)
</script>

<style scoped>
.demo-page { }
</style>
