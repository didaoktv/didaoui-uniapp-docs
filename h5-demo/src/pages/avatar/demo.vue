<template>
  <dd-top-navbar title="头像" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <view class="demo-row">
        <dd-avatar size="xs" text="A" />
        <dd-avatar size="sm" text="B" />
        <dd-avatar size="md" text="帝" />
        <dd-avatar size="lg" text="K" />
        <dd-avatar size="xl" text="TV" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">形状 Shape</text>
      <view class="demo-row">
        <dd-avatar size="lg" shape="circle" text="圆" />
        <dd-avatar size="lg" shape="square" text="方" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">VIP 状态</text>
      <view class="demo-row">
        <dd-avatar size="md" :vip="false" text="普通" />
        <dd-avatar size="md" :vip="true" text="VIP" />
        <dd-avatar size="lg" :vip="true" shape="circle" text="VIP+圆" />
        <dd-avatar size="lg" :vip="true" shape="square" text="VIP+方" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">在线 Online</text>
      <view class="demo-row">
        <dd-avatar size="md" :online="true" text="在线" />
        <dd-avatar size="md" :online="false" text="离线" />
        <dd-avatar size="lg" :online="true" :vip="true" text="VIP在线" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">图片 Avatar</text>
      <view class="demo-row">
        <dd-avatar size="lg" src="https://picsum.photos/100/100?av1" />
        <dd-avatar size="lg" src="https://picsum.photos/120/120?av2" :online="true" />
        <dd-avatar size="lg" src="https://picsum.photos/140/140?av3" :vip="true" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">组合 Combinations</text>
      <view class="demo-row">
        <dd-avatar size="sm" shape="square" :vip="true" text="VIP" />
        <dd-avatar size="sm" shape="square" :online="true" text="OL" />
        <dd-avatar size="xs" shape="circle" :online="true" text="XS" />
      </view>
    </view>
  <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdAvatar } from '@didaoktv/didaoui-uniapp'


</script>

<style scoped>
.demo-page { }
</style>