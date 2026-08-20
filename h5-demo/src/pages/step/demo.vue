<template>
  <dd-top-navbar title="步骤项" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Horizontal 水平</text>
      <dd-steps direction="horizontal" :active="1">
        <dd-step title="提交订单" description="选择商品" />
        <dd-step title="支付" description="完成支付" />
        <dd-step title="配送" description="等待配送" />
        <dd-step title="完成" description="确认收货" />
      </dd-steps>
    </view>

    <view class="demo-section">
      <text class="demo-title">Active 进度</text>
      <dd-steps direction="horizontal" :active="0">
        <dd-step title="步骤一" description="已完成" />
        <dd-step title="步骤二" description="进行中" />
        <dd-step title="步骤三" description="待执行" />
      </dd-steps>

      <text class="demo-label" style="margin-top:24rpx">Active = 2</text>
      <dd-steps direction="horizontal" :active="2">
        <dd-step title="步骤一" />
        <dd-step title="步骤二" />
        <dd-step title="步骤三" />
      </dd-steps>

      <text class="demo-label" style="margin-top:24rpx">Active = 3 (全部完成)</text>
      <dd-steps direction="horizontal" :active="3">
        <dd-step title="步骤一" />
        <dd-step title="步骤二" />
        <dd-step title="步骤三" />
      </dd-steps>
    </view>

    <view class="demo-section">
      <text class="demo-title">Vertical 垂直</text>
      <dd-steps direction="vertical" :active="1">
        <dd-step title="注册" description="填写注册信息" />
        <dd-step title="实名认证" description="提交身份证信息" />
        <dd-step title="开通服务" description="等待审核" />
        <dd-step title="使用" description="开始使用" />
      </dd-steps>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义颜色 Custom Color</text>
      <dd-steps direction="horizontal" :active="1" active-color="#42A5F5" inactive-color="#616161">
        <dd-step title="步骤 A" />
        <dd-step title="步骤 B" />
        <dd-step title="步骤 C" />
      </dd-steps>
    </view>

    <view class="demo-section">
      <text class="demo-title">步骤信息 Step Info</text>
      <dd-steps direction="horizontal" :active="2">
        <dd-step title="预订" description="选择日期和时间" />
        <dd-step title="确认" description="确认订单信息" />
        <dd-step title="支付" description="完成在线支付" />
        <dd-step title="使用" description="到店消费" />
        <dd-step title="评价" description="分享体验" />
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