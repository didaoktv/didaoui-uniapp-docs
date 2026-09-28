<template>
  <dd-top-navbar title="单选框组" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础用法 Group</text>
      <dd-radio-group v-model="room">
        <dd-radio value="standard" label="标准包厢（4-6人）" />
        <dd-radio value="mini" label="小包厢（2-4人）" />
        <dd-radio value="vip" label="VIP包厢" />
      </dd-radio-group>
      <text class="demo-note">当前选择：{{ room }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">排列方向 Direction</text>
      <text class="demo-label">纵向 vertical</text>
      <dd-radio-group v-model="seat" direction="vertical">
        <dd-radio value="a" label="A 区 · 近舞台" />
        <dd-radio value="b" label="B 区 · 中庭" />
        <dd-radio value="c" label="C 区 · 安静角落" />
      </dd-radio-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <dd-radio-group v-model="size">
        <dd-radio value="md" label="默认 MD" />
        <dd-radio value="sm" size="sm" label="小号 SM" />
      </dd-radio-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <dd-radio-group v-model="disable">
        <dd-radio value="ok" label="可用选项" />
        <dd-radio value="no" disabled label="禁用选项" />
      </dd-radio-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">change 事件</text>
      <dd-radio-group v-model="pay" @change="onChange">
        <dd-radio value="wechat" label="微信支付" />
        <dd-radio value="alipay" label="支付宝" />
      </dd-radio-group>
      <text class="demo-note">事件记录：{{ lastChange || '（未触发）' }}</text>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const room = ref('standard')
const seat = ref('a')
const size = ref('md')
const disable = ref('ok')
const pay = ref('wechat')
const lastChange = ref('')

function onChange(val: any) {
  lastChange.value = `change → ${val}`
}
</script>

<style scoped>
.demo-page { }
</style>