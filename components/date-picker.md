# 日期选择器 DdDatePicker

> iOS 风格滚轮选择器；4 种类型（date/time/datetime/range）决定显示的列（年/月/日 vs 时/分）；ITEM_HEIGHT=40px，可见 5 项，吸附最近项带 0.3 边界阻尼；指示条为金色玻璃配金边 + 发光；从底部上滑（var(--radius-2xl) 顶角）覆盖 rgba(0,0,0,0.6) 蒙层；无 minuteStep（始终为 1）；range 类型声明但未完整实现（按单日期格式输出）。

## 介绍

DdDatePicker 是底部弹出的 iOS 风格滚轮选择器，用于预订日期、时间等场景。`type` 决定显示的列：date 为年/月/日，time 为时/分，datetime 为五列全显，range 当前按单日期格式输出。指示条为金色玻璃配金边与发光，从底部 var(--radius-2xl) 顶角滑出，覆盖 rgba(0,0,0,0.6) 蒙层。日列会根据所选年/月动态调整天数。

## 代码演示

### 基础用法（日期）

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="show = true">选择日期</dd-button>
    <dd-date-picker
      v-model:show="show"
      v-model="date"
      type="date"
      title="选择预订日期"
      @confirm="onConfirm"
    />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const date = ref('')
function onConfirm(v) { console.log(v) }
</script>
```

</DemoBlock>
:::

### 日期时间选择

`type="datetime"` 显示年/月/日/时/分五列。

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="show = true">选择预订时间</dd-button>
    <dd-date-picker
      v-model:show="show"
      v-model="dt"
      type="datetime"
      title="选择到店时间"
    />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const dt = ref('')
</script>
```

</DemoBlock>
:::

### 时间选择

`type="time"` 仅显示时/分两列，输出 HH:mm。

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="show = true">选择时间</dd-button>
    <dd-date-picker
      v-model:show="show"
      v-model="t"
      type="time"
      title="选择开场时间"
    />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const t = ref('')
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| show | 是否显示（支持 v-model:show） | `boolean` | `false` |
| type | 选择器类型 | `'date' \| 'time' \| 'datetime' \| 'range'` | `'date'` |
| modelValue (v-model) | 选定值，date/datetime/range 为 `YYYY-MM-DD` 或 `YYYY-MM-DD HH:mm`，time 为 `HH:mm` | `string` | `''` |
| title | 工具栏标题 | `string` | `'选择日期'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 确认选择时触发 | `val: string` |
| update:show | 显示状态变化时触发 | `val: boolean` |
| confirm | 确认选择时触发 | `val: string` |
| cancel | 取消选择时触发 | — |

## 设计规范

::: tip 最佳实践
- 用于移动端日期/时间输入的底部弹层模式。
- 确定按钮使用金色（primary-400）。
- 日列根据所选月份/年份自动调整天数。
- 默认 type=date，完整预订时间戳使用 datetime。
:::

::: warning 注意事项
- 单个选择器列数不要超过 5 列。
- 不要在其他弹层内嵌套日期选择器。
- 选中行必须为白色加粗，不要使用金色文字。
- 必须提供取消按钮允许关闭。
:::
