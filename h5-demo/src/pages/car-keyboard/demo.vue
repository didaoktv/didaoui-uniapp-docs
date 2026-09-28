<template>
  <dd-top-navbar title="车牌键盘" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">车牌输入（格子 + 键盘一体）</text>
      <view class="kb-inline">
        <dd-car-keyboard v-model="carVal" />
      </view>
      <text class="demo-note">车牌号：{{ carVal || '尚未输入' }}</text>
      <text class="demo-note">点击格子弹出键盘：0 位省份简称，其余位字母数字按位锁键，末位为新能源绿牌位（v-model 双向绑定）</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">focus / blur 事件</text>
      <view class="kb-inline">
        <dd-car-keyboard v-model="carVal2" @focus="onFocus" @blur="onBlur" />
      </view>
      <text class="demo-note">事件记录：{{ eventNote || '（未触发）' }}</text>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const carVal = ref('')
const carVal2 = ref('')
const eventNote = ref('')

function onFocus() { eventNote.value = 'focus → 键盘弹出' }
function onBlur() { eventNote.value = 'blur → 键盘收起' }
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.kb-inline {
  border-radius: 12rpx;
  overflow: hidden;
  margin-top: 16rpx;
}
</style>