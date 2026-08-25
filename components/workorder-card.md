# 工单卡片 DdWorkorderCard

> 工单条目卡片，支持类型标签、状态标签、布置 checklist 勾选、进度条与操作按钮插槽，供店员端工单中心列表与布置工单详情复用。

## 介绍

DdWorkorderCard 用于呈现一条工单：标题 + 类型/状态标签，可选内部可勾选的 checklist（如布置工单的任务项）、进度条（0-100）、时间，以及底部操作区（`actions` 插槽）。类型决定标签配色：服务铃（金）、维修（红）、反馈（蓝）、布置（主题色）、待办（中性）。

## 代码演示

### 布置工单（带 checklist + 进度）

:::demo
<DemoBlock>

```vue
<template>
  <dd-workorder-card
    title="A03 房间生日布置"
    type="decoration"
    status="进行中"
    :checklist="steps"
    :progress="progress"
    time="2026-08-22 19:00"
  >
    <template #actions>
      <dd-button type="primary" size="small">完成确认</dd-button>
    </template>
  </dd-workorder-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const progress = ref(50)
const steps = ref([
  { id: '1', text: '放置气球灯牌', done: true },
  { id: '2', text: '铺设茶几台布', done: true },
  { id: '3', text: '点亮星空投影', done: false },
])

function onCheck({ item }: { item: { id: string; done: boolean } }) {
  const doneCount = steps.value.filter((s) => s.done).length
  progress.value = Math.round((doneCount / steps.value.length) * 100)
}
</script>
```

</DemoBlock>
:::

> 完整可交互演示：运行 `npm run dev:h5`（端口 5274）后访问工单卡片页（可勾选清单实时联动进度）。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 工单标题 | `string` | `''` |
| type | 工单类型 | `'service' \| 'repair' \| 'feedback' \| 'decoration' \| 'todo'` | `'todo'` |
| status | 状态文本（优先显示，不传则显示类型名） | `string` | `''` |
| checklist | 勾选清单 | `ChecklistItem[]` | `[]` |
| progress | 进度（0-100，传才显示进度条） | `number` | 无 |
| time | 时间文本 | `string` | `''` |

`ChecklistItem` 结构：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | `string` | 是 | 唯一标识 |
| text | `string` | 是 | 清单文案 |
| done | `boolean` | 是 | 是否完成 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| check | 勾选某项时触发 | `{ item: ChecklistItem, done: boolean }` |
| click | 点击整卡时触发 | `{ title: string }` |

### Slots

| 名称 | 说明 |
|------|------|
| actions | 底部操作按钮区（完成确认 / 催办等） |

## 设计规范

::: tip 最佳实践
- 布置工单（`type="decoration"`）把可执行步骤放入 `checklist`，让店员逐项勾选推进。
- 需要进度可视化时传 `progress`，由页面根据清单完成数计算。
- 完成确认按钮放 `actions` 插槽，点击后由页面调用后端状态流转。
:::

::: warning 注意事项
- 同一张卡不要同时放两类不相关动作，保持单一职责。
- `checklist` 勾选仅改变本地视图，是否持久化由页面在 `check` 事件中处理。
:::