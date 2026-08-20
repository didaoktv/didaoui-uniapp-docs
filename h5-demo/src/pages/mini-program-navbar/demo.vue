<template>
  <dd-top-navbar title="小程序导航栏" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Variant — Default / Search / Custom</text>
      <view class="demo-col" style="gap:20rpx">
        <dd-mini-program-navbar variant="default" title="首页" show-back @back="tip('返回')" />
        <dd-mini-program-navbar variant="search" v-model:search-value="kw" search-placeholder="搜索歌曲" @search="tip('搜索：'+kw)" />
        <dd-mini-program-navbar variant="custom">
          <view class="custom-title">自定义标题</view>
        </dd-mini-program-navbar>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Transparent — 透明导航栏</text>
      <dd-mini-program-navbar variant="default" title="透明导航" transparent show-back @back="tip('返回')" />
      <view style="height:200rpx;background:linear-gradient(180deg,#2D4BA0,#0A0A0A);display:flex;align-items:center;justify-content:center">
        <text style="color:#FFC107;font-size:28rpx">背景内容可见</text>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">ShowBack — 控制返回按钮</text>
      <view class="demo-col" style="gap:20rpx">
        <dd-mini-program-navbar variant="default" title="有返回" show-back @back="tip('返回')" />
        <dd-mini-program-navbar variant="default" title="无返回" :show-back="false" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">BackText — 自定义返回文字</text>
      <dd-mini-program-navbar variant="default" title="详情" show-back back-text="返回列表" @back="tip('返回')" />
    </view>

    <view class="demo-section">
      <text class="demo-title">Search — 搜索框 variant</text>
      <dd-mini-program-navbar variant="search" v-model:search-value="kw2" search-placeholder="搜索包房或歌曲" @search="tip('搜索：'+kw2)" />
    </view>

    <view class="demo-section">
      <text class="demo-title">Custom — 自定义 slot + below</text>
      <dd-mini-program-navbar variant="custom">
        <view class="custom-title" style="color:#FFC107">自定义内容</view>
        <template #below>
          <view style="padding:16rpx;background:#171717;display:flex;gap:16rpx">
            <dd-button size="sm" type="primary">关注</dd-button>
            <dd-button size="sm" type="ghost">分享</dd-button>
          </view>
        </template>
      </dd-mini-program-navbar>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdMiniProgramNavbar, DdButton, DdToast } from '@didaoktv/didaoui-uniapp'

import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

const kw = ref('')
const kw2 = ref('')
function tip(m: string) { showToast(m) }
</script>

<style scoped>
.demo-page { }
.custom-title {
  color: #FFC107;
  font-size: 30rpx;
  font-weight: 700;
}
</style>