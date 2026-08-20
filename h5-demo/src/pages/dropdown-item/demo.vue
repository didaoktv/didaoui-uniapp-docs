<template>
  <dd-top-navbar title="下拉项" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础下拉项</text>
      <dd-dropdown-menu style="margin-top:16rpx">
        <dd-dropdown-item v-model="v" :options="opts" title="包房类型" />
      </dd-dropdown-menu>
      <text class="demo-note">当前：{{ v }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">无标题（显示选中项）</text>
      <dd-dropdown-menu style="margin-top:16rpx">
        <dd-dropdown-item v-model="v2" :options="opts" />
      </dd-dropdown-menu>
      <text class="demo-note">自动显示选中的文字</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">带图标的选项</text>
      <dd-dropdown-menu style="margin-top:16rpx">
        <dd-dropdown-item v-model="v3" :options="iconOpts" title="支付方式" />
      </dd-dropdown-menu>
      <text class="demo-note">选项支持 icon 属性</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用状态</text>
      <dd-dropdown-menu style="margin-top:16rpx">
        <dd-dropdown-item v-model="v4" :options="opts" title="已禁用" disabled />
        <dd-dropdown-item v-model="v5" :options="opts" title="可用" />
      </dd-dropdown-menu>
      <text class="demo-note">禁用项不可点击</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">change 事件</text>
      <text class="demo-note">最新事件：{{ ddItemEvent }}</text>
      <dd-dropdown-menu style="margin-top:16rpx">
        <dd-dropdown-item
          v-model="v6"
          :options="opts"
          title="房型"
          @change="(val: any) => (ddItemEvent = '选中: ' + val)"
        />
      </dd-dropdown-menu>
    </view>

    <view class="demo-section">
      <text class="demo-title">多列下拉</text>
      <dd-dropdown-menu style="margin-top:16rpx">
        <dd-dropdown-item v-model="col1" :options="opts" title="类型" />
        <dd-dropdown-item v-model="col2" :options="moreOpts" title="区域" />
        <dd-dropdown-item v-model="col3" :options="sorts" title="排序" />
      </dd-dropdown-menu>
      <text class="demo-note">已选：{{ col1 }} / {{ col2 }} / {{ col3 }}</text>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdDropdownMenu, DdDropdownItem, DdToast } from '@didaoktv/didaoui-uniapp'
import DemoNav from '../../components/DemoNav.vue'


const v = ref('M')
const v2 = ref('L')
const v3 = ref('wechat')
const v4 = ref('S')
const v5 = ref('M')
const v6 = ref('L')
const col1 = ref('M')
const col2 = ref('east')
const col3 = ref('price')
const ddItemEvent = ref('暂无')

const opts = [
  { text: '大包', value: 'L' },
  { text: '中包', value: 'M' },
  { text: '小包', value: 'S' }
]

const moreOpts = [
  { text: '东区', value: 'east' },
  { text: '西区', value: 'west' },
  { text: '南区', value: 'south' },
  { text: '北区', value: 'north' }
]

const sorts = [
  { text: '价格升序', value: 'price' },
  { text: '价格降序', value: '-price' },
  { text: '余时优先', value: 'time' }
]

const iconOpts = [
  { text: '微信支付', value: 'wechat', icon: '' },
  { text: '支付宝', value: 'alipay', icon: '' },
  { text: '现金', value: 'cash', icon: '' }
]
</script>

<style lang="scss" scoped>
.demo-page { }
</style>