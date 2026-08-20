<template>
  <dd-top-navbar title="弹出层" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Position — Top / Bottom / Left / Right / Center</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="open('top')">顶部</dd-button>
        <dd-button size="sm" type="primary" @click="open('bottom')">底部</dd-button>
        <dd-button size="sm" type="primary" @click="open('left')">左侧</dd-button>
        <dd-button size="sm" type="primary" @click="open('right')">右侧</dd-button>
        <dd-button size="sm" type="primary" @click="open('center')">居中</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Round / Closeable</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="openRounded('bottom')">圆角 + 关闭</dd-button>
        <dd-button size="sm" type="primary" @click="openRounded('center')">居中圆角</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">CloseIconPosition</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="openIcon('top-left')">左上</dd-button>
        <dd-button size="sm" type="primary" @click="openIcon('top-right')">右上</dd-button>
        <dd-button size="sm" type="primary" @click="openIcon('bottom-left')">左下</dd-button>
        <dd-button size="sm" type="primary" @click="openIcon('bottom-right')">右下</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Overlay / CloseOnClickOverlay</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="openNoOverlay">无遮罩</dd-button>
        <dd-button size="sm" type="primary" @click="openNoClose">遮罩不关闭</dd-button>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Width / Height 自定义</text>
      <view class="demo-row">
        <dd-button size="sm" type="primary" @click="openCustomSize">自定义尺寸</dd-button>
      </view>
    </view>

    <dd-popup v-model="show" :position="pos" round closeable>
      <view class="popup-content">弹出层内容（{{ pos }}）</view>
    </dd-popup>

    <dd-popup v-model="showRounded" :position="posRounded" round closeable>
      <view class="popup-content">圆角弹出层</view>
    </dd-popup>

    <dd-popup v-model="showIcon" :close-icon-position="iconPos" closeable>
      <view class="popup-content">关闭按钮位置：{{ iconPos }}</view>
    </dd-popup>

    <dd-popup v-model="showNoOverlay" :overlay="false" :close-on-click-overlay="false">
      <view class="popup-content">无遮罩弹出层</view>
    </dd-popup>

    <dd-popup v-model="showNoClose" :close-on-click-overlay="false" closeable>
      <view class="popup-content">
        遮罩点击不关闭
        <dd-button size="sm" type="primary" style="margin-top:20rpx" @click="showNoClose = false">关闭</dd-button>
      </view>
    </dd-popup>

    <dd-popup v-model="showCustomSize" position="left" width="400rpx" closeable round>
      <view class="popup-content">宽度 400rpx</view>
    </dd-popup>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdPopup, DdButton } from '@didaoktv/didaoui-uniapp'

const show = ref(false)
const pos = ref('bottom')
const showRounded = ref(false)
const posRounded = ref('bottom')
const showIcon = ref(false)
const iconPos = ref('top-right')
const showNoOverlay = ref(false)
const showNoClose = ref(false)
const showCustomSize = ref(false)

function open(p: string) { pos.value = p; show.value = true }
function openRounded(p: string) { posRounded.value = p; showRounded.value = true }
function openIcon(p: string) { iconPos.value = p; showIcon.value = true }
function openNoOverlay() { showNoOverlay.value = true }
function openNoClose() { showNoClose.value = true }
function openCustomSize() { showCustomSize.value = true }
</script>

<style scoped>
.demo-page {  }
.popup-content {
  padding: 48rpx;
  color: #9E9E9E;
  min-height: 200rpx;
}
</style>