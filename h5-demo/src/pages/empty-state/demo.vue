<template>
  <dd-top-navbar title="空状态" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">类型 Type</text>
      <view class="empty-grid">
        <dd-empty-state type="no-data" />
        <dd-empty-state type="no-result" />
        <dd-empty-state type="error" />
        <dd-empty-state type="network" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义内容 Custom</text>
      <dd-empty-state icon="music-o" title="没有歌曲" description="去发现更多好听的音乐" button-text="去发现" show-button @action="tip('去发现')" />
    </view>

    <view class="demo-section">
      <text class="demo-title">无按钮 No Button</text>
      <dd-empty-state icon="envelop-o" title="收件箱为空" :show-button="false" description="暂无新消息" />
    </view>

    <view class="demo-section">
      <text class="demo-title">不同图标 Icons</text>
      <view class="empty-grid">
        <dd-empty-state icon="music" title="没有唱歌记录" :show-button="false" />
        <dd-empty-state icon="medal" title="暂无排行" :show-button="false" />
        <dd-empty-state icon="like-o" title="没有收藏" :show-button="false" />
        <dd-empty-state icon="notes-o" title="暂无评论" :show-button="false" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">插槽 Slots</text>
      <dd-empty-state show-button>
        <template #image>
          <view class="empty-slot-icon">
            <dd-icon name="gift-o" size="80rpx" color="#FFC107" />
          </view>
        </template>
        <template #title><text style="color:#FFC107;font-weight:700">恭喜完成任务</text></template>
        <template #description><text style="color:#9E9E9E">获得 100 积分奖励</text></template>
        <template #button><dd-button type="primary" size="sm">领取奖励</dd-button></template>
      </dd-empty-state>
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdEmptyState, DdButton, DdToast } from '@didaoktv/didaoui-uniapp'
import DdIcon from '@didaoktv/didaoui-uniapp/components/dd-icon/dd-icon.vue'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

function tip(m){ showToast(m) }
</script>

<style scoped>
.demo-page { }
.empty-grid{display:grid;grid-template-columns:1fr 1fr;gap:20rpx;}
.empty-slot-icon{line-height:1;display:flex;align-items:center;justify-content:center;}
</style>
