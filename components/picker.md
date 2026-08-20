# 选择器 DdPicker

> 底部弹层选择器配原生 picker-view 列，工具栏驱动确定/取消，自动归一化单列与多列数组。

## 介绍

DdPicker 是底部弹出的列选择器，适用于包房类型、时段等有限选项的选取。`columns` 既支持单列数组，也支持多列嵌套数组，组件自动归一化。工具栏含取消、标题、确定三个区域，确定按钮为金色加粗。`loading` 显示加载蒙层，`readonly` 仅展示不可确认。底部面板从 var(--radius-lg) 顶角滑出，覆盖 rgba(0,0,0,0.7) 蒙层。

## 代码演示

### 基础用法（单列）

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="show = true">选择包房类型</dd-button>
    <dd-picker
      v-model:show="show"
      title="选择包房类型"
      :columns="rooms"
      @confirm="onConfirm"
    />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const rooms = [
  { text: '小包厢', value: 'mini' },
  { text: '标准包厢', value: 'standard' },
  { text: 'VIP 包厢', value: 'vip' },
]
function onConfirm({ values, items }) {
  console.log(values, items)
}
</script>
```

</DemoBlock>
:::

### 多列选择

`columns` 传入二维数组实现多列。

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="show = true">选择日期和时间</dd-button>
    <dd-picker
      v-model:show="show"
      title="选择预约日期和时间"
      :columns="[dates, times]"
      @confirm="onConfirm"
    />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const dates = [
  { text: '今天', value: 'today' },
  { text: '明天', value: 'tomorrow' },
]
const times = [
  { text: '18:00', value: '18:00' },
  { text: '20:00', value: '20:00' },
]
function onConfirm({ values }) { console.log(values) }
</script>
```

</DemoBlock>
:::

### 加载状态

`loading` 显示加载蒙层，此时确定按钮无效。

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="show = true">加载中</dd-button>
    <dd-picker v-model:show="show" title="加载选项" :columns="[]" loading />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| show | 是否显示（支持 v-model:show） | `boolean` | `false` |
| columns | 列数据，单列 `PickerItem[]` 或多列 `PickerItem[][]` | `PickerItem[] \| PickerItem[][]` | `[]` |
| title | 工具栏标题 | `string` | `''` |
| loading | 是否加载中（显示蒙层并阻止确定） | `boolean` | `false` |
| readonly | 是否只读（仅展示不可确定） | `boolean` | `false` |

> `PickerItem = { text: string; value: any }`

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:show | 显示状态变化时触发 | `val: boolean` |
| confirm | 点击确定时触发 | `{ values: any[]; indexes: number[]; items: PickerItem[] }` |
| cancel | 点击取消或蒙层时触发 | — |
| change | 列滚动时触发 | `{ values: any[]; indexes: number[] }` |

## 设计规范

::: tip 最佳实践
- 用于有限选项列表（如包房类型、时段）的选择。
- 设置 title 提供上下文。
- 关联选择（日期+时间）使用多列。
- 异步拉取选项时使用 loading 状态。
:::

::: warning 注意事项
- 自由文本输入请用 input。
- 不要在其他弹层内嵌套 picker。
- 可见项超过 5 个时需测试滚动性能。
:::
