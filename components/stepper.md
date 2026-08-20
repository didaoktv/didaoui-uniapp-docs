# 步进器 DdStepper

> 胶囊形（var(--radius-full)）步进器基于 var(--neutral-800) 配 1px 边框；两端为圆形金色渐变按钮（primary-300→600）配 neutral-900 ± 字形（非金底深字）；md 36px / sm 28px；按钮在 min/max 自动禁用并触发 overlimit；disablePlus/disableMinus 强制单边禁用；默认 min=1 max=99 step=1。

## 介绍

DdStepper 用于小数值范围内的数量选择，如预订人数、酒水订单数量等。胶囊形容器两端是圆形金色渐变按钮，中间为加粗数值。达到边界时对应按钮自动禁用并触发 `overlimit` 事件。`disablePlus` / `disableMinus` 可强制单边禁用。md 用于表单，sm 用于列表行。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-stepper v-model="count" />
</template>

<script setup>
import { ref } from 'vue'
const count = ref(1)
</script>
```

</DemoBlock>
:::

### 范围与步长

`min` / `max` / `step` 控制数值范围与步进。

:::demo
<DemoBlock>

```vue
<template>
  <dd-stepper v-model="guests" :min="1" :max="20" :step="1" />
</template>

<script setup>
import { ref } from 'vue'
const guests = ref(4)
</script>
```

</DemoBlock>
:::

### 尺寸与单边禁用

`size="sm"` 用于列表行；`disable-minus` / `disable-plus` 强制单边禁用。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:32rpx;align-items:center">
    <dd-stepper v-model="n" size="sm" />
    <dd-stepper v-model="m" disable-plus />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const n = ref(2)
const m = ref(5)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 当前值 | `number` | `1` |
| min | 最小值 | `number` | `1` |
| max | 最大值 | `number` | `99` |
| step | 步长 | `number` | `1` |
| size | 尺寸 | `'md' \| 'sm'` | `'md'` |
| disabled | 是否整体禁用 | `boolean` | `false` |
| disablePlus | 是否禁用增加按钮 | `boolean` | `false` |
| disableMinus | 是否禁用减少按钮 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化时触发 | `val: number` |
| change | 值变化时触发 | `val: number` |
| plus | 点击增加按钮时触发（无论是否生效） | — |
| minus | 点击减少按钮时触发（无论是否生效） | — |
| overlimit | 点击被禁用按钮时触发 | `'plus' \| 'minus'` |

## 设计规范

::: tip 最佳实践
- 用于小数值范围内的数量选择（默认 min=1 max=99）。
- 边界自动禁用按钮并触发 overlimit。
- 列表行用 sm，表单用 md。
- 监听 plus/minus 事件做方向埋点。
:::

::: warning 注意事项
- 连续范围值请用 Slider。
- 超过 100 的范围请用文本输入。
- 不允许低于最小值或高于最大值。
:::
