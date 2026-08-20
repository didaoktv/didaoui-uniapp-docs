# 倒计时 DdCountDown

> 使用 endTime + Date.now() 差值而非递减计数以避免漂移累积；毫秒模式渲染节流到 30ms，同时通过差值保证显示准确。

## 介绍

DdCountDown 用于促销倒计时、预订保留、优惠券到期等场景。通过 `time` 设置总时长（ms），`format` 控制显示格式（支持 DD/HH/mm/ss/SSS 占位符）。默认插槽为作用域插槽，暴露各时间分量便于自定义数字块。组件通过 `defineExpose` 暴露 `start`/`stop`/`reset` 方法。

## 代码演示

### 基础用法

`time` 为毫秒数，默认格式 `HH:mm:ss`，`autoStart` 挂载即开始。

:::demo
<DemoBlock>

```vue
<template>
  <dd-count-down :time="2 * 60 * 60 * 1000" />
</template>
```

</DemoBlock>
:::

### 天数与自定义格式

`format` 支持 `DD天 HH:mm:ss` 等组合，适配长倒计时。

:::demo
<DemoBlock>

```vue
<template>
  <dd-count-down :time="36 * 60 * 60 * 1000" format="DD天 HH:mm:ss" />
</template>
```

</DemoBlock>
:::

### 自定义数字块

作用域插槽暴露 `days/hours/minutes/seconds/milliseconds` 等字段，可自定义渲染。

:::demo
<DemoBlock>

```vue
<template>
  <dd-count-down :time="60 * 1000" v-slot="{ minutes, seconds }">
    <view style="display:flex;gap:8rpx;align-items:center">
      <view style="background:#2a2a2a;padding:8rpx 12rpx;border-radius:8rpx;color:#F5A623;font-weight:700">{{ minutes }}</view>
      <text style="color:#fff">:</text>
      <view style="background:#2a2a2a;padding:8rpx 12rpx;border-radius:8rpx;color:#F5A623;font-weight:700">{{ seconds }}</view>
    </view>
  </dd-count-down>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| time | 倒计时总时长（ms） | `number` | `0` |
| format | 显示格式，支持 DD/HH/mm/ss/SSS 占位符 | `string` | `'HH:mm:ss'` |
| autoStart | 是否挂载后自动开始 | `boolean` | `true` |
| millisecond | 是否毫秒级精度（30ms 节流渲染） | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 倒计时变化时触发 | `data: TimeData` |
| finish | 倒计时结束时触发 | - |
| start | 倒计时开始时触发 | - |
| stop | 倒计时停止时触发 | - |

其中 `TimeData` 结构为：

| 字段 | 类型 | 说明 |
|------|------|------|
| days | `number` | 天 |
| hours | `number` | 时 |
| minutes | `number` | 分 |
| seconds | `number` | 秒 |
| milliseconds | `number` | 毫秒 |
| total | `number` | 剩余总毫秒 |

### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| default | 自定义倒计时渲染 | `{ days, hours, minutes, seconds, milliseconds, total, formatted }` |

### Methods

通过 `defineExpose` 暴露，可通过 ref 调用：

| 方法 | 说明 |
|------|------|
| start | 开始倒计时 |
| stop | 停止倒计时 |
| reset | 重置为初始 time 并停止 |

## 设计规范

::: tip 最佳实践
- 通过作用域插槽渲染自定义数字块以匹配品牌风格。
- 调用暴露的 `reset()` 以原始时长重新开始。
:::

::: warning 注意事项
- 毫秒模式并非逐毫秒更新 —— 渲染节流到 30ms 以保证性能，显示仍通过差值保持准确。
:::
