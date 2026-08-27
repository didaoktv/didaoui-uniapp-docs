<template>
  <dd-top-navbar title="文本" />
  <view class="demo-page">

    <!-- 基础用法 -->
    <view class="demo-section">
      <text class="demo-title">基础 Basic</text>
      <view class="demo-col">
        <dd-text text="帝到KTV，欢唱每一夜" />
        <dd-text text="雨纷纷，旧故里草木深" color="#F5A623" />
      </view>
      <text class="demo-note">默认 size 15px，可用 color 自定义颜色</text>
    </view>

    <!-- 主题颜色 type -->
    <view class="demo-section">
      <text class="demo-title">主题颜色 type</text>
      <view class="demo-row">
        <dd-text text="primary" type="primary" />
        <dd-text text="success" type="success" />
        <dd-text text="warning" type="warning" />
        <dd-text text="error" type="error" />
        <dd-text text="info" type="info" />
      </view>
      <view class="demo-row" style="margin-top:16rpx">
        <dd-text text="main" type="main" />
        <dd-text text="content" type="content" />
        <dd-text text="tips" type="tips" />
        <dd-text text="light" type="light" />
      </view>
      <text class="demo-note">type 优先级高于 color</text>
    </view>

    <!-- 字号 size / 加粗 bold -->
    <view class="demo-section">
      <text class="demo-title">字号 size / 加粗 bold</text>
      <view class="demo-row" style="align-items:flex-end">
        <dd-text text="12px" :size="12" />
        <dd-text text="15px" :size="15" />
        <dd-text text="20px" :size="20" />
        <dd-text text="28px" :size="28" color="#F5A623" />
      </view>
      <view class="demo-row" style="margin-top:16rpx">
        <dd-text text="普通字重" />
        <dd-text text="加粗字体" bold />
      </view>
    </view>

    <!-- 装饰线 decoration -->
    <view class="demo-section">
      <text class="demo-title">文字装饰 decorate</text>
      <view class="demo-col">
        <dd-text text="默认无装饰 none" />
        <dd-text text="下划线 underline" decoration="underline" />
        <dd-text text="删除线 line-through" decoration="line-through" />
        <dd-text text="¥128 划掉原价" decoration="line-through" color="#909399" suffix-icon="arrow-right" />
      </view>
    </view>

    <!-- 溢出省略 lines / block -->
    <view class="demo-section">
      <text class="demo-title">溢出省略 lines / 块状 block</text>
      <dd-text
        :text="longText"
        :lines="2"
        block
      />
      <text class="demo-note">lines=2 超出两行显示省略号；block 让文本块状展示（配合 align 生效）</text>
      <view style="margin-top:16rpx">
        <dd-text text="block + 居中对齐" block align="center" />
        <dd-text text="block + 右对齐" block align="right" />
      </view>
    </view>

    <!-- 前后置图标 prefix / suffix -->
    <view class="demo-section">
      <text class="demo-title">前后置图标 prefixIcon / suffixIcon</text>
      <view class="demo-col">
        <dd-text text="今晚黄金场已预订" prefix-icon="star" :icon-style="{ fontSize: '14px', color: '#F5A623' }" />
        <dd-text text="查看包房详情" suffix-icon="arrow-right" />
        <dd-text text="会员专享折扣" prefix-icon="star" suffix-icon="arrow-right" />
      </view>
    </view>

    <!-- 模式 mode -->
    <view class="demo-section">
      <text class="demo-title">模式 mode（price / date / phone / link）</text>
      <view class="demo-col">
        <dd-text mode="price" :text="288" />
        <dd-text mode="date" text="2026-08-22 20:30:00" />
        <dd-text mode="phone" text="13800138000" />
        <dd-text mode="phone" text="13800138000" :call="true" />
        <dd-text mode="link" text="点击打开帝到官网" href="https://didaoktv.com" />
      </view>
      <text class="demo-note">price 自动加 ￥ 前缀；phone + call=true 点击拨打电话；link 模式自带下划线跳转</text>
    </view>

    <!-- 外边距 margin / 行高 lineHeight -->
    <view class="demo-section">
      <text class="demo-title">外边距 margin / 行高 lineHeight</text>
      <view style="background: var(--dd-bg);padding:8rpx;border-radius:8rpx">
        <dd-text text="上边距 20px 的文本" margin="20px 0 0 0" block />
        <dd-text text="行高 2 倍的文本，多行时更透气" :line-height="2" :lines="2" block />
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const longText = ref('帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV 帝到KTV')
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }
</style>
