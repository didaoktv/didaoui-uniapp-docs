<template>
  <dd-top-navbar title="顶部导航栏" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础导航栏</text>
      <dd-top-navbar
        title="包房详情"
        :fixed="false"
        :placeholder="false"
        :border="true"
        show-back
        @back="tip('返回')"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">透明背景</text>
      <dd-top-navbar
        title="活动详情"
        transparent
        :fixed="false"
        :placeholder="false"
        show-back
        @back="tip('返回')"
      />
      <view style="height:60rpx;background:linear-gradient(135deg,#2D4BA0,#F5A623);border-radius:8rpx;display:flex;align-items:center;justify-content:center;color:#fff;font-size:22rpx">
        透明背景下的内容区域
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">无边框</text>
      <dd-top-navbar
        title="无边框导航"
        :fixed="false"
        :placeholder="false"
        :border="false"
        show-back
        @back="tip('返回')"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">隐藏返回按钮</text>
      <dd-top-navbar
        title="不可返回"
        :fixed="false"
        :placeholder="false"
        :show-back="false"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">带返回文字</text>
      <dd-top-navbar
        title="设置"
        back-text="返回"
        :fixed="false"
        :placeholder="false"
        show-back
        @back="tip('返回')"
      />
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义左侧槽</text>
      <dd-top-navbar
        title="搜索"
        :fixed="false"
        :placeholder="false"
        :show-back="false"
      >
        <template #left>
          <text style="color:#F5A623;font-size:28rpx" @click="tip('扫码')">扫码</text>
        </template>
      </dd-top-navbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义右侧槽</text>
      <dd-top-navbar
        title="我的订单"
        :fixed="false"
        :placeholder="false"
        show-back
        @back="tip('返回')"
      >
        <template #right>
          <text style="color:#F5A623;font-size:28rpx" @click="tip('搜索')">搜索</text>
          <text style="color:#F5A623;font-size:28rpx;margin-left:24rpx" @click="tip('更多')">⋯</text>
        </template>
      </dd-top-navbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义标题槽</text>
      <dd-top-navbar
        :fixed="false"
        :placeholder="false"
        show-back
        @back="tip('返回')"
      >
        <template #default>
          <view style="display:flex;align-items:center;gap:8rpx">
            <text style="color:#F5A623;font-size:30rpx;font-weight:700">豪华大包</text>
            <text style="color:#9E9E9E;font-size:22rpx">容量10人</text>
          </view>
        </template>
      </dd-top-navbar>
    </view>

    <view class="demo-section">
      <text class="demo-title">仅右侧按钮</text>
      <dd-top-navbar
        title="消息中心"
        :fixed="false"
        :placeholder="false"
        :show-back="false"
      >
        <template #right>
          <text style="color:#F5A623;font-size:28rpx" @click="tip('编辑')">编辑</text>
        </template>
      </dd-top-navbar>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { DdTopNavbar, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'
import DemoNav from '../../components/DemoNav.vue'


function tip(m: string) {
  showToast(m)
}
</script>

<style lang="scss" scoped>
.demo-page { }
</style>