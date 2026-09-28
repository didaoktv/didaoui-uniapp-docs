# 单选框组 DdRadioGroup

> 组合管理一组 DdRadio 的单选容器：统一读写单选 modelValue、支持横向/纵向排列与整组禁用，change 事件携带选中值。

## 介绍

DdRadioGroup 是 DdRadio 的组容器，用于管理一组单选选项。通过 `modelValue` 统一读写选中值，子项使用 `value` 标识；`direction` 控制横向/纵向排列；`disabled` 可整组禁用。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-radio-group v-model="room">
    <dd-radio value="standard" label="标准包厢（4-6人）" />
    <dd-radio value="mini" label="小包厢（2-4人）" />
    <dd-radio value="vip" label="VIP包厢" />
  </dd-radio-group>
</template>

<script setup>
import { ref } from 'vue'
const room = ref('standard')
</script>
```

</DemoBlock>
:::

### 纵向排列与禁用

:::demo
<DemoBlock>

```vue
<template>
  <dd-radio-group v-model="seat" direction="vertical">
    <dd-radio value="a" label="A 区 · 近舞台" />
    <dd-radio value="b" label="B 区 · 中庭" />
    <dd-radio value="c" label="C 区 · 安静角落" />
  </dd-radio-group>
</template>

<script setup>
import { ref } from 'vue'
const seat = ref('a')
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 当前选中值 | `any` | `''` |
| disabled | 是否整组禁用 | `boolean` | `false` |
| direction | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 选中值变化时触发 | `val: any` |
| change | 选中值变化时触发 | `val: any` |

## 设计规范

::: tip 最佳实践
- 单选场景统一使用组容器，子项数量不超过 7 个。
- 选项文案使用名词短语 + 说明，避免歧义。
:::

::: warning 注意事项
- 多选场景请用 CheckboxGroup。
- 即时生效的开关请用 Switch。
:::
