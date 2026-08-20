<template>
  <dd-top-navbar title="折叠项" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础用法</text>
      <dd-collapse v-model="active" style="margin-top:16rpx">
        <dd-collapse-item name="1" title="套餐内容">
          <view class="demo-note">啤酒12瓶 + 果盘2份 + 小吃4份</view>
        </dd-collapse-item>
        <dd-collapse-item name="2" title="使用规则">
          <view class="demo-note">请在有效期内使用，过期作废</view>
        </dd-collapse-item>
      </dd-collapse>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用状态</text>
      <dd-collapse v-model="active2" style="margin-top:16rpx">
        <dd-collapse-item name="1" title="可用项">
          <view class="demo-note">点击可展开</view>
        </dd-collapse-item>
        <dd-collapse-item name="2" title="已禁用项" disabled>
          <view class="demo-note">此项目不可用</view>
        </dd-collapse-item>
        <dd-collapse-item name="3" title="另一个可用项">
          <view class="demo-note">内容</view>
        </dd-collapse-item>
      </dd-collapse>
    </view>

    <view class="demo-section">
      <text class="demo-title">带右侧值</text>
      <dd-collapse v-model="active3" style="margin-top:16rpx">
        <dd-collapse-item name="1" title="已预约" value="3 项">
          <view class="demo-note">您有 3 项待处理预约</view>
        </dd-collapse-item>
        <dd-collapse-item name="2" title="已完成" value="12 项">
          <view class="demo-note">历史完成记录</view>
        </dd-collapse-item>
        <dd-collapse-item name="3" title="评价" value="待评价">
          <view class="demo-note">有 2 单待评价</view>
        </dd-collapse-item>
      </dd-collapse>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义标题槽</text>
      <dd-collapse v-model="active4" style="margin-top:16rpx">
        <dd-collapse-item name="1" value="VIP">
          <template #title>
            <text style="color:#F5A623;font-weight:700">会员特权</text>
          </template>
          <view class="demo-note">尊享会员专享权益</view>
        </dd-collapse-item>
        <dd-collapse-item name="2">
          <template #title>
            <text style="color:#2D4BA0;font-weight:700">账户安全</text>
          </template>
          <view class="demo-note">修改密码、绑定手机等</view>
        </dd-collapse-item>
      </dd-collapse>
    </view>

    <view class="demo-section">
      <text class="demo-title">无边框</text>
      <dd-collapse v-model="active5" style="margin-top:16rpx">
        <dd-collapse-item name="1" title="选项 A" :border="false">
          <view class="demo-note">无边框样式</view>
        </dd-collapse-item>
        <dd-collapse-item name="2" title="选项 B" :border="false">
          <view class="demo-note">无边框样式</view>
        </dd-collapse-item>
      </dd-collapse>
    </view>

    <view class="demo-section">
      <text class="demo-title">默认展开</text>
      <dd-collapse v-model="active6" style="margin-top:16rpx">
        <dd-collapse-item name="a" title="展开项 A">
          <view class="demo-note">默认展开的内容</view>
        </dd-collapse-item>
        <dd-collapse-item name="b" title="收起项 B">
          <view class="demo-note">默认收起</view>
        </dd-collapse-item>
      </dd-collapse>
      <text class="demo-note">初始展开项: {{ active6 }}</text>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdCollapse, DdCollapseItem, DdToast } from '@didaoktv/didaoui-uniapp'
import DemoNav from '../../components/DemoNav.vue'


const active = ref(['1'])
const active2 = ref<string[]>([])
const active3 = ref(['1'])
const active4 = ref<string[]>([])
const active5 = ref<string[]>([])
const active6 = ref(['a'])
</script>

<style lang="scss" scoped>
.demo-page { }
</style>