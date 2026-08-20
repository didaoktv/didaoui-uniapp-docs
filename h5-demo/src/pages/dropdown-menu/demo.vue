<template>
  <dd-top-navbar title="下拉菜单" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">基础下拉菜单</text>
      <dd-dropdown-menu>
        <dd-dropdown-item v-model="type" :options="types" title="包房类型" />
        <dd-dropdown-item v-model="sort" :options="sorts" title="价格排序" />
      </dd-dropdown-menu>
      <text class="demo-note">已选：{{ type }} / {{ sort }}</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">向上展开 (direction: up)</text>
      <dd-dropdown-menu direction="up">
        <dd-dropdown-item v-model="typeUp" :options="types" title="包房类型" />
        <dd-dropdown-item v-model="sortUp" :options="sorts" title="价格排序" />
      </dd-dropdown-menu>
      <text class="demo-note">菜单向上展开</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义激活色</text>
      <dd-dropdown-menu active-color="#2D4BA0">
        <dd-dropdown-item v-model="type3" :options="types" title="房型" />
        <dd-dropdown-item v-model="sort3" :options="sorts" title="排序" />
      </dd-dropdown-menu>
      <text class="demo-note">activeColor: #2D4BA0</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">无遮罩</text>
      <dd-dropdown-menu :overlay="false">
        <dd-dropdown-item v-model="type4" :options="types" title="无遮罩" />
      </dd-dropdown-menu>
      <text class="demo-note">点击外部不会关闭</text>
    </view>

    <view class="demo-section">
      <text class="demo-title">change 事件</text>
      <text class="demo-note">最新事件：{{ ddEvent }}</text>
      <dd-dropdown-menu @change="(id: number) => (ddEvent = '菜单点击: ' + id)">
        <dd-dropdown-item v-model="evType" :options="types" title="类型" />
        <dd-dropdown-item v-model="evSort" :options="sorts" title="排序" />
      </dd-dropdown-menu>
    </view>

    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdDropdownMenu, DdDropdownItem, DdToast } from '@didaoktv/didaoui-uniapp'



const type = ref('M')
const sort = ref('price')
const typeUp = ref('L')
const sortUp = ref('-price')
const type3 = ref('M')
const sort3 = ref('price')
const type4 = ref('S')
const evType = ref('M')
const evSort = ref('price')
const ddEvent = ref('暂无')

const types = [
  { text: '大包', value: 'L' },
  { text: '中包', value: 'M' },
  { text: '小包', value: 'S' }
]
const sorts = [
  { text: '价格升序', value: 'price' },
  { text: '价格降序', value: '-price' },
  { text: '余时优先', value: 'time' }
]
</script>

<style lang="scss" scoped>
.demo-page { }
</style>