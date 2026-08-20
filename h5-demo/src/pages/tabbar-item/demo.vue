<template>
  <dd-top-navbar title="标签项" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">标签项变体</text>
      <text class="demo-note">展示 icon / dot / badge / name 等属性</text>
      <dd-tabbar
        v-model="active"
        :fixed="false"
        :placeholder="false"
        :border="true"
      >
        <dd-tabbar-item icon="wap-home-o" label="首页" />
        <dd-tabbar-item icon="star" label="收藏" dot />
        <dd-tabbar-item icon="search" label="搜索" badge="9" />
        <dd-tabbar-item icon="chat-o" label="消息" badge="99" />
        <dd-tabbar-item icon="user-o" label="我的" />
      </dd-tabbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">不同 badge 数值</text>
      <dd-tabbar
        v-model="active2"
        :fixed="false"
        :placeholder="false"
        :border="true"
      >
        <dd-tabbar-item icon="envelop-o" label="邮件" badge="New" />
        <dd-tabbar-item icon="bell" label="通知" dot />
        <dd-tabbar-item icon="notes-o" label="任务" badge="5" />
        <dd-tabbar-item icon="setting-o" label="设置" />
      </dd-tabbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义图标槽</text>
      <dd-tabbar
        v-model="active3"
        :fixed="false"
        :placeholder="false"
        :border="true"
      >
        <dd-tabbar-item label="首页">
          <template #icon="{ active }">
            <dd-icon name="wap-home-o" :color="active ? '#F5A623' : '#9E9E9E'" size="36rpx" />
          </template>
        </dd-tabbar-item>
        <dd-tabbar-item label="音乐">
          <template #icon="{ active }">
            <dd-icon name="music-o" :color="active ? '#F5A623' : '#9E9E9E'" size="36rpx" />
          </template>
        </dd-tabbar-item>
        <dd-tabbar-item label="我的">
          <template #icon="{ active }">
            <dd-icon name="user-o" :color="active ? '#F5A623' : '#9E9E9E'" size="36rpx" />
          </template>
        </dd-tabbar-item>
      </dd-tabbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义标签文字槽</text>
      <dd-tabbar
        v-model="active4"
        :fixed="false"
        :placeholder="false"
        :border="true"
      >
        <dd-tabbar-item icon="music-o" name="music">点歌</dd-tabbar-item>
        <dd-tabbar-item icon="notes-o" name="queue">已点</dd-tabbar-item>
        <dd-tabbar-item icon="bar-chart-o" name="rank">排行</dd-tabbar-item>
      </dd-tabbar>
      <text class="demo-note">name 属性作为标识符：{{ active4 }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">无图标标签项</text>
      <dd-tabbar
        v-model="active5"
        :fixed="false"
        :placeholder="false"
        :border="true"
      >
        <dd-tabbar-item label="全部" />
        <dd-tabbar-item label="在线" />
        <dd-tabbar-item label="离线" />
      </dd-tabbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">徽章与红点组合</text>
      <dd-tabbar
        v-model="active6"
        :fixed="false"
        :placeholder="false"
        :border="true"
      >
        <dd-tabbar-item icon="shopping-cart-o" label="购物车" badge="3" />
        <dd-tabbar-item icon="like-o" label="喜欢" dot />
        <dd-tabbar-item icon="cart-o" label="订单" badge="12" />
        <dd-tabbar-item icon="credit-pay" label="钱包" />
      </dd-tabbar>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdTabbar, DdTabbarItem, DdToast } from '@didaoktv/didaoui-uniapp'
import DdIcon from '@didaoktv/didaoui-uniapp/components/dd-icon/dd-icon.vue'



const active = ref(0)
const active2 = ref(0)
const active3 = ref(0)
const active4 = ref('music')
const active5 = ref(0)
const active6 = ref(0)
</script>

<style lang="scss" scoped>
.demo-page { padding-top: 88rpx; }
</style>
