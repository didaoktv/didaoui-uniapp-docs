<template>
  <dd-top-navbar title="列表项" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础 Basic</text>
      <view class="dd-list-col">
        <dd-list-cell title="会员等级" value="黄金会员" />
        <dd-list-cell title="当前包房" value="A01 总统套房" />
        <dd-list-cell title="剩余时间" value="02:30:00" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">图标 Icon</text>
      <view class="dd-list-col">
        <dd-list-cell title="唱歌功能" icon="music" />
        <dd-list-cell title="点歌功能" icon="music-o" />
        <dd-list-cell title="投票功能" icon="info-o" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">副标题 Subtitle</text>
      <view class="dd-list-col">
        <dd-list-cell title="张先生" subtitle="VIP 会员 · 已预订 12 次" value="已到店" />
        <dd-list-cell title="李女士" subtitle="普通会员 · 首次光临" value="待确认" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">箭头 Arrow / Link</text>
      <view class="dd-list-col">
        <dd-list-cell title="我的订单" value="3 条" :arrow="true" :is-link="true" @click="tip('订单')" />
        <dd-list-cell title="设置" value="" :arrow="true" :is-link="true" @click="tip('设置')" />
        <dd-list-cell title="帮助中心" :arrow="true" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">无边框 Borderless</text>
      <view class="dd-list-col">
        <dd-list-cell title="项目一" value="值一" :borderless="true" />
        <dd-list-cell title="项目二" value="值二" :borderless="true" />
        <dd-list-cell title="项目三" value="值三" :borderless="true" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">右侧插槽 Right Slot</text>
      <view class="dd-list-col">
        <dd-list-cell title="自定义右侧" icon="setting-o">
          <template #value><text style="color:#FFC107">自定义值</text></template>
          <template #right-icon><text style="color:#757575;font-size:22rpx">附加</text></template>
        </dd-list-cell>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">状态组合 States</text>
      <view class="dd-list-col">
        <dd-list-cell icon="medal" title="我的排行" subtitle="周榜 TOP10" value="第 5 名" :arrow="true" :is-link="true" />
        <dd-list-cell icon="gift-o" title="我的礼物" :borderless="true" />
        <dd-list-cell title="退出登录" value="" :arrow="true" :is-link="true" @click="tip('退出')" />
      </view>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdListCell, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function tip(m){ showToast(m) }
</script>

<style scoped>
.demo-page { }
.dd-list-col{display:flex;flex-direction:column;background:#1a1a1a;border-radius:12rpx;overflow:hidden;}
</style>
