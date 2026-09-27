# 侧边栏导航 DdSidebar

> 侧边栏导航：垂直一级导航，配合 `dd-sidebar-item` 使用，外层用 `v-model` 绑定选中项索引。

## 介绍

DdSidebar 是垂直排列的导航容器（`dd-tabbar` 的纵向同款，复用同一套 provide/register 父子联动模式），自身不限定宽度（由父容器控制），常用作分类切换入口。子项使用 `dd-sidebar-item`：`title` 文案、`dot` 红点、`badge` 徽标、`disabled` 禁用；选中项白底高亮 + 左侧金色选中条。受控方式为 `v-model`（索引），也可监听 `change`。

::: warning 注意事项
- 索引以 `dd-sidebar-item` 的书写顺序为准（0 基）。
- 禁用项点击不切换、也不触发 item 的 `click` 事件。
- 需要滚动时把 `dd-sidebar` 包在固定高度的 `scroll-view` 内（参考 `dd-tree-select` 的用法）。
:::

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view class="wrap">
    <dd-sidebar v-model="active">
      <dd-sidebar-item v-for="item in list" :key="item" :title="item" />
    </dd-sidebar>
    <view class="panel">当前：{{ list[active] }}</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref(0)
const list = ['洋酒', '小食', '软饮', '套餐']
</script>
```

</DemoBlock>
:::

### 徽标 / 红点 / 禁用

:::demo
<DemoBlock>

```vue
<template>
  <view class="wrap">
    <dd-sidebar v-model="active">
      <dd-sidebar-item title="新品" dot />
      <dd-sidebar-item title="热卖" :badge="6" />
      <dd-sidebar-item title="已售罄" disabled />
      <dd-sidebar-item title="常规" />
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
| modelValue | 当前选中项的索引（支持 `v-model`） | `number` | `0` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 选中项索引变化 | `index: number` |
| change | 选中项索引变化 | `index: number` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 放置 `dd-sidebar-item` 子项 |
