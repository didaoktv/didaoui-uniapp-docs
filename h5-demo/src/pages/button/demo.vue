<template>
  <dd-top-navbar title="按钮" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">按钮类型 Type</text>
      <view class="demo-row">
        <dd-button type="primary" @click="tip('主要按钮')">主要 Primary</dd-button>
        <dd-button type="secondary">次要 Secondary</dd-button>
        <dd-button type="ghost">幽灵 Ghost</dd-button>
        <dd-button type="text">文字 Text</dd-button>
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-button type="success">成功 Success</dd-button>
        <dd-button type="warning">警告 Warning</dd-button>
        <dd-button type="danger">危险 Danger</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">按钮尺寸 Size</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary">小号 SM</dd-button>
        <dd-button size="md" type="primary">中号 MD</dd-button>
        <dd-button size="lg" type="primary">大号 LG</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">圆角 Round</text>
      <view class="demo-row">
        <dd-button type="primary" round>圆角</dd-button>
        <dd-button type="secondary" round>圆角</dd-button>
        <dd-button type="danger" round>圆角</dd-button>
        <dd-button type="ghost" round>圆角</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">加载 Loading</text>
      <view class="demo-row">
        <dd-button type="primary" loading>加载中</dd-button>
        <dd-button type="success" loading>加载中</dd-button>
        <dd-button type="ghost" loading>加载中</dd-button>
        <dd-button size="lg" type="danger" loading>加载中</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <view class="demo-row">
        <dd-button type="primary" disabled>禁用</dd-button>
        <dd-button type="secondary" disabled>禁用</dd-button>
        <dd-button type="danger" disabled>禁用</dd-button>
        <dd-button type="ghost" disabled>禁用</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">图标 Icon</text>
      <view class="demo-row">
        <dd-button type="primary" icon="plus">添加歌曲</dd-button>
        <dd-button type="secondary" icon="arrow" icon-position="right">下一步</dd-button>
        <dd-button type="success" icon="success">确认</dd-button>
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-button type="danger" icon="delete-o" icon-position="right">删除</dd-button>
        <dd-button size="sm" type="primary" icon="music">收藏</dd-button>
      </view>
      <text class="demo-label" style="margin-top:24rpx">纯图标按钮 Icon Only</text>
      <view class="demo-row">
        <dd-button type="primary" icon="like-o" />
        <dd-button type="secondary" icon="music" />
        <dd-button type="danger" icon="cross" />
        <dd-button size="sm" type="primary" icon="plus" />
        <dd-button size="lg" type="primary" icon="like-o" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">状态组合 States</text>
      <text class="demo-label">禁用 + 圆角 + 加载</text>
      <view class="demo-row">
        <dd-button type="primary" round disabled>禁用圆角</dd-button>
        <dd-button type="danger" round loading>加载圆角</dd-button>
        <dd-button type="success" round icon="success" disabled>禁用圆角图标</dd-button>
      </view>
      <text class="demo-label" style="margin-top:24rpx">文字按钮 Text 各类型</text>
      <view class="demo-row">
        <dd-button type="text" size="sm">小号文字</dd-button>
        <dd-button type="text">中号文字</dd-button>
        <dd-button type="text" size="lg">大号文字</dd-button>
      </view>
      <text class="demo-label" style="margin-top:24rpx">幽灵 + 尺寸 Ghost Size</text>
      <view class="demo-row">
        <dd-button type="ghost" size="sm">幽灵 SM</dd-button>
        <dd-button type="ghost" size="md">幽灵 MD</dd-button>
        <dd-button type="ghost" size="lg">幽灵 LG</dd-button>
      </view>
      <text class="demo-label" style="margin-top:24rpx">圆角 + 尺寸 Round Size</text>
      <view class="demo-row">
        <dd-button type="primary" round size="sm">圆角 SM</dd-button>
        <dd-button type="primary" round size="md">圆角 MD</dd-button>
        <dd-button type="primary" round size="lg">圆角 LG</dd-button>
      </view>
      <text class="demo-label" style="margin-top:24rpx">右侧图标 Icon Right</text>
      <view class="demo-row">
        <dd-button type="primary" icon="arrow" icon-position="right">下一首</dd-button>
        <dd-button type="warning" icon="warning" icon-position="right">注意</dd-button>
        <dd-button type="ghost" icon="arrow" icon-position="right">更多</dd-button>
      </view>
      <text class="demo-label" style="margin-top:24rpx">各状态 Disabled 各类型</text>
      <view class="demo-row">
        <dd-button type="primary" disabled>主要禁用</dd-button>
        <dd-button type="success" disabled>成功禁用</dd-button>
        <dd-button type="warning" disabled>警告禁用</dd-button>
        <dd-button type="danger" disabled>危险禁用</dd-button>
      </view>
      <text class="demo-label" style="margin-top:24rpx">加载 Loading 各类型</text>
      <view class="demo-row">
        <dd-button type="primary" loading>主要加载</dd-button>
        <dd-button type="secondary" loading>次要加载</dd-button>
        <dd-button type="success" loading>成功加载</dd-button>
        <dd-button type="danger" loading>危险加载</dd-button>
      </view>
      <text class="demo-label" style="margin-top:24rpx">全宽 Block</text>
      <dd-button type="primary" block>全宽按钮</dd-button>
      <dd-button type="secondary" block round style="margin-top:12rpx">全宽圆角</dd-button>
      <dd-button type="danger" block loading style="margin-top:12rpx">全宽加载中</dd-button>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdButton, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function tip(m){ showToast(m) }
</script>

<style scoped>
.demo-page { }
</style>
