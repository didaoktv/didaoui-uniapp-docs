<template>
  <dd-top-navbar title="超链接" />
  <view class="demo-page">

    <!-- 基础链接 -->
    <view class="demo-section">
      <text class="demo-title">基础链接 href</text>
      <view class="demo-col">
        <dd-link text="帝到KTV 官网" href="https://didaoktv.com" @click="onClick" />
        <dd-link text="组件库文档" href="https://didaoktv.com" />
      </view>
      <text class="demo-note">H5 点击 window.open 打开；小程序复制链接到粘贴板并提示；APP 调起内置浏览器</text>
    </view>

    <!-- 颜色 color -->
    <view class="demo-section">
      <text class="demo-title">颜色 color</text>
      <view class="demo-row">
        <dd-link text="主色链接" href="https://didaoktv.com" />
        <dd-link text="金色链接" color="#F5A623" href="https://didaoktv.com" />
        <dd-link text="绿色链接" color="#07C160" href="https://didaoktv.com" />
        <dd-link text="红色链接" color="#E60012" href="https://didaoktv.com" />
        <dd-link text="灰色链接" color="#909399" href="https://didaoktv.com" />
      </view>
    </view>

    <!-- 字号 fontSize -->
    <view class="demo-section">
      <text class="demo-title">字号 fontSize</text>
      <view class="demo-row" style="align-items:flex-end">
        <dd-link text="12px" :fontSize="12" href="https://didaoktv.com" />
        <dd-link text="15px" :fontSize="15" href="https://didaoktv.com" />
        <dd-link text="20px" :fontSize="20" href="https://didaoktv.com" />
        <dd-link text="28px" :fontSize="28" color="#F5A623" href="https://didaoktv.com" />
      </view>
    </view>

    <!-- 下划线 underLine / lineColor -->
    <view class="demo-section">
      <text class="demo-title">下划线 underLine / lineColor</text>
      <view class="demo-col">
        <dd-link text="默认无下划线" href="https://didaoktv.com" />
        <dd-link text="带下划线的链接" underLine href="https://didaoktv.com" />
        <dd-link text="自定义颜色下划线" underLine lineColor="#F5A623" color="#F5A623" href="https://didaoktv.com" />
      </view>
    </view>

    <!-- 小程序提示 mpTips -->
    <view class="demo-section">
      <text class="demo-title">小程序提示 mpTips</text>
      <dd-link
        text="小程序中点击复制链接"
        href="https://didaoktv.com"
        mp-tips="链接已复制，请在浏览器打开"
      />
      <text class="demo-note">仅小程序端生效：点击后复制 href 并 toast 提示 mpTips 文案</text>
    </view>

    <!-- 手机号拨打（dd-text mode=phone） -->
    <view class="demo-section">
      <text class="demo-title">手机号拨打（dd-text mode=phone + call）</text>
      <dd-text mode="phone" text="13800138000" :call="true" />
      <text class="demo-note">超链接拨号场景由 dd-text 的 phone 模式承担，点击直接调起 uni.makePhoneCall</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clickCount = ref(0)

function onClick() {
  clickCount.value++
  uni.showToast({ title: `点击了 ${clickCount.value} 次`, icon: 'none' })
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }
</style>
