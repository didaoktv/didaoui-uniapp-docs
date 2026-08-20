<template>
  <dd-top-navbar title="步骤条" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Horizontal 水平</text>
      <dd-steps direction="horizontal" :active="1">
        <dd-step title="步骤一" description="已完成" />
        <dd-step title="步骤二" description="进行中" />
        <dd-step title="步骤三" description="待执行" />
      </dd-steps>
    </view>

    <view class="demo-section">
      <text class="demo-title">Vertical 垂直</text>
      <dd-steps direction="vertical" :active="2">
        <dd-step title="提交申请" description="填写申请信息" />
        <dd-step title="审核" description="等待审核" />
        <dd-step title="通过" description="审核通过" />
        <dd-step title="完成" description="完成所有流程" />
      </dd-steps>
    </view>

    <view class="demo-section">
      <text class="demo-title">不同进度 Progress</text>
      <text class="demo-label">Active = 0</text>
      <dd-steps direction="horizontal" :active="0">
        <dd-step title="Step 1" />
        <dd-step title="Step 2" />
        <dd-step title="Step 3" />
        <dd-step title="Step 4" />
      </dd-steps>

      <text class="demo-label" style="margin-top:24rpx">Active = 2</text>
      <dd-steps direction="horizontal" :active="2">
        <dd-step title="Step 1" />
        <dd-step title="Step 2" />
        <dd-step title="Step 3" />
        <dd-step title="Step 4" />
      </dd-steps>

      <text class="demo-label" style="margin-top:24rpx">Active = 4 (完成)</text>
      <dd-steps direction="horizontal" :active="4">
        <dd-step title="Step 1" />
        <dd-step title="Step 2" />
        <dd-step title="Step 3" />
        <dd-step title="Step 4" />
      </dd-steps>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义颜色 Custom Color</text>
      <dd-steps direction="horizontal" :active="1" active-color="#FF7043" inactive-color="#424242">
        <dd-step title="订单" />
        <dd-step title="支付" />
        <dd-step title="发货" />
        <dd-step title="收货" />
      </dd-steps>
    </view>

    <view class="demo-section">
      <text class="demo-title">步骤数量 Step Count</text>
      <dd-steps direction="horizontal" :active="1">
        <dd-step title="1" />
        <dd-step title="2" />
        <dd-step title="3" />
      </dd-steps>
      <view style="height:16rpx"></view>
      <dd-steps direction="horizontal" :active="2">
        <dd-step title="A" />
        <dd-step title="B" />
        <dd-step title="C" />
        <dd-step title="D" />
        <dd-step title="E" />
      </dd-steps>
    </view>

    <view class="demo-section">
      <text class="demo-title">注册流程 Registration Flow</text>
      <dd-steps direction="vertical" :active="1">
        <dd-step title="填写信息" description="用户名、密码、邮箱" />
        <dd-step title="邮箱验证" description="点击验证链接" />
        <dd-step title="完善资料" description="头像、昵称、性别" />
        <dd-step title="开通会员" description="选择会员套餐" />
      </dd-steps>
    </view>
  <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdSteps, DdStep } from '@didaoktv/didaoui-uniapp'


</script>

<style scoped>
.demo-page { }
</style>