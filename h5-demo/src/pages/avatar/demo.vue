<template>
  <dd-top-navbar title="头像" />
  <view class="demo-page">

    <!-- 基础用法 -->
    <view class="demo-section">
      <text class="demo-title">基础用法（图片 src / 文字 text / 图标 icon）</text>
      <view class="demo-row">
        <dd-avatar src="https://picsum.photos/seed/dd-av1/100/100" />
        <dd-avatar text="帝" bgColor="#F5A623" />
        <dd-avatar icon="star" bgColor="var(--dd-accent)" />
        <dd-avatar text="客" bgColor="#67C23A" color="#0A0A0A" />
      </view>
      <text class="demo-note">text / icon 优先于 src；size 默认 40px</text>
    </view>

    <!-- 尺寸 size -->
    <view class="demo-section">
      <text class="demo-title">尺寸 size（数字，单位 px）</text>
      <view class="demo-row" style="align-items:flex-end">
        <dd-avatar :size="28" text="28" />
        <dd-avatar :size="40" text="40" />
        <dd-avatar :size="56" text="56" />
        <dd-avatar :size="72" text="72" />
        <dd-avatar :size="96" text="96" />
      </view>
    </view>

    <!-- 形状 shape -->
    <view class="demo-section">
      <text class="demo-title">形状 shape（circle / square）</text>
      <view class="demo-row">
        <dd-avatar :size="64" shape="circle" src="https://picsum.photos/seed/dd-av2/120/120" />
        <dd-avatar :size="64" shape="square" src="https://picsum.photos/seed/dd-av3/120/120" />
        <dd-avatar :size="64" shape="circle" text="圆" />
        <dd-avatar :size="64" shape="square" text="方" />
      </view>
    </view>

    <!-- 文字头像自定义 -->
    <view class="demo-section">
      <text class="demo-title">文字头像（bgColor / color / fontSize）</text>
      <view class="demo-row">
        <dd-avatar :size="56" text="金" bgColor="#F5A623" color="#0A0A0A" :fontSize="20" />
        <dd-avatar :size="56" text="蓝" bgColor="var(--dd-accent)" color="#FFFFFF" :fontSize="24" />
        <dd-avatar :size="56" text="VIP" bgColor="#E60012" color="#FFD700" :fontSize="14" />
      </view>
    </view>

    <!-- 随机背景色 -->
    <view class="demo-section">
      <text class="demo-title">随机背景色 randomBgColor / colorIndex</text>
      <view class="demo-row">
        <dd-avatar :size="56" text="随" :randomBgColor="true" />
        <dd-avatar :size="56" text="机" :randomBgColor="true" />
        <dd-avatar :size="56" text="指" :randomBgColor="true" :colorIndex="0" />
        <dd-avatar :size="56" text="定" :randomBgColor="true" :colorIndex="5" />
      </view>
      <text class="demo-note">randomBgColor 从内置 20 色随机取色；colorIndex（0-19）固定取某色</text>
    </view>

    <!-- 裁剪模式 mode -->
    <view class="demo-section">
      <text class="demo-title">裁剪模式 mode</text>
      <view class="demo-row">
        <dd-avatar :size="64" mode="scaleToFill" src="https://picsum.photos/seed/dd-av4/200/100" />
        <dd-avatar :size="64" mode="aspectFill" src="https://picsum.photos/seed/dd-av4/200/100" />
        <dd-avatar :size="64" mode="aspectFit" src="https://picsum.photos/seed/dd-av4/200/100" />
      </view>
      <text class="demo-note">同 uni image 的 mode：scaleToFill 拉伸 / aspectFill 填充裁剪 / aspectFit 完整显示</text>
    </view>

    <!-- click 事件 -->
    <view class="demo-section">
      <text class="demo-title">click 事件</text>
      <view class="demo-row">
        <dd-avatar :size="56" text="点" name="first" @click="onClick" />
        <dd-avatar :size="56" text="我" name="second" @click="onClick" />
      </view>
      <text class="demo-note">{{ clickNote || '点击头像展示 name 标识' }}</text>
    </view>

    <!-- 头像组 -->
    <view class="demo-section">
      <text class="demo-title">头像组 dd-avatar-group（叠放 / maxCount / showMore）</text>
      <view class="demo-col">
        <dd-avatar-group :urls="urls" :size="48" />
        <dd-avatar-group :urls="manyUrls" :size="48" :maxCount="4" />
        <dd-avatar-group :urls="manyUrls" :size="48" :maxCount="4" :showMore="false" />
      </view>
      <text class="demo-note">默认 gap=0.5 叠放；maxCount=4 超出折叠，showMore=false 时不显示「+N」</text>
    </view>

    <!-- 头像组形状 / gap / extraValue -->
    <view class="demo-section">
      <text class="demo-title">头像组 shape / gap / extraValue</text>
      <view class="demo-col">
        <dd-avatar-group :urls="urls" :size="48" shape="square" :gap="0.2" />
        <dd-avatar-group :urls="urls" :size="48" :gap="1" :extraValue="128" />
      </view>
      <text class="demo-note">square 方形叠放；gap=1 完全展开；extraValue 显示额外数值（如群成员数）</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clickNote = ref('')

function onClick(name: string) {
  clickNote.value = `点击了头像：${name}`
}

const urls = [
  'https://picsum.photos/seed/dd-g1/100/100',
  'https://picsum.photos/seed/dd-g2/100/100',
  'https://picsum.photos/seed/dd-g3/100/100',
]

const manyUrls = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/dd-gn${i}/100/100`)
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }
</style>
