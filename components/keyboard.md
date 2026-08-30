# 键盘 DdKeyboard

> 键盘面板组件，内置两种模式：数字键盘 / 身份证键盘（含 X 键），带顶部工具条（取消 / 提示 / 完成），支持乱序与安全区适配。车牌号输入请使用下方独立的 [DdCarKeyboard](#车牌键盘-ddcarkeyboard)。

## 介绍

DdKeyboard 以底部弹层呈现。`mode` 切换内部键盘：`number` 数字（可选小数点）、`card` 身份证（含 X）。`random` 打乱按键顺序防止偷窥输入；`overlay=false` 时不显示遮罩，方便用户边看输入框边输入。输入值由调用方自行拼接维护（监听 `change` / `backspace`）。

## 代码演示

### 基础用法（数字键盘）

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-input v-model="price" placeholder="输入金额" readonly @click="show = true" />
    <dd-keyboard
      v-model:show="show"
      mode="number"
      tips="输入金额"
      @change="onChange"
      @backspace="onBackspace"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
const price = ref('')
function onChange(val: string) {
  price.value += val
}
function onBackspace() {
  price.value = price.value.slice(0, -1)
}
</script>
```

</DemoBlock>
:::

### 身份证键盘

`mode="card"` 含 X 键。

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="showCard = true">身份证键盘</dd-button>
    <dd-keyboard v-model:show="showCard" mode="card" :random="true" @change="onChange" @backspace="onBackspace" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showCard = ref(false)
const value = ref('')
function onChange(val: string) {
  value.value += val
}
function onBackspace() {
  value.value = value.value.slice(0, -1)
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| mode | 键盘类型，`number` 数字 / `card` 身份证 | `string` | `'number'` |
| dotDisabled | 是否不显示"."按键（仅 mode=number 有效） | `boolean` | `false` |
| tooltip | 是否显示键盘顶部工具条 | `boolean` | `true` |
| showTips | 是否显示工具条中间的提示 | `boolean` | `true` |
| tips | 工具条中间的提示文字，空字符串则显示模式默认提示 | `string` | `''` |
| showCancel | 是否显示工具条左边的"取消"按钮 | `boolean` | `true` |
| showConfirm | 是否显示工具条右边的"完成"按钮 | `boolean` | `true` |
| random | 是否打乱键盘按键的顺序 | `boolean` | `false` |
| safeAreaInsetBottom | 是否开启底部安全区适配 | `boolean` | `true` |
| closeOnClickOverlay | 是否允许点击遮罩收起键盘 | `boolean` | `true` |
| show | 控制键盘的弹出与收起 | `boolean` | `false` |
| overlay | 是否显示遮罩 | `boolean` | `true` |
| zIndex | 键盘的 z-index 值 | `string \| number` | `10075` |
| cancelText | 取消按钮的文字 | `string` | `'取消'` |
| confirmText | 确认按钮的文字 | `string` | `'确认'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 按键被点击（不含退格键） | `val: string` |
| backspace | 退格键被点击（支持长按连删） | — |
| cancel | 工具条"取消"按钮被点击 | — |
| confirm | 工具条"完成"按钮被点击 | — |
| close | 键盘收起时触发 | — |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 键盘工具条上方的内容区域，可放置输入框回显 |

## 设计规范

::: tip 最佳实践
- 收款金额、会员手机号等场景配合 `random` 乱序防止偷窥。
- 金额输入保留小数点（默认开启），身份证用 `mode="card"`。
- 输入值由调用方维护：`change` 追加、`backspace` 去尾。
:::

::: warning 注意事项
- `dotDisabled` 仅在 `mode="number"` 下生效。
- 需要让用户看到输入框时设 `overlay=false`，并注意页面内容会被键盘遮挡。
:::

## 数字键盘 DdNumberKeyboard

> 纯数字键盘面板（不含弹层）：数字 / 身份证两种模式，可选小数点与乱序，退格键支持长按连删。

DdNumberKeyboard 是 `dd-keyboard` 弹层内部使用的键盘主体，也可单独内嵌到页面（如自定义收银台）。`mode="card"` 时第 10 键为 X；`dotDisabled=false` 时含小数点按键。事件仅 `change` 与 `backspace`，输入值由调用方维护。

### 代码演示

#### 基础用法（内嵌）

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-text :text="value || '请输入'" :size="20" align="center" />
    <dd-number-keyboard @change="onChange" @backspace="onBackspace" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
function onChange(val: string) {
  value.value += val
}
function onBackspace() {
  value.value = value.value.slice(0, -1)
}
</script>
```

</DemoBlock>
:::

#### 身份证模式 / 隐藏小数点 / 乱序

:::demo
<DemoBlock>

```vue
<template>
  <dd-number-keyboard mode="card" :random="true" @change="onChange" @backspace="onBackspace" />
</template>

<script setup lang="ts">
const value = ''
function onChange(val: string) { console.log(val) }
function onBackspace() {}
</script>
```

</DemoBlock>
:::

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| mode | 键盘类型，`number` 数字 / `card` 身份证（含 X 键） | `string` | `'number'` |
| dotDisabled | 是否不显示"."按键（仅 mode=number 有效） | `boolean` | `false` |
| random | 是否打乱键盘按键的顺序 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 按键被点击（不含退格键） | `val: string` |
| backspace | 退格键被点击（支持长按连删） | — |

### 设计规范

::: tip 最佳实践
- 需要弹层形态（遮罩、工具条、安全区适配）直接用 `dd-keyboard`，本组件用于内嵌自定义场景。
- 防偷窥场景开 `random`。
:::

::: warning 注意事项
- 组件不管理输入值，金额格式校验（两位小数、非零开头等）需调用方自行处理。
- `mode="card"` 下小数点按键不可用。
:::

## 车牌键盘 DdCarKeyboard

> 完整车牌号输入组件：车牌格子（7 位普通 + 新能源绿牌位）与弹出键盘一体，按位锁键，`v-model` 双向绑定。

DdCarKeyboard 为一体式车牌输入：点击格子在页面底部弹出键盘，第 1 位为省份简称布局，其余位为字母数字布局。键盘按输入位置自动锁定不可用按键——第 2 位只能字母，中间位禁 `O` 与 学/挂/警/港/澳，新能源位（第 6 位）放开 学/挂/警/港/澳 且行 2 换为新能源变体布局。填完第 7 位自动收起键盘，第 8 位（绿框"新能源"位）由用户主动点选。

### 代码演示

#### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-car-keyboard v-model="plate" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const plate = ref('')
</script>
```

</DemoBlock>
:::

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 车牌号（`v-model`），支持清空与部分更新 | `string` | `''` |
| customClass | 自定义根节点类名 | `string` | `''` |
| customStyle | 自定义根节点样式 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 输入变化时触发 | `val: string` |
| focus | 键盘弹出时触发 | `val: string` |
| blur | 键盘收起时触发 | `val: string` |

### 设计规范

::: tip 最佳实践
- 会员车辆绑定、代客登记车牌等场景直接 `v-model` 绑定，无需自行拼接输入值。
- 车牌格式校验（省份简称 + 6/7 位、新能源位）在提交时统一处理。
:::

::: warning 注意事项
- v1.3 起组件由「纯键盘面板」重构为「格子 + 键盘一体」，旧 `change` / `backspace` / `random` / `autoChange` API 已移除；需要纯键盘面板时用 `dd-number-keyboard` 或 `dd-keyboard`。
- 键盘经 `dd-popup` 弹出（遮罩 + 底部滑入动效 + 安全区适配，`z-index` 取 popup 层级 10075），点击遮罩 / 取消 / 完成均可收起并触发 `blur`；键盘弹出会遮挡页面底部内容。
:::
