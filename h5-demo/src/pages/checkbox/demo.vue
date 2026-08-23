<template>
  <dd-top-navbar title="复选框" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础用法 Basic Group</text>
      <dd-checkbox-group v-model="fruits">
        <dd-checkbox value="apple" label="果盘" />
        <dd-checkbox value="beer" label="精酿啤酒" />
        <dd-checkbox value="snack" label="小食拼盘" />
      </dd-checkbox-group>
      <text class="demo-note">已选：{{ fruits.length ? fruits.join(', ') : '（无）' }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">排列方向 Direction</text>
      <text class="demo-label">横向 horizontal（默认）</text>
      <dd-checkbox-group v-model="tags">
        <dd-checkbox value="birthday" label="生日" />
        <dd-checkbox value="party" label="派对" />
        <dd-checkbox value="business" label="商务" />
      </dd-checkbox-group>
      <text class="demo-label" style="margin-top:16rpx">纵向 vertical</text>
      <dd-checkbox-group v-model="services" direction="vertical">
        <dd-checkbox value="clean" label="深度保洁（+30分钟）" />
        <dd-checkbox value="decor" label="场景布置（生日/求婚）" />
        <dd-checkbox value="photo" label="跟拍摄影" />
      </dd-checkbox-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">数量限制 max</text>
      <dd-checkbox-group v-model="maxed" :max="2">
        <dd-checkbox value="a" label="选项 A（最多选 2 项）" />
        <dd-checkbox value="b" label="选项 B" />
        <dd-checkbox value="c" label="选项 C" />
      </dd-checkbox-group>
      <text class="demo-note">已选 {{ maxed.length }}/2，达到上限后未选项自动禁用，已选项仍可取消</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">禁用 Disabled</text>
      <text class="demo-label">单项禁用</text>
      <dd-checkbox-group :model-value="['on']">
        <dd-checkbox value="on" label="可用选项" />
        <dd-checkbox value="off" disabled label="禁用选项" />
      </dd-checkbox-group>
      <text class="demo-label" style="margin-top:16rpx">整组禁用（group 下发）</text>
      <dd-checkbox-group :model-value="['x']" disabled>
        <dd-checkbox value="x" label="已选禁用" />
        <dd-checkbox value="y" label="未选禁用" />
      </dd-checkbox-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">半选态 Indeterminate</text>
      <dd-checkbox-group :model-value="['a']">
        <dd-checkbox value="a" label="受控选中" />
        <dd-checkbox value="b" indeterminate label="半选态（受控展示）" />
      </dd-checkbox-group>
    </view>

    <view class="demo-section">
      <text class="demo-title">尺寸与事件</text>
      <dd-checkbox-group v-model="sizes" @change="onChange">
        <dd-checkbox value="md" label="默认 MD" />
        <dd-checkbox value="sm" size="sm" label="小号 SM" />
      </dd-checkbox-group>
      <text class="demo-note">事件记录：{{ lastChange || '（未触发）' }}</text>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fruits = ref<string[]>(['apple'])
const tags = ref<string[]>([])
const services = ref<string[]>(['clean'])
const maxed = ref<string[]>(['a'])
const sizes = ref<string[]>([])
const lastChange = ref('')

function onChange(val: any[]) {
  lastChange.value = `change → [${val.join(', ')}]`
}
</script>

<style scoped>
.demo-page { }
</style>
