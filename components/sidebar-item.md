# 侧边栏子项 DdSidebarItem

> 侧边栏子项：只能作为 `dd-sidebar` 的子节点使用，选中态由父容器的 `v-model` 索引决定。

## 介绍

DdSidebarItem 是 `dd-sidebar` 的子项，按书写顺序自动注册索引（0 基）。`title` 支持超长省略；`dot` / `badge` 在右上角展示红点/数字徽标（样式口径同 `dd-tabbar-item`）；`disabled` 整项禁用；`custom-class` 兜底扩展类名；`title` 插槽自定义文案。

## 代码演示

### 配合 dd-sidebar 使用

:::demo
<DemoBlock>

```vue
<template>
  <view class="wrap">
    <dd-sidebar v-model="active">
      <dd-sidebar-item title="洋酒" dot />
      <dd-sidebar-item title="小食拼盘（超长文案省略号）" :badge="6" />
      <dd-sidebar-item title="已售罄" disabled />
      <dd-sidebar-item title="自定义文案">
        <template #title>
          <text style="color: var(--dd-primary)">软饮专区</text>
        </template>
      </dd-sidebar-item>
    </dd-sidebar>
    <view class="panel">当前索引：{{ active }}</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref(0)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 导航项文案 | `string` | `''` |
| dot | 右上角红点 | `boolean` | `false` |
| badge | 右上角徽标数 | `string \| number` | `''` |
| disabled | 禁用（点击不切换、不触发 click） | `boolean` | `false` |
| customClass | 额外类名 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击时触发（禁用项不触发） | `index: number` |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义导航项文案 |
