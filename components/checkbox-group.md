# 复选框组 DdCheckboxGroup

> 组合管理一组 DdCheckbox 的多选容器：统一读写数组 modelValue、自动增删数组项、支持横向/纵向排列、整组禁用与数量上限。

## 介绍

DdCheckboxGroup 是 DdCheckbox 的组容器，用于管理一组复选框。通过数组 `modelValue` 统一收集选中值，子项使用 `value` 标识；`max` 限制最多可选项数，达到上限后未选项自动禁用；`disabled` 可整组禁用；`direction` 控制横向/纵向排列。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-checkbox-group v-model="fruits">
    <dd-checkbox value="apple" label="果盘" />
    <dd-checkbox value="beer" label="精酿啤酒" />
    <dd-checkbox value="snack" label="小食拼盘" />
  </dd-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
const fruits = ref(['apple'])
</script>
```

</DemoBlock>
:::

### 数量限制与禁用

`max` 达到上限后未选项自动禁用；`disabled` 整组禁用。

:::demo
<DemoBlock>

```vue
<template>
  <dd-checkbox-group v-model="maxed" :max="2">
    <dd-checkbox value="a" label="选项 A（最多选 2 项）" />
    <dd-checkbox value="b" label="选项 B" />
    <dd-checkbox value="c" label="选项 C" />
  </dd-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
const maxed = ref(['a'])
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 选中值数组 | `any[]` | `[]` |
| disabled | 是否整组禁用 | `boolean` | `false` |
| direction | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| max | 最大可选数量 | `number` | `-` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 选中数组变化时触发 | `val: any[]` |
| change | 选中数组变化时触发 | `val: any[]` |

## 设计规范

::: tip 最佳实践
- 多选场景统一使用组容器收集数组值，避免逐个监听子项。
- 设置 max 上限并在文案中提示剩余可选数。
:::

::: warning 注意事项
- 组内子项需使用 value 标识，勿直接依赖 label。
- 单选场景请用 RadioGroup。
:::
