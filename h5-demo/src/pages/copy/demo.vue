<template>
  <dd-top-navbar title="复制" />
  <view class="demo-page">

    <!-- 基础复制 -->
    <view class="demo-section">
      <text class="demo-title">基础复制 content</text>
      <view class="demo-row">
        <dd-copy content="帝到KTV 会员卡号：DD-88888888" />
        <dd-copy content="https://didaoktv.com" />
      </view>
      <text class="demo-note">默认插槽文字为「复制」，点击后复制 content 到粘贴板并 toast 提示</text>
    </view>

    <!-- 自定义提示 notice -->
    <view class="demo-section">
      <text class="demo-title">自定义提示 notice</text>
      <view class="demo-row">
        <dd-copy content="KTV 包房预订码：GOLD-0666" notice="预订码已复制，到店出示即可" />
      </view>
      <text class="demo-note">notice 控制复制成功后的提示文案</text>
    </view>

    <!-- 弹窗提示 alertStyle -->
    <view class="demo-section">
      <text class="demo-title">提示形式 alertStyle（toast / modal）</text>
      <view class="demo-row">
        <dd-copy content="客服电话 400-800-1234" alert-style="toast" notice="电话已复制" />
        <dd-copy content="门店地址：南京路 88 号 3F" alert-style="modal" notice="地址已复制，可粘贴给好友" />
      </view>
      <text class="demo-note">alertStyle=modal 时用 showModal 弹窗提示，toast 为轻提示</text>
    </view>

    <!-- 自定义插槽 -->
    <view class="demo-section">
      <text class="demo-title">自定义插槽内容</text>
      <view class="demo-row">
        <dd-copy content="会员积分兑换码：JF-2026-0808">
          <view class="copy-btn">点击复制兑换码</view>
        </dd-copy>
        <dd-copy content="今晚局：K房 05，20:00 开唱">
          <view class="copy-btn copy-btn--gold">复制聚会暗号</view>
        </dd-copy>
      </view>
      <text class="demo-note">默认插槽可放任意自定义内容；content 为空时点击会提示「无内容」</text>
    </view>

    <!-- success 事件 -->
    <view class="demo-section">
      <text class="demo-title">success 事件</text>
      <view class="demo-row">
        <dd-copy content="帝王金卡卡号" @success="onSuccess" />
      </view>
      <text class="demo-note">已复制 {{ successCount }} 次，最近一次：{{ lastContent }}</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const successCount = ref(0)
const lastContent = ref('')

function onSuccess() {
  successCount.value++
  lastContent.value = '帝王金卡卡号'
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.copy-btn {
  padding: 12rpx 28rpx;
  background: var(--dd-accent);
  color: #fff;
  border-radius: 32rpx;
  font-size: 24rpx;
}

.copy-btn--gold {
  background: #F5A623;
}
</style>
