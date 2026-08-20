# 表单项 DdField

> 跨端 field 映射：type=password 使用 uni 原生 password 布尔属性，type=textarea 切换为原生 textarea；清除按钮与字数统计作为控件下方附加的整行展示。

## 介绍

DdField 是带标签的表单输入行，支持 text、textarea、password、number、digit 五种类型。固定宽度标签配可选必填星号，控件区按 `inputAlign` 对齐。`clearable` 提供清空按钮，`showWordLimit` 显示字数计数，`autosize` 让 textarea 自动高度。错误状态以红色控件文字与下方错误信息呈现。type=password 使用 uni 原生 password 布尔属性以兼容多端。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-field v-model="name" label="预订人" placeholder="请输入姓名" />
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
</script>
```

</DemoBlock>
:::

### 多行文本与字数限制

`type="textarea"` 配合 `autosize` 与 `show-word-limit`。

:::demo
<DemoBlock>

```vue
<template>
  <dd-field
    v-model="remark"
    type="textarea"
    label="备注"
    placeholder="请输入备注"
    :maxlength="50"
    show-word-limit
    autosize
  />
</template>

<script setup>
import { ref } from 'vue'
const remark = ref('')
</script>
```

</DemoBlock>
:::

### 必填、错误与右对齐

`required` 显示必填星号；`error` + `error-message` 显示错误；`input-align="right"` 右对齐输入。

:::demo
<DemoBlock>

```vue
<template>
  <dd-field
    v-model="phone"
    label="手机号"
    required
    input-align="right"
    clearable
    error
    error-message="请输入正确的手机号"
  />
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
| type | 输入类型 | `'text' \| 'textarea' \| 'password' \| 'number' \| 'digit'` | `'text'` |
| label | 标签文字 | `string` | `''` |
| placeholder | 占位提示文字 | `string` | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| required | 是否必填（显示星号） | `boolean` | `false` |
| borderless | 是否无边框 | `boolean` | `false` |
| inputAlign | 输入对齐方式 | `'left' \| 'center' \| 'right'` | `'left'` |
| clearable | 是否显示清空按钮 | `boolean` | `false` |
| maxlength | 最大输入长度，-1 为不限制 | `number` | `-1` |
| showWordLimit | 是否显示字数计数 | `boolean` | `false` |
| autosize | textarea 是否自适应高度 | `boolean` | `false` |
| error | 是否错误状态 | `boolean` | `false` |
| errorMessage | 错误提示文字 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化时触发 | `val: string` |
| focus | 聚焦时触发 | `event: Event` |
| blur | 失焦时触发 | `event: Event` |
| clear | 点击清空按钮时触发 | — |
| confirm | 点击键盘确认键时触发 | `val: string` |

### Slots

| 名称 | 说明 |
|------|------|
| label | 自定义标签内容（优先于 label prop） |

## 设计规范

::: tip 最佳实践
- type=password 会映射到 uni 原生 password 布尔属性（跨端一致）。
- 受限输入（如备注）使用 maxlength + showWordLimit。
:::

::: warning 注意事项
- 不要期望 type=password 生成原生 type 属性——uni-app input 使用 password 布尔属性。
:::
