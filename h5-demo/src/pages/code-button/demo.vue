<template>
  <dd-top-navbar title="验证码按钮" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础用法</text>
      <view class="cb-row">
        <text class="cb-label">点击后 start() 开始倒计时</text>
        <dd-code-button ref="basicRef" @click="sendCode" @finish="onFinish" />
      </view>
      <text class="demo-note">{{ basicNote }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义文本与时长</text>
      <view class="cb-row">
        <text class="cb-label">120s / X s 后重发</text>
        <dd-code-button ref="customRef" :time="120" change-text="X s 后重发" end-text="重新发送" @click="customRef?.start()" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">按钮形态透传</text>
      <view class="cb-row">
        <text class="cb-label">type=text / size=md</text>
        <dd-code-button ref="textRef" type="text" size="md" @click="textRef?.start()" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">跨页续跑 keepRunning</text>
      <view class="cb-row">
        <text class="cb-label">刷新页面，未到期自动续跑</text>
        <dd-code-button ref="keepRef" keep-running unique-key="demo-login" @click="keepRef?.start()" />
      </view>
      <view class="cb-btns">
        <dd-button size="sm" type="secondary" @click="resetAll">重置全部</dd-button>
      </view>
    </view>

  <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const basicRef = ref()
const customRef = ref()
const textRef = ref()
const keepRef = ref()

const basicNote = ref('模拟发码：点击后 800ms 调 start()')

// ponytail: demo 里模拟网络延迟，真实场景是 apiSendSms() 成功后再 start()
async function sendCode() {
  basicNote.value = '发送中...'
  await new Promise(resolve => setTimeout(resolve, 800))
  basicNote.value = '已发送，倒计时结束后可重发'
  basicRef.value?.start()
}

function onFinish() {
  basicNote.value = '倒计时结束，可重新获取'
}

function resetAll() {
  basicRef.value?.reset()
  customRef.value?.reset()
  textRef.value?.reset()
  keepRef.value?.reset()
  basicNote.value = '已重置'
}
</script>

<style scoped>
.demo-page { }
.cb-row{display:flex;align-items:center;justify-content:space-between;padding:16rpx 0;border-bottom:1px solid var(--dd-surface-container-high);}
.cb-label{color:var(--dd-muted);font-size:26rpx;}
.cb-btns{display:flex;justify-content:flex-end;padding:16rpx 0 0;}
</style>
