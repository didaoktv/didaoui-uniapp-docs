<template>
  <dd-top-navbar title="气泡菜单" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">Placement — Top / Bottom / Left / Right</text>
      <view class="demo-row">
        <dd-popover v-model="show" placement="bottom" @select="onSel">
          <dd-button size="sm" type="primary">Bottom</dd-button>
          <template #actions>
            <dd-popover-item text="分享包房" value="share" />
            <dd-popover-item text="收藏歌曲" value="fav" />
            <dd-popover-item text="举报" value="report" />
          </template>
        </dd-popover>

        <dd-popover v-model="show2" placement="top" @select="onSel">
          <dd-button size="sm" type="primary">Top</dd-button>
          <template #actions>
            <dd-popover-item text="编辑" value="edit" />
            <dd-popover-item text="删除" value="del" />
          </template>
        </dd-popover>

        <dd-popover v-model="show3" placement="left" @select="onSel">
          <dd-button size="sm" type="primary">Left</dd-button>
          <template #actions>
            <dd-popover-item text="左操作" value="left" />
          </template>
        </dd-popover>

        <dd-popover v-model="show4" placement="right" @select="onSel">
          <dd-button size="sm" type="primary">Right</dd-button>
          <template #actions>
            <dd-popover-item text="右操作" value="right" />
          </template>
        </dd-popover>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Theme — Light / Dark</text>
      <view class="demo-row">
        <dd-popover v-model="show5" placement="bottom" theme="light" @select="onSel">
          <dd-button size="sm" type="secondary">Light</dd-button>
          <template #actions>
            <dd-popover-item text="浅色主题" value="light" />
          </template>
        </dd-popover>

        <dd-popover v-model="show6" placement="bottom" theme="dark" @select="onSel">
          <dd-button size="sm" type="secondary">Dark</dd-button>
          <template #actions>
            <dd-popover-item text="深色主题" value="dark" />
          </template>
        </dd-popover>
      </view>
    </view>

    <view class="demo-section">
      <text class="demo-title">Offset / CloseOnClickAction</text>
      <view class="demo-row">
        <dd-popover v-model="show7" placement="bottom" :offset="40" @select="onSel">
          <dd-button size="sm" type="primary">Offset 40</dd-button>
          <template #actions>
            <dd-popover-item text="大间距" value="o1" />
          </template>
        </dd-popover>

        <dd-popover v-model="show8" placement="bottom" :close-on-click-action="false" @select="onSel">
          <dd-button size="sm" type="primary">点击不关闭</dd-button>
          <template #actions>
            <dd-popover-item text="点击此项不关闭弹层" value="o2" />
            <dd-popover-item text="关闭" @click="show8 = false" />
          </template>
        </dd-popover>
      </view>
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
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const show7 = ref(false)
const show8 = ref(false)
function onSel(v: any) { showToast('选择：' + v) }
</script>

<style scoped>
.demo-page {  }
</style>