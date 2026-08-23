<template>
  <dd-top-navbar title="键盘" />
  <view class="demo-page">

    <!-- dd-keyboard 弹出键盘：默认数字（含小数点） -->
    <view class="demo-section">
      <text class="demo-title">dd-keyboard 数字键盘（含小数点）</text>
      <view class="kb-btn" @click="showNum = true">打开数字键盘</view>
      <text class="demo-note">输入值：{{ numVal || '尚未输入' }}</text>
      <dd-keyboard
        :show="showNum"
        mode="number"
        tips="金额键盘"
        @change="onNumChange"
        @backspace="onNumBackspace"
        @cancel="showNum = false"
        @confirm="showNum = false"
        @close="showNum = false"
      />
    </view>

    <!-- 不含小数点 dotDisabled + 乱序 random -->
    <view class="demo-section">
      <text class="demo-title">dotDisabled 隐藏小数点 / random 乱序</text>
      <view class="kb-btn" @click="showDot = true">打开（无点·乱序）</view>
      <text class="demo-note">输入值：{{ dotVal || '尚未输入' }}</text>
      <dd-keyboard
        :show="showDot"
        mode="number"
        :dotDisabled="true"
        :random="true"
        cancel-text="重输"
        confirm-text="完成"
        @change="v => dotVal += v"
        @backspace="dotVal = dotVal.slice(0, -1)"
        @cancel="showDot = false"
        @confirm="showDot = false"
        @close="showDot = false"
      />
    </view>

    <!-- 身份证键盘 -->
    <view class="demo-section">
      <text class="demo-title">身份证键盘 mode="card"</text>
      <view class="kb-btn" @click="showCard = true">打开身份证键盘</view>
      <text class="demo-note">输入值：{{ cardVal || '尚未输入' }}</text>
      <dd-keyboard
        :show="showCard"
        mode="card"
        @change="v => cardVal += v"
        @backspace="cardVal = cardVal.slice(0, -1)"
        @cancel="showCard = false"
        @confirm="showCard = false"
        @close="showCard = false"
      />
    </view>

    <!-- dd-number-keyboard 内联数字键盘 -->
    <view class="demo-section">
      <text class="demo-title">dd-number-keyboard 内联数字键盘</text>
      <text class="demo-note">输入值：{{ inlineVal || '尚未输入' }}</text>
      <view class="kb-inline">
        <dd-number-keyboard mode="number" @change="v => inlineVal += v" @backspace="onInlineBackspace" />
      </view>
      <text class="demo-note">非弹窗形态，直接嵌入页面，change / backspace 事件驱动输入</text>
    </view>

    <!-- dd-car-keyboard 车牌键盘 -->
    <view class="demo-section">
      <text class="demo-title">dd-car-keyboard 车牌键盘</text>
      <text class="demo-note">车牌号：{{ carVal || '尚未输入' }}</text>
      <view class="kb-inline">
        <dd-car-keyboard @change="onCarChange" @backspace="onCarBackspace" />
      </view>
      <text class="demo-note">默认省份简称，第 4 行「中/英」切换字母，autoChange 可在输完中文后自动切英文</text>
    </view>

    <!-- 车牌乱序 + 自动切换 -->
    <view class="demo-section">
      <text class="demo-title">车牌键盘 random 乱序 + autoChange</text>
      <text class="demo-note">车牌号：{{ carVal2 || '尚未输入' }}</text>
      <view class="kb-inline">
        <dd-car-keyboard :random="true" :autoChange="true" @change="v => carVal2 += v" @backspace="carVal2 = carVal2.slice(0, -1)" />
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* dd-keyboard 弹出键盘状态 */
const showNum = ref(false)
const showDot = ref(false)
const showCard = ref(false)
const numVal = ref('')
const dotVal = ref('')
const cardVal = ref('')

function onNumChange(v: string | number) {
  numVal.value += v
}
function onNumBackspace() {
  numVal.value = numVal.value.slice(0, -1)
}

/* dd-number-keyboard 内联键盘 */
const inlineVal = ref('')

function onInlineBackspace() {
  inlineVal.value = inlineVal.value.slice(0, -1)
}

/* dd-car-keyboard 车牌键盘 */
const carVal = ref('')
const carVal2 = ref('')

function onCarChange(v: string) {
  carVal.value += v
}
function onCarBackspace() {
  carVal.value = carVal.value.slice(0, -1)
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.kb-btn {
  padding: 16rpx 32rpx;
  background: #2D4BA0;
  color: #fff;
  border-radius: 12rpx;
  font-size: 26rpx;
  text-align: center;
}

.kb-inline {
  border-radius: 12rpx;
  overflow: hidden;
  margin-top: 16rpx;
}
</style>
