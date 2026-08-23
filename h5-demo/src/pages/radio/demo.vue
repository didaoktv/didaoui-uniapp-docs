<template>
  <dd-top-navbar title="单选框" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础用法 Basic Group</text>
      <view class="demo-col">
        <dd-radio-group v-model="room">
          <dd-radio value="standard" label="标准包厢（4-6人）" />
          <dd-radio value="mini" label="小包厢（2-4人）" />
          <dd-radio value="vip" label="VIP包厢" />
        </dd-radio-group>
      </view>
      <text class="demo-note">当前选择：{{ room }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">排列方向 Direction</text>
      <text class="demo-label">横向 horizontal（默认）</text>
      <dd-radio-group v-model="gender">
        <dd-radio value="male" label="男" />
        <dd-radio value="female" label="女" />
      </dd-radio-group>
      <text class="demo-label" style="margin-top:16rpx">纵向 vertical</text>
      <dd-radio-group v-model="seat" direction="vertical">
        <dd-radio value="a" label="A 区 · 近舞台" />
        <dd-radio value="b" label="B 区 · 中庭" />
        <dd-radio value="c" label="C 区 · 安静角落" />
      </dd-radio-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <text class="demo-label">默认 MD</text>
      <dd-radio-group model-value="a">
        <dd-radio value="a" label="已选中" />
        <dd-radio value="b" label="未选中" />
      </dd-radio-group>
      <text class="demo-label" style="margin-top:16rpx">小号 SM</text>
      <dd-radio-group model-value="x">
        <dd-radio value="x" size="sm" label="已选中" />
        <dd-radio value="y" size="sm" label="未选中" />
      </dd-radio-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <text class="demo-label">单项禁用</text>
      <dd-radio-group model-value="active">
        <dd-radio value="active" label="可用选项" />
        <dd-radio value="disabled" disabled label="禁用选项" />
      </dd-radio-group>
      <text class="demo-label" style="margin-top:16rpx">整组禁用（group 下发）</text>
      <dd-radio-group model-value="cash" disabled>
        <dd-radio value="cash" label="现金（停用）" />
        <dd-radio value="card" label="银行卡（停用）" />
      </dd-radio-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">change 事件</text>
      <dd-radio-group v-model="pay" @change="onChange">
        <dd-radio value="wechat" size="sm" label="微信支付" />
        <dd-radio value="alipay" size="sm" label="支付宝" />
      </dd-radio-group>
      <text class="demo-note">事件记录：{{ lastChange || '（未触发）' }}</text>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const room = ref('standard')
const pay = ref('wechat')
const gender = ref('male')
const seat = ref('a')
const lastChange = ref('')

function onChange(val: any) {
  lastChange.value = `change → ${val}`
}
</script>

<style scoped>
.demo-page { }
</style>
