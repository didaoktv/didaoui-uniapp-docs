# 底部操作面板 DdActionSheet

> 毛玻璃底部面板（dd-glass）配拖拽把手，可配置列数的网格（columns 默认 4）放置金色渐变圆形图标，玻璃背景区别于 modal 的实心背景。

## 介绍

DdActionSheet 从屏幕底部上滑弹出，用于展示与当前上下文相关的操作集合（如房态管理中的房间操作）。面板采用毛玻璃（dd-glass）背景，操作项以网格形式排布，每个项为金色渐变圆形图标 + 文字标签。通过 `items` 传入操作列表，`columns` 控制每行列数。点击操作项或取消按钮后面板自动关闭。

## 代码演示

### 基础用法

通过 `v-model` 控制显隐，`items` 传入操作项（name 必填，icon 可选，缺省取 name 首字）。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">打开操作面板</dd-button>
  <dd-action-sheet
    v-model="show"
    title="房间操作"
    :items="items"
    @select="onSelect"
  />
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const items = [
  { name: '开房', icon: '🔑' },
  { name: '续单', icon: '➕' },
  { name: '清扫', icon: '🧹' },
  { name: '解锁', icon: '🔓' },
]
function onSelect(item, index) {
  console.log('选中', item.name, index)
}
</script>
```

</DemoBlock>
:::

### 自定义列数

`columns` 控制每行操作项数量，操作较少时可设为 3。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">3 列面板</dd-button>
  <dd-action-sheet
    v-model="show"
    title="快速操作"
    :columns="3"
    :items="items"
    cancel-text="关闭"
  />
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const items = [
  { name: '编辑' },
  { name: '分享' },
  { name: '删除', color: '#F56565' },
]
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 是否显示（支持 v-model） | `boolean` | `false` |
| items | 操作项列表 | `ActionItem[]` | `[]` |
| columns | 每行列数 | `number` | `4` |
| title | 标题 | `string` | `''` |
| showCancel | 是否显示取消按钮 | `boolean` | `true` |
| cancelText | 取消按钮文案 | `string` | `'取消'` |
| closeOnClickModal | 点击遮罩是否关闭 | `boolean` | `true` |

ActionItem 结构：

| 字段 | 说明 | 类型 |
|------|------|------|
| name | 操作名称（必填） | `string` |
| icon | 图标文案（缺省取 name 首字） | `string` |
| color | 文字颜色 | `string` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 显隐变化时触发 | `val: boolean` |
| select | 选择某项时触发（触发后自动关闭） | `item: ActionItem, index: number` |
| close | 关闭时触发 | 无 |

### Slots

无。

## 设计规范

::: tip 最佳实践
- 用于上下文相关的操作集合（如房间操作）。
- 根据操作数量配置 `columns`（默认 4）。
- 图标使用金色渐变圆形背景配 glow。
- 点击遮罩或取消按钮关闭。
- 通过 `items` 驱动操作列表（name + 可选 icon）。
:::

::: warning 注意事项
- 不要用于主导航。
- 操作项不要超过 12 个。
- 不要无标题/无上下文地使用。
:::
