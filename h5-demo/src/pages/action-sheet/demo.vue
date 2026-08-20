<template>
  <dd-top-navbar title="动作面板" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Columns — 4 列网格</text>
      <view class="demo-row">
        <dd-button type="primary" @click="show1 = true">4 列</dd-button>
        <dd-button type="secondary" @click="show2 = true">3 列</dd-button>
        <dd-button type="ghost" @click="show3 = true">2 列</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">ShowCancel / CancelText</text>
      <view class="demo-row">
        <dd-button type="primary" @click="show4 = true">自定义取消文字</dd-button>
        <dd-button type="secondary" @click="show5 = true">隐藏取消按钮</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">CloseOnClickModal</text>
      <view class="demo-row">
        <dd-button type="primary" @click="show6 = true">遮罩点击不关闭</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Icon / Color 自定义</text>
      <view class="demo-row">
        <dd-button type="primary" @click="show7 = true">带图标颜色</dd-button>
      </view>
    </view>

    <dd-action-sheet v-model="show1" title="包房操作" :items="items4" :columns="4" @select="onSel" />
    <dd-action-sheet v-model="show2" title="快捷操作" :items="items3" :columns="3" @select="onSel" />
    <dd-action-sheet v-model="show3" title="二列操作" :items="items2" :columns="2" @select="onSel" />
    <dd-action-sheet v-model="show4" title="自定义取消" :items="items4" cancel-text="返回" @select="onSel" />
    <dd-action-sheet v-model="show5" title="无取消按钮" :items="items3" :show-cancel="false" @select="onSel" />
    <dd-action-sheet v-model="show6" title="遮罩不关闭" :items="items4" :close-on-click-modal="false" @select="onSel" />
    <dd-action-sheet v-model="show7" title="自定义图标颜色" :items="itemsColor" :columns="4" @select="onSel" />

    <dd-toast />

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdActionSheet, DdButton, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const show7 = ref(false)

// ponytail: items4/items3 用首字 fallback（删 icon，dd-action-sheet 显示 item.name.charAt(0)）
// items2/itemsColor 用 dd-icon name（语义对应图标）
const items4 = [
  { name: '带客' },
  { name: '开房' },
  { name: '续单' },
  { name: '清扫' },
  { name: '解锁' },
  { name: '设备' },
]
const items3 = [
  { name: '开房' },
  { name: '预订' },
  { name: '置闲' },
  { name: '解锁' },
  { name: '会员' },
]
const items2 = [
  { name: '确认', icon: 'success' },
  { name: '取消', icon: 'cross' },
]
const itemsColor = [
  { name: '金色', icon: 'star', color: '#F5A623' },
  { name: '蓝色', icon: 'music', color: '#2D4BA0' },
  { name: '红色', icon: 'like-o', color: '#E53935' },
  { name: '绿色', icon: 'success', color: '#4CAF50' },
]

function onSel(e: any) { showToast('选择：' + e.name) }
</script>

<style scoped>
.demo-page {  }
</style>
