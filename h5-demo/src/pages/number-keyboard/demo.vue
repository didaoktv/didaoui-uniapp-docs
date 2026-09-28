<template>
  <dd-top-navbar title="数字键盘" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">内联数字键盘（含小数点）</text>
      <text class="demo-note">输入值：{{ numVal || '尚未输入' }}</text>
      <view class="kb-inline">
        <dd-number-keyboard mode="number" @change="v => numVal += v" @backspace="onBackspace" />
      </view>
      <text class="demo-note">非弹窗形态，直接嵌入页面，change / backspace 事件驱动输入</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">隐藏小数点 dotDisabled / 乱序 random</text>
      <text class="demo-note">输入值：{{ dotVal || '尚未输入' }}</text>
      <view class="kb-inline">
        <dd-number-keyboard mode="number" :dot-disabled="true" :random="true" @change="v => dotVal += v" @backspace="onBackspace2" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">身份证键盘 mode="card"</text>
      <text class="demo-note">输入值：{{ cardVal || '尚未输入' }}</text>
      <view class="kb-inline">
        <dd-number-keyboard mode="card" @change="v => cardVal += v" @backspace="onBackspace3" />
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const numVal = ref('')
const dotVal = ref('')
const cardVal = ref('')

function onBackspace() { numVal.value = numVal.value.slice(0, -1) }
function onBackspace2() { dotVal.value = dotVal.value.slice(0, -1) }
function onBackspace3() { cardVal.value = cardVal.value.slice(0, -1) }
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.kb-inline {
  border-radius: 12rpx;
  overflow: hidden;
  margin-top: 16rpx;
}
</style>