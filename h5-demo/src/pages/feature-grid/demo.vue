<template>
  <dd-top-navbar title="功能网格" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">变体 Variant</text>
      <text class="demo-label">Circle 圆形</text>
      <dd-feature-grid :items="itemsCircle" :columns="4" variant="circle" @item-click="onItem" />
      <text class="demo-label" style="margin-top:24rpx">Squircle 圆角方形</text>
      <dd-feature-grid :items="itemsSquircle" :columns="4" variant="squircle" @item-click="onItem" />
    </view>

    <view class="demo-section">
      <text class="demo-title">列数 Columns</text>
      <text class="demo-label">4 列</text>
      <dd-feature-grid :items="items4" :columns="4" variant="circle" @item-click="onItem" />
      <text class="demo-label" style="margin-top:24rpx">3 列</text>
      <dd-feature-grid :items="items3" :columns="3" variant="circle" @item-click="onItem" />
      <text class="demo-label" style="margin-top:24rpx">2 列</text>
      <dd-feature-grid :items="items2" :columns="2" variant="squircle" @item-click="onItem" />
    </view>

    <view class="demo-section">
      <text class="demo-title">自定义颜色 Color</text>
      <dd-feature-grid :items="itemsColor" :columns="4" variant="circle" @item-click="onItem" />
    </view>

    <view class="demo-section">
      <text class="demo-title">不同字段 Key Mapping</text>
      <dd-feature-grid :items="itemsCustom" :columns="3" variant="squircle" label-key="name" icon-key="emoji" color-key="bg" @item-click="onItem" />
    </view>

    <view class="demo-section">
      <text class="demo-title">更多项 More Items</text>
      <dd-feature-grid :items="itemsMany" :columns="5" variant="circle" @item-click="onItem" />
    </view>
    <dd-toast />
    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdFeatureGrid, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'


const itemsCircle = ref([
  { label: '唱歌', icon: 'music', color: 'linear-gradient(135deg,#FFC107,#D4891A)' },
  { label: '点歌', icon: 'music-o', color: 'linear-gradient(135deg,#455A64,#263238)' },
  { label: '投票', icon: 'info-o', color: 'linear-gradient(135deg,#E53935,#B71C1C)' },
  { label: '送礼', icon: 'gift-o', color: 'linear-gradient(135deg,#8E24AA,#4A148C)' },
  { label: '排行', icon: 'medal', color: 'linear-gradient(135deg,#FB8C00,#E65100)' },
  { label: '直播', icon: 'live', color: 'linear-gradient(135deg,#00897B,#004D40)' },
  { label: '观众', icon: 'friends-o', color: 'linear-gradient(135deg,#3949AB,#1A237E)' },
  { label: '设置', icon: 'setting-o', color: 'linear-gradient(135deg,#546E7A,#263238)' },
])

const itemsSquircle = ref([
  { label: '热歌榜', icon: 'fire', color: 'linear-gradient(135deg,#FF7043,#D84315)' },
  { label: '新歌榜', icon: 'new', color: 'linear-gradient(135deg,#26C6DA,#00838F)' },
  { label: '经典', icon: 'music-o', color: 'linear-gradient(135deg,#AB47BC,#6A1B9A)' },
  { label: '民谣', icon: 'music', color: 'linear-gradient(135deg,#66BB6A,#2E7D32)' },
  { label: '摇滚', icon: 'video', color: 'linear-gradient(135deg,#EF5350,#C62828)' },
  { label: '情歌', icon: 'like-o', color: 'linear-gradient(135deg,#EC407A,#AD1457)' },
  { label: '合唱', icon: 'music', color: 'linear-gradient(135deg,#42A5F5,#1565C0)' },
  { label: '生日', icon: 'birthday-cake-o', color: 'linear-gradient(135deg,#FFCA28,#F57F17)' },
])

const items4 = ref([
  { label: '项1', icon: 'award', color: '#FFC107' },
  { label: '项2', icon: 'medal', color: '#42A5F5' },
  { label: '项3', icon: 'gem', color: '#66BB6A' },
  { label: '项4', icon: 'diamond', color: '#EF5350' },
])

const items3 = ref([
  { label: '功能A', icon: 'award', color: '#FF7043' },
  { label: '功能B', icon: 'medal', color: '#26C6DA' },
  { label: '功能C', icon: 'gem', color: '#AB47BC' },
])

const items2 = ref([
  { label: '项目一', icon: 'music', color: '#FFC107' },
  { label: '项目二', icon: 'music-o', color: '#42A5F5' },
])

const itemsColor = ref([
  { label: '金色', icon: 'star', color: 'linear-gradient(135deg,#FFD54F,#D4891A)' },
  { label: '蓝色', icon: 'star', color: 'linear-gradient(135deg,#64B5F6,#1565C0)' },
  { label: '绿色', icon: 'star', color: 'linear-gradient(135deg,#81C784,#2E7D32)' },
  { label: '红色', icon: 'star', color: 'linear-gradient(135deg,#E57373,#C62828)' },
])

const itemsCustom = ref([
  { name: '点歌', emoji: 'music-o', bg: '#FFC107' },
  { name: '切歌', emoji: 'play-circle', bg: '#42A5F5' },
  { name: '重唱', emoji: 'exchange', bg: '#66BB6A' },
])

const itemsMany = ref([
  { label: '1', icon: 'music' },
  { label: '2', icon: 'music-o' },
  { label: '3', icon: 'gift-o' },
  { label: '4', icon: 'medal' },
  { label: '5', icon: 'live' },
  { label: '6', icon: 'friends-o' },
  { label: '7', icon: 'setting-o' },
  { label: '8', icon: 'fire' },
  { label: '9', icon: 'new' },
  { label: '10', icon: 'music' },
])

function onItem(e){ showToast('点击: ' + e.item.label) }
</script>

<style scoped>
.demo-page { }
</style>
