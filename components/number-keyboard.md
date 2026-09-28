# 数字键盘 DdNumberKeyboard

> 内联数字键盘：数字与身份证两种模式、可隐藏小数点、可随机打乱键序，通过 change / backspace 事件驱动输入。

## 介绍

DdNumberKeyboard 是非弹窗形态的数字键盘，可直接嵌入页面。`mode` 支持数字键盘（number）与身份证键盘（card）；`dotDisabled` 隐藏小数点；`random` 打乱按键顺序；输入通过 `change` / `backspace` 事件由调用方自行拼装。

## 代码演示

### 内联数字键盘

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <view>输入值：{{ val || '尚未输入' }}</view>
    <dd-number-keyboard mode="number" @change="v => val += v" @backspace="onBackspace" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const val = ref('')
function onBackspace() { val.value = val.value.slice(0, -1) }
</script>
```

</DemoBlock>
:::

### 身份证键盘

`mode="card"` 含「X」位，用于身份证号输入。

:::demo
<DemoBlock>

```vue
<template>
  <dd-number-keyboard mode="card" @change="v => card += v" @backspace="card = card.slice(0, -1)" />
</template>

<script setup>
import { ref } from 'vue'
const card = ref('')
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| mode | 键盘类型 | `'number' \| 'card'` | `'number'` |
| dotDisabled | 是否隐藏小数点「.」 | `boolean` | `false` |
| random | 是否打乱按键顺序 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 点击数字键触发 | `v: string \| number` |
| backspace | 点击退格键触发 | `-` |

## 设计规范

::: tip 最佳实践
- 内联键盘用于金额、数量、证件号等短输入，自带输入框的场景。
- 拼装逻辑由调用方统一管理，便于校验与格式化。
:::

::: warning 注意事项
- 内联键盘不可见时勿挂载，避免占用布局空间。
- 弹出式键盘请用 DdKeyboard。
:::
