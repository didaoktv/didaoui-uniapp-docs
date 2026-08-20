<template>
  <dd-top-navbar title="抽屉" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">左侧抽屉</text>
      <view class="demo-row">
        <dd-button type="primary" @click="showL = true">打开左侧</dd-button>
        <dd-button type="secondary" @click="showR = true">打开右侧</dd-button>
      </view>
      <text class="demo-note">position: left / right</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义宽度</text>
      <view class="demo-row">
        <dd-button type="primary" @click="showW = true">宽度 60%</dd-button>
        <dd-button type="secondary" @click="showW2 = true">宽度 90%</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">遮罩不可关闭</text>
      <dd-button type="primary" @click="showNM = true">打开（遮罩不可点）</dd-button>
    </view>

    <view class="demo-section">
      <text class="demo-title">带 VIP 头部信息</text>
      <dd-button type="primary" @click="showVIP = true">打开 VIP 抽屉</dd-button>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义头部槽</text>
      <dd-button type="primary" @click="showHD = true">自定义头部</dd-button>
    </view>

    <view class="demo-section">
      <text class="demo-title">事件回调</text>
      <text class="demo-note">事件日志：{{ drawerEvent }}</text>
      <dd-button type="primary" @click="showEv = true">触发事件抽屉</dd-button>
    </view>

    <dd-drawer
      v-model="showL"
      position="left"
      username="张先生"
      vip-level="黄金会员"
    >
      <view style="padding:32rpx;color:#9E9E9E">
        <view style="display:flex;flex-direction:column;gap:24rpx">
          <text>个人中心</text>
          <text>我的订单</text>
          <text>优惠劵</text>
          <text>设置</text>
        </view>
      </view>
    </dd-drawer>

    <dd-drawer
      v-model="showR"
      position="right"
      :avatar="''"
      username=""
      vip-level=""
    >
      <view style="padding:32rpx;color:#9E9E9E">筛选条件内容</view>
    </dd-drawer>

    <dd-drawer
      v-model="showW"
      position="left"
      width="60%"
      username="窄抽屉"
      vip-level=""
    >
      <view style="padding:32rpx;color:#9E9E9E">宽度 60%</view>
    </dd-drawer>

    <dd-drawer
      v-model="showW2"
      position="right"
      width="90%"
      username="宽抽屉"
      vip-level=""
    >
      <view style="padding:32rpx;color:#9E9E9E">宽度 90%</view>
    </dd-drawer>

    <dd-drawer
      v-model="showNM"
      position="left"
      :mask-closable="false"
      username="不可关闭"
      vip-level=""
    >
      <view style="padding:32rpx;color:#9E9E9E">点击遮罩无法关闭，只能通过按钮关闭</view>
      <view style="padding:24rpx">
        <dd-button type="primary" @click="showNM = false">关闭</dd-button>
      </view>
    </dd-drawer>

    <dd-drawer
      v-model="showVIP"
      position="left"
      :avatar="vipAvatar"
      username="李小明"
      vip-level="钻石会员 · 余额 8888"
    >
      <view style="padding:32rpx;color:#9E9E9E">
        <view style="display:flex;flex-direction:column;gap:24rpx">
          <text>会员等级：钻石</text>
          <text>累计消费：¥88,888</text>
          <text>剩余点数：12,300</text>
        </view>
      </view>
    </dd-drawer>

    <dd-drawer
      v-model="showHD"
      position="left"
    >
      <template #header>
        <view style="padding:32rpx;background:#2D4BA0;color:#fff;font-weight:700">
          自定义头部
        </view>
      </template>
      <view style="padding:32rpx;color:#9E9E9E">自定义头部内容</view>
    </dd-drawer>

    <dd-drawer
      v-model="showEv"
      position="left"
      username="事件演示"
      vip-level=""
      @open="drawerEvent = 'open 触发'"
      @close="drawerEvent = 'close 触发'"
      @opened="drawerEvent = 'opened 触发'"
      @closed="drawerEvent = 'closed 触发'"
    >
      <view style="padding:32rpx;color:#9E9E9E">查看事件日志变化</view>
    </dd-drawer>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdDrawer, DdButton, DdToast } from '@didaoktv/didaoui-uniapp'
import DemoNav from '../../components/DemoNav.vue'


const showL = ref(false)
const showR = ref(false)
const showW = ref(false)
const showW2 = ref(false)
const showNM = ref(false)
const showVIP = ref(false)
const showHD = ref(false)
const showEv = ref(false)
const drawerEvent = ref('暂无事件')

const vipAvatar = ''
</script>

<style lang="scss" scoped>
.demo-page { }
</style>