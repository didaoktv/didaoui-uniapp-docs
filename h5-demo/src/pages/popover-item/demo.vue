<template>
  <dd-top-navbar title="气泡项" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Text / Icon / Value</text>
      <text class="demo-note">dd-popover-item 作为 dd-popover 的 #actions 子项</text>
      <dd-popover v-model="show" placement="bottom" @select="onSel" style="margin-top:16rpx">
        <dd-button type="primary">打开菜单</dd-button>
        <template #actions>
          <dd-popover-item text="分享包房" value="share" icon="share-o" />
          <dd-popover-item text="收藏歌曲" value="fav" icon="star" />
          <dd-popover-item text="已点歌曲" value="done" icon="success" />
          <dd-popover-item text="举报" value="report" icon="warning" />
        </template>
      </dd-popover>
    </view>

    <view class="demo-section">
      <text class="demo-title">Color — 自定义颜色</text>
      <dd-popover v-model="show2" placement="bottom" @select="onSel">
        <dd-button type="secondary">颜色菜单</dd-button>
        <template #actions>
          <dd-popover-item text="删除" value="del" color="#E53935" icon="cross" />
          <dd-popover-item text="升级" value="up" color="#F5A623" icon="upgrade" />
          <dd-popover-item text="分享" value="share" color="#2D4BA0" icon="arrow" />
        </template>
      </dd-popover>
    </view>

    <view class="demo-section">
      <text class="demo-title">Disabled — 禁用状态</text>
      <dd-popover v-model="show3" placement="bottom" @select="onSel">
        <dd-button type="primary">带禁用项</dd-button>
        <template #actions>
          <dd-popover-item text="可用项" value="ok" />
          <dd-popover-item text="禁用项" value="dis" disabled />
          <dd-popover-item text="另一个可用项" value="ok2" />
          <dd-popover-item text="禁用且带颜色" value="dis2" disabled color="#E53935" />
        </template>
      </dd-popover>
    </view>

    <dd-toast />

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DdPopover, DdPopoverItem, DdButton, DdToast } from '@didaoktv/didaoui-uniapp'
import { showToast } from '@didaoktv/didaoui-uniapp/components/dd-toast/dd-toast.vue'

const show = ref(false)
const show2 = ref(false)
const show3 = ref(false)
function onSel(v: any) { showToast('选择：' + v) }
</script>

<style scoped>
.demo-page {  }
</style>
