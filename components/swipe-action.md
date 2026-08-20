# 滑动操作 DdSwipeAction

> 水平拖拽露出 144rpx 宽操作按钮（背景由 per-action color 控制），0.33 阈值 + 0.3 边界阻尼，cubic-bezier 吸附，点击内容区关闭。

## 介绍

DdSwipeAction 用于列表项的左/右滑动操作，拖拽内容层即可露出背后的操作按钮（如删除、置顶）。支持 `leftActions`（右滑露出）与 `rightActions`（左滑露出）双向配置，每个操作项可独立设置颜色。采用 0.33 阈值吸附与 0.3 边界阻尼，松手后自动吸附到开/合状态。点击内容区可关闭已展开的操作。通过 ref 可调用 `close()` 方法手动关闭。

## 代码演示

### 基础用法（左滑删除）

`rightActions` 配置左滑露出的右侧操作，破坏性操作放最外层。

:::demo
<DemoBlock>

```vue
<template>
  <dd-swipe-action :right-actions="actions" @click="onClick">
    <dd-cell title="消息通知" value="2 条未读" />
  </dd-swipe-action>
</template>

<script setup>
const actions = [
  { text: '置顶', color: '#F5A623' },
  { text: '删除', color: '#E53935' },
]
function onClick({ index, action }) {
  console.log('点击', action.text)
}
</script>
```

</DemoBlock>
:::

### 双向滑动

同时配置 `leftActions` 与 `rightActions`，支持双向滑动。

:::demo
<DemoBlock>

```vue
<template>
  <dd-swipe-action :left-actions="left" :right-actions="right" @click="onClick">
    <dd-cell title="我的歌单" value="128 首" />
  </dd-swipe-action>
</template>

<script setup>
const left = [{ text: '置顶', icon: '↑', color: '#F5A623' }]
const right = [{ text: '删除', color: '#E53935' }]
function onClick({ side, action }) {
  console.log(side, action.text)
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| leftActions | 左侧操作列表（右滑露出） | `SwipeAction[]` | `[]` |
| rightActions | 右侧操作列表（左滑露出） | `SwipeAction[]` | `[]` |
| disabled | 是否禁用滑动 | `boolean` | `false` |
| actionWidth | 单个操作按钮宽度（rpx） | `number` | `144` |
| threshold | 吸附阈值（占操作总宽比例） | `number` | `0.33` |
| damping | 超出边界的阻尼系数 | `number` | `0.3` |

SwipeAction 结构：

| 字段 | 说明 | 类型 |
|------|------|------|
| text | 操作文案 | `string` |
| icon | 图标文案 | `string` |
| color | 背景色（缺省为 error 红 #E53935） | `string` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击操作按钮时触发（触发后自动关闭） | `{ side: 'left' \| 'right', index: number, action: SwipeAction }` |
| open | 展开操作时触发 | `side: 'left' \| 'right'` |
| close | 收起操作时触发 | 无 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 列表项内容 |

### 方法

通过 ref 调用：

| 方法名 | 说明 |
|--------|------|
| close | 收起已展开的操作 |

## 设计规范

::: tip 最佳实践
- 破坏性操作放在最外层。
- 通过 `action.color` 设置每个操作的背景色。
- 点击内容区可关闭已展开的操作。
- 用 disabled 锁定滑动。
- leftActions/rightActions 数组分别驱动两侧。
:::

::: warning 注意事项
- 每侧操作按钮不超过 3 个。
- 同一列表内不要混用滑动方向。
- 不要在表格/网格视图使用滑动操作。
- 滑动项内不要放横向滚动内容。
:::
