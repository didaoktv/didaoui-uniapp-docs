# 输入框 DdInput

> 单一高度（44px）输入框基于 var(--neutral-800) 与 var(--radius-md)；4 种类型（text/password/search/number）；聚焦加金色边框 + 发光，错误加红色边框 + 红色发光；clearable 与 showPassword 组合后缀；search 在小程序降级为 text。

## 介绍

DdInput 是统一的文本输入控件，支持 text、password、search、number 四种类型。聚焦时金色边框 + 发光形成品牌识别，错误状态以红色边框 + 红色发光提示校验失败。`clearable` 提供一键清空，`showPassword` 在密码框中提供可见性切换。password 类型使用 uni 原生 password 布尔属性以兼容多端，search 类型在小程序端降级为 text。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-input v-model="text" placeholder="请输入昵称" />
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')
</script>
```

</DemoBlock>
:::

### 密码框与可清空

`type="password"` 搭配 `showPassword` 显示切换图标；`clearable` 显示清空按钮。

:::demo
<DemoBlock>

```vue
<template>
  <dd-input
    v-model="pwd"
    type="password"
    show-password
    clearable
    placeholder="请输入密码"
  />
</template>

<script setup>
import { ref } from 'vue'
const pwd = ref('')
</script>
```

</DemoBlock>
:::

### 错误状态

`error` 置为 true 时显示红色边框与发光。

:::demo
<DemoBlock>

```vue
<template>
  <dd-input v-model="phone" error placeholder="手机号格式错误" />
</template>

<script setup>
import { ref } from 'vue'
const phone = ref('138')
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 输入值 | `string \| number` | `''` |
| type | 输入类型 | `'text' \| 'password' \| 'search' \| 'number'` | `'text'` |
| placeholder | 占位提示文字 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否显示清空按钮 | `boolean` | `false` |
| showPassword | 是否显示密码可见性切换（仅 type=password 有效） | `boolean` | `false` |
| error | 是否错误状态 | `boolean` | `false` |
| maxlength | 最大输入长度，-1 为不限制 | `number` | `-1` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化时触发 | `val: string` |
| focus | 聚焦时触发 | `event: Event` |
| blur | 失焦时触发 | `event: Event` |
| clear | 点击清空按钮时触发 | — |
| confirm | 点击键盘确认键时触发 | `val: string` |
| search | type=search 时点击确认键触发 | `val: string` |

### Slots

| 名称 | 说明 |
|------|------|
| prefix | 输入框前缀内容 |
| suffix | 输入框后缀内容（位于清空/切换按钮之后） |

## 设计规范

::: tip 最佳实践
- 使用金色聚焦环（var(--didao-primary-500) + 发光）保持品牌一致。
- 可编辑/可搜索字段使用 clearable。
- 校验失败用红色边框 + 发光显示错误状态。
- 各状态保持 44px 高度统一。
:::

::: warning 注意事项
- 不要用 placeholder 替代标签。
- 不要在不同状态间改变输入框高度。
- 不要假设 type=search 在小程序端可用——它降级为 text。
:::
