<template>
  <dd-top-navbar title="组件库图标" />
  <view class="demo-page">

    <view class="demo-section">
      <text class="demo-title">组件库硬编码使用的图标</text>
      <text class="demo-note">共 {{ entries.length }} 个 icon name，来自 DidaoUI-uniapp 内部组件源码扫描</text>
      <text class="demo-note">用途：审视组件库内部依赖的图标集合，便于一致性检查与字体裁剪</text>
    </view>

    <view
      v-for="g in grouped"
      :key="g.group"
      class="demo-section"
    >
      <text class="demo-title">{{ g.group }}（{{ g.items.length }}）</text>
      <view
        v-for="e in g.items"
        :key="e.name"
        class="icon-row"
      >
        <view class="icon-row__icon">
          <dd-icon :name="e.name" size="28" color="#F5F5F5" />
        </view>
        <view class="icon-row__meta">
          <text class="icon-row__name">{{ e.name }}</text>
          <text class="icon-row__comps">{{ e.comps.join(' · ') }}</text>
        </view>
      </view>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DdIcon from '@didaoktv/didaoui-uniapp/components/dd-icon/dd-icon.vue'

interface Entry {
  name: string
  comps: string[]
  group: string
}

// ponytail: 数据来自 DidaoUI-uniapp/components 扫描 <dd-icon name="..."> 与 :name="..." 字面量
// ceiling: 仅覆盖组件库硬编码值；prop 传入的 icon（如 dd-button.icon）不计入
const entries: Entry[] = [
  // 通用操作
  { name: 'arrow', group: '通用操作', comps: ['DdCell', 'DdListCell'] },
  { name: 'arrow-down', group: '通用操作', comps: ['DdCollapseItem', 'DdStatCard(trend=down)'] },
  { name: 'arrow-left', group: '通用操作', comps: ['DdTopNavbar'] },
  { name: 'arrow-up', group: '通用操作', comps: ['DdStatCard(trend=up)'] },
  { name: 'back-top', group: '通用操作', comps: ['DdBacktop'] },
  { name: 'cross', group: '通用操作', comps: ['DdModal', 'DdInput', 'DdPopup', 'DdField', 'DdSearchBar', 'DdUpload', 'DdTag'] },
  { name: 'ellipsis', group: '通用操作', comps: ['DdCapsuleButton'] },
  { name: 'minus', group: '通用操作', comps: ['DdStepper'] },
  { name: 'plus', group: '通用操作', comps: ['DdUpload', 'DdStepper'] },
  // 状态反馈
  { name: 'fail', group: '状态反馈', comps: ['DdAlert(type=error)', 'DdToast(type=error)'] },
  { name: 'info', group: '状态反馈', comps: ['DdAlert(type=info)'] },
  { name: 'question', group: '状态反馈', comps: ['DdAlert(type=confirm)'] },
  { name: 'star', group: '状态反馈', comps: ['DdRate'] },
  { name: 'success', group: '状态反馈', comps: ['DdAlert(type=success)', 'DdToast(type=success)'] },
  { name: 'warning', group: '状态反馈', comps: ['DdAlert(type=warning)', 'DdToast(type=warning)'] },
  // 服务功能 / 媒体
  { name: 'photo-fail', group: '媒体', comps: ['DdImage'] },
  { name: 'search', group: '服务功能', comps: ['DdMiniProgramNavbar', 'DdSearchBar'] },
]

const grouped = computed(() => {
  const map = new Map<string, Entry[]>()
  for (const e of entries) {
    if (!map.has(e.group)) map.set(e.group, [])
    map.get(e.group)!.push(e)
  }
  return Array.from(map, ([group, items]) => ({ group, items }))
})
</script>

<style scoped>
.demo-page { }
.icon-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24rpx;
  padding: 20rpx 24rpx;
  background: #1a1a1a;
  border-radius: 12rpx;
  margin-bottom: 12rpx;
}
.icon-row__icon {
  width: 64rpx;
  height: 64rpx;
  border-radius: 12rpx;
  background: linear-gradient(135deg, #FFD54F, #D4891A);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.icon-row__meta {
  display: flex;
  flex-direction: column;
  gap: 4rpx;
  flex: 1;
  min-width: 0;
}
.icon-row__name {
  font-size: 26rpx;
  color: #F5F5F5;
  font-weight: 600;
}
.icon-row__comps {
  font-size: 22rpx;
  color: #9E9E9E;
  word-break: break-all;
}
</style>
