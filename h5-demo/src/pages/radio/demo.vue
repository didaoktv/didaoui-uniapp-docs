<template>
  <dd-top-navbar title="单选框" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">单选组 Basic Radio Group</text>
      <view class="demo-col">
        <dd-radio v-model="room" value="standard" label="标准包厢（4-6人）" />
        <dd-radio v-model="room" value="mini" label="小包厢（2-4人）" />
        <dd-radio v-model="room" value="vip" label="VIP包厢" />
      </view>
      <text class="demo-note">当前选择：{{ room }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <text class="demo-label">默认 MD</text>
      <view class="demo-row">
        <dd-radio :model-value="'a'" value="a" label="已选中" />
        <dd-radio :model-value="'a'" value="b" label="未选中" />
      </view>
      <text class="demo-label" style="margin-top:16rpx">小号 SM</text>
      <view class="demo-row">
        <dd-radio :model-value="'x'" value="x" size="sm" label="已选中" />
        <dd-radio :model-value="'x'" value="y" size="sm" label="未选中" />
      </view>
      <text class="demo-label" style="margin-top:16rpx">尺寸对比 Size Compare</text>
      <view class="demo-row">
        <dd-radio :model-value="'m'" value="m" label="MD" />
        <dd-radio :model-value="'m'" value="n" label="MD" />
        <dd-radio :model-value="'s'" value="s" size="sm" label="SM" />
        <dd-radio :model-value="'s'" value="t" size="sm" label="SM" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <text class="demo-label">禁用选中 Disabled Checked</text>
      <view class="demo-row">
        <dd-radio :model-value="'cash'" value="cash" disabled label="现金（停用）" />
        <dd-radio :model-value="'cash'" value="card" disabled label="银行卡（停用）" />
      </view>
      <text class="demo-label" style="margin-top:16rpx">禁用未选中 Disabled Unchecked</text>
      <view class="demo-row">
        <dd-radio :model-value="'active'" value="active" label="可用选项" />
        <dd-radio :model-value="'active'" value="disabled" disabled label="禁用选项" />
      </view>
      <text class="demo-label" style="margin-top:16rpx">小号禁用 SM Disabled</text>
      <view class="demo-row">
        <dd-radio :model-value="'p'" value="p" size="sm" disabled label="SM 禁用" />
        <dd-radio :model-value="'p'" value="q" size="sm" disabled label="SM 禁用" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">标签 Label</text>
      <view class="demo-col">
        <view class="demo-row">
          <dd-radio v-model="gender" value="male" label="男" />
          <dd-radio v-model="gender" value="female" label="女" />
        </view>
        <view class="demo-row" style="margin-top:16rpx">
          <dd-radio v-model="pay" value="wechat" size="sm" label="微信支付" />
          <dd-radio v-model="pay" value="alipay" size="sm" label="支付宝" />
        </view>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">状态组合 States</text>
      <view class="demo-col">
        <text class="demo-label">横向排列 Horizontal</text>
        <view class="demo-row">
          <dd-radio v-model="seat" value="a" label="A 区" />
          <dd-radio v-model="seat" value="b" label="B 区" />
          <dd-radio v-model="seat" value="c" label="C 区" />
        </view>

        <text class="demo-label" style="margin-top:24rpx">禁用全部 All Disabled</text>
        <view class="demo-row">
          <dd-radio :model-value="'off'" value="off" disabled label="选项 A" />
          <dd-radio :model-value="'off'" value="on" disabled label="选项 B" />
        </view>

        <text class="demo-label" style="margin-top:24rpx">实时绑定 Live</text>
        <text class="demo-note">性别：{{ gender }} · 支付：{{ pay }} · 座位：{{ seat }}</text>
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdRadio } from '@didaoktv/didaoui-uniapp'


const room = ref('standard')
const pay = ref('wechat')
const gender = ref('male')
const seat = ref('a')
</script>

<style scoped>
.demo-page { }
</style>
