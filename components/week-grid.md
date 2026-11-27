# 周视图排班网格 DdWeekGrid

> 7 列（周一~周日）排班视图，供店员端「我的排班」与管理层「排班管理」两页共用。组件库首个周视图；dd-calendar 是月历语义，不复用。

## 介绍

DdWeekGrid 消费统一的 `days` 契约：服务端补齐一周 7 天，休息日 `dayType='REST'` 且 `shifts` 为空数组，前端零派生。每天按班次展示 `startTime ~ endTime` 与角色，休息日显示「休」。点击某日触发 `day-tap` 事件回传该日数据（管理层可据此打开编辑）。

## 代码演示

### 只读周视图

:::demo
<DemoBlock>

```vue
<template>
  <dd-week-grid :days="days" @day-tap="onTap" />
</template>

<script setup lang="ts">
const days = [
  {
    date: "2026-11-23",
    dayType: "SHIFT",
    shifts: [{ id: "1", startTime: "14:00", endTime: "22:00", role: "服务员" }],
  },
  { date: "2026-11-24", dayType: "REST", shifts: [] },
  {
    date: "2026-11-25",
    dayType: "SHIFT",
    shifts: [{ id: "2", startTime: "18:00", endTime: "02:00", role: "收银" }],
  },
  { date: "2026-11-26", dayType: "REST", shifts: [] },
  { date: "2026-11-27", dayType: "REST", shifts: [] },
  {
    date: "2026-11-28",
    dayType: "SHIFT",
    shifts: [{ id: "3", startTime: "13:00", endTime: "21:00", role: "服务员" }],
  },
  { date: "2026-11-29", dayType: "REST", shifts: [] },
];
function onTap(day: { date: string }) {
  console.log("点了:", day.date);
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明                    | 类型        | 默认值 |
| ---- | ----------------------- | ----------- | ------ |
| days | 一周 7 天数据（周一在前） | `WeekDay[]` | —      |

`WeekDay = { date: string; dayType: 'SHIFT' \| 'REST'; shifts: WeekShift[] }`；`WeekShift` 至少含 `startTime`，可选 `id` / `endTime` / `role`，其余字段透传不渲染。

> 组件不自带周切换，周起始由业务侧决定后重新传入 `days` 即可。

### Events

| 事件    | 说明         | 回调参数       |
| ------- | ------------ | -------------- |
| day-tap | 点击某日格子 | `day: WeekDay` |

## 设计规范

- 7 列等宽，窄屏下每格内容以「时间短 + 角色辅助」两级呈现；休息日居中显示「休」。
- 颜色/间距/圆角/字号全部消费 DidaoUI token，不硬编码。
