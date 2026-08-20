<template>
  <dd-top-navbar title="徽标" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">类型 Type</text>
      <text class="demo-label">Dot 圆点</text>
      <view class="demo-row">
        <dd-badge type="dot" variant="error">
          <view class="badge-box"><text>消息</text></view>
        </dd-badge>
        <dd-badge type="dot" variant="primary">
          <view class="badge-box"><text>通知</text></view>
        </dd-badge>
        <dd-badge type="dot" variant="success">
          <view class="badge-box"><text>新订单</text></view>
        </dd-badge>
      </view>

      <text class="demo-label" style="margin-top:24rpx">Number 数字</text>
      <view class="demo-row">
        <dd-badge type="number" variant="error" :content="5">
          <view class="badge-box"><text>购物车</text></view>
        </dd-badge>
        <dd-badge type="number" variant="error" :content="99">
          <view class="badge-box"><text>未读</text></view>
        </dd-badge>
        <dd-badge type="number" variant="error" :content="150" :max="99">
          <view class="badge-box"><text>消息</text></view>
        </dd-badge>
      </view>

      <text class="demo-label" style="margin-top:24rpx">Text 文字</text>
      <view class="demo-row">
        <dd-badge type="text" variant="primary" content="HOT">
          <view class="badge-box"><text>热门</text></view>
        </dd-badge>
        <dd-badge type="text" variant="warning" content="NEW">
          <view class="badge-box"><text>新歌</text></view>
        </dd-badge>
        <dd-badge type="text" variant="error" content="-50%">
          <view class="badge-box"><text>特惠</text></view>
        </dd-badge>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">变体 Variant</text>
      <view class="demo-row">
        <dd-badge type="dot" variant="primary">
          <view class="badge-box-sm"><text>P</text></view>
        </dd-badge>
        <dd-badge type="dot" variant="error">
          <view class="badge-box-sm"><text>E</text></view>
        </dd-badge>
        <dd-badge type="dot" variant="success">
          <view class="badge-box-sm"><text>S</text></view>
        </dd-badge>
        <dd-badge type="dot" variant="warning">
          <view class="badge-box-sm"><text>W</text></view>
        </dd-badge>
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-badge type="number" variant="primary" :content="8">
          <view class="badge-box-sm"><text>P</text></view>
        </dd-badge>
        <dd-badge type="number" variant="error" :content="88">
          <view class="badge-box-sm"><text>E</text></view>
        </dd-badge>
        <dd-badge type="number" variant="success" :content="6">
          <view class="badge-box-sm"><text>S</text></view>
        </dd-badge>
        <dd-badge type="number" variant="warning" :content="3">
          <view class="badge-box-sm"><text>W</text></view>
        </dd-badge>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">ShowZero 零值显示</text>
      <view class="demo-row">
        <dd-badge type="number" variant="error" :content="0" :show-zero="false">
          <view class="badge-box"><text>默认隐藏 0</text></view>
        </dd-badge>
        <dd-badge type="number" variant="error" :content="0" :show-zero="true">
          <view class="badge-box"><text>显示 0</text></view>
        </dd-badge>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Max 上限</text>
      <view class="demo-row">
        <dd-badge type="number" variant="error" :content="50" :max="99">
          <view class="badge-box"><text>50</text></view>
        </dd-badge>
        <dd-badge type="number" variant="error" :content="150" :max="99">
          <view class="badge-box"><text>150→99+</text></view>
        </dd-badge>
        <dd-badge type="number" variant="primary" :content="1000" :max="99">
          <view class="badge-box"><text>1000→99+</text></view>
        </dd-badge>
      </view>
    </view>
  <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdBadge } from '@didaoktv/didaoui-uniapp'


</script>

<style scoped>
.demo-page { }
.badge-box{width:100rpx;height:100rpx;background:#2a2a2a;border-radius:12rpx;display:flex;align-items:center;justify-content:center;color:#ccc;}
.badge-box-sm{width:80rpx;height:80rpx;background:#2a2a2a;border-radius:12rpx;display:flex;align-items:center;justify-content:center;color:#ccc;}
</style>