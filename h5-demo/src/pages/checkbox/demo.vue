<template>
  <dd-top-navbar title="复选框" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础用法 Basic</text>
      <view class="demo-col">
        <dd-checkbox v-model="agree" label="接受服务条款" />
        <dd-checkbox v-model="news" label="订阅新闻推送" />
        <dd-checkbox v-model="promo" label="接收促销通知" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">全选 / 半选 Indeterminate</text>
      <view class="demo-col">
        <dd-checkbox
          v-model="all"
          :indeterminate="songs.length > 0 && songs.length < opts.length"
          @change="toggleAll"
        >全选歌曲 ({{ songs.length }}/{{ opts.length }})</dd-checkbox>
        <view class="demo-row" style="margin-top:16rpx">
          <dd-checkbox v-for="o in opts" :key="o" v-model="songs" :value="o" :label="o" />
        </view>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸 Size</text>
      <text class="demo-label">默认 MD</text>
      <view class="demo-row">
        <dd-checkbox v-model="s1" label="大号勾选" />
        <dd-checkbox :model-value="true" label="已选中" />
        <dd-checkbox :model-value="false" label="未选中" />
      </view>
      <text class="demo-label" style="margin-top:16rpx">小号 SM</text>
      <view class="demo-row">
        <dd-checkbox v-model="s2" size="sm" label="小号勾选" />
        <dd-checkbox :model-value="true" size="sm" label="已选中" />
        <dd-checkbox :model-value="false" size="sm" label="未选中" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <text class="demo-label">禁用状态 Disabled</text>
      <view class="demo-row">
        <dd-checkbox :model-value="true" disabled label="禁用选中" />
        <dd-checkbox :model-value="false" disabled label="禁用未选中" />
      </view>
      <text class="demo-label" style="margin-top:16rpx">小号禁用 SM Disabled</text>
      <view class="demo-row">
        <dd-checkbox :model-value="true" size="sm" disabled label="禁用选中" />
        <dd-checkbox :model-value="false" size="sm" disabled label="禁用未选中" />
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">数组绑定 Array</text>
      <view class="demo-col">
        <text class="demo-note">已选：{{ fruits.join(', ') || '（无）' }}</text>
        <view class="demo-row" style="margin-top:16rpx">
          <dd-checkbox v-for="f in fruitOpts" :key="f" v-model="fruits" :value="f" :label="f" />
        </view>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">状态组合 States</text>
      <view class="demo-col">
        <view class="demo-row">
          <dd-checkbox :model-value="true" label="已选 Enabled" />
          <dd-checkbox :model-value="false" label="未选 Enabled" />
          <dd-checkbox :model-value="true" disabled label="已选 Disabled" />
          <dd-checkbox :model-value="false" disabled label="未选 Disabled" />
        </view>
        <view class="demo-row" style="margin-top:16rpx">
          <dd-checkbox :model-value="true" size="sm" label="SM 已选" />
          <dd-checkbox :model-value="false" size="sm" label="SM 未选" />
          <dd-checkbox :model-value="true" size="sm" disabled label="SM 已选 Disabled" />
          <dd-checkbox :model-value="false" size="sm" disabled label="SM 未选 Disabled" />
        </view>
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdCheckbox } from '@didaoktv/didaoui-uniapp'


const agree = ref(false)
const news = ref(true)
const promo = ref(false)
const all = ref(false)
const songs = ref(['华语'])
const opts = ['华语', '流行', '摇滚', '民谣']
function toggleAll(v){ songs.value = v ? [...opts] : [] }
const s1 = ref(true)
const s2 = ref(false)
const fruits = ref<string[]>(['苹果'])
const fruitOpts = ['苹果', '香蕉', '葡萄', '橙子']
</script>

<style scoped>
.demo-page { }
</style>
