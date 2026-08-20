<template>
  <dd-top-navbar title="统计卡片" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">变体 Variant</text>
      <view class="demo-row">
        <dd-stat-card variant="primary" title="本月消费" :value="2880" prefix="¥" style="flex:1" />
        <dd-stat-card variant="accent" title="剩余时长" :value="120" prefix="分钟" style="flex:1" />
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-stat-card variant="success" title="在线人数" :value="86" style="flex:1" />
        <dd-stat-card variant="warning" title="待处理" :value="12" style="flex:1" />
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-stat-card variant="error" title="异常订单" :value="3" style="flex:1" />
        <dd-stat-card variant="neutral" title="总房间" :value="56" style="flex:1" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">趋势 Trend</text>
      <view class="demo-row">
        <dd-stat-card variant="primary" title="本周营收" :value="12580" prefix="¥" trend="up" trend-value="12.5%" style="flex:1" />
        <dd-stat-card variant="accent" title="活跃用户" :value="342" trend="down" trend-value="3.2%" style="flex:1" />
      </view>
      <view class="demo-row" style="margin-top:20rpx">
        <dd-stat-card variant="success" title="完成订单" :value="1280" trend="up" trend-value="8%" style="flex:1" />
        <dd-stat-card variant="warning" title="退订" :value="24" trend="down" trend-value="5%" style="flex:1" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">无趋势 No Trend</text>
      <view class="demo-row">
        <dd-stat-card variant="primary" title="今日签到" :value="96" trend="none" style="flex:1" />
        <dd-stat-card variant="neutral" title="总会员" :value="4520" trend="none" style="flex:1" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Footer 底部</text>
      <view class="demo-row">
        <dd-stat-card variant="primary" title="VIP 会员" :value="328" prefix="人" trend="up" trend-value="15%" style="flex:1">
          <template #footer><text>较上月 +42 人</text></template>
        </dd-stat-card>
        <dd-stat-card variant="accent" title="总消费" :value="58240" prefix="¥" trend="up" trend-value="22%" style="flex:1">
          <template #footer><text>年度累计</text></template>
        </dd-stat-card>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Hoverable 可悬浮</text>
      <view class="demo-row">
        <dd-stat-card variant="primary" title="可点击" :value="999" :hoverable="true" style="flex:1" @click="tip('点击统计卡')" />
      </view>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdStatCard, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function tip(m){ showToast(m) }
</script>

<style scoped>
.demo-page { }
</style>