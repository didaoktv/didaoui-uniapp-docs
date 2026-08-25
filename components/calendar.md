# 日历选择 DdCalendar

> 月历 + 时段选择组件，支持单选 / 日期区间、禁选日期与时段格展示，供店员端排班表（日历视图）与 C 端预订选日期/时段（时段价目）复用。

## 介绍

DdCalendar 以月历形式展示日期，支持三种选择模式：单选（`range=false`）、多选/区间（`range=true`，落定后返回首尾两天）。可配置 `minDate` / `maxDate` 或 `disabledDate` 回调禁用不可用日期；通过 `timeSlots` 在当前月下方渲染时段格（如「下午茶 / 晚上场」），供预订选时段。

## 代码演示

### 单选日期（预订选日）

:::demo
<DemoBlock>

```vue
<template>
  <dd-calendar v-model="dates" :min-date="today" @confirm="onConfirm" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const today = new Date().toISOString().slice(0, 10)
const dates = ref<string[]>([])
function onConfirm(val: string | string[]) {
  console.log('选中:', val)
}
</script>
```

</DemoBlock>
:::

### 区间 + 时段（排班 / 时段价目）

:::demo
<DemoBlock>

```vue
<template>
  <dd-calendar
    v-model="dates"
    range
    :disabled-date="isClosed"
    :time-slots="['下午茶', '欢唱', '通宵']"
    @slot-click="onSlot"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dates = ref<string[]>([])
function isClosed(date: string) {
  const d = new Date(date).getDay()
  return d === 0 // 周日休整不可选
}
function onSlot(v: { date: string; time: string }) {
  console.log('时段:', v)
}
</script>
```

</DemoBlock>
:::

> 完整可交互演示：运行 `npm run dev:h5`（端口 5274）后访问日历页（含单选 / 区间 / 时段 / 禁选）。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 已选日期集合（`v-model`） | `string[]` | `[]` |
| range | 区间选择模式 | `boolean` | `false` |
| minDate | 最早可选日期（`YYYY-MM-DD`） | `string` | `''` |
| maxDate | 最晚可选日期（`YYYY-MM-DD`） | `string` | `''` |
| disabledDate | 额外禁用回调 | `(date: string) => boolean` | `() => false` |
| timeSlots | 时段格文案列表 | `string[]` | `[]` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| confirm | 点「确定」落定 | `string \| string[]`（区间为两元素数组） |
| change | 选中变化（点击日期即触发） | `string \| string[]` |
| slot-click | 点击某个时段格 | `{ date: string, time: string }` |

## 设计规范

::: tip 最佳实践
- 排班表「我的排班」用 `range` 区间视图 + `timeSlots` 时段格。
- C 端预订选日期/时段（时段价目 v1.1）用单选 + `timeSlots`，时段点击后由页面展示对应价目。
- 节假日/已约满日期通过 `disabledDate` 返回禁选。
:::

::: warning 注意事项
- 日期统一 `YYYY-MM-DD` 字符串格式，避免时区导致 ±1 天偏差。
- 区间模式落定需要至少选中两天，空选时 confirm 返回空字符串。
:::