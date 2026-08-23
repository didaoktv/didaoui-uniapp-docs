# 键盘 DdKeyboard

> 键盘面板组件，内置三种模式：数字键盘 / 身份证键盘（含 X 键）/ 车牌键盘（省份简称 + 字母），带顶部工具条（取消 / 提示 / 完成），支持乱序与安全区适配。

## 介绍

DdKeyboard 以底部弹层呈现。`mode` 切换内部键盘：`number` 数字（可选小数点）、`card` 身份证（含 X）、`car` 车牌（内部渲染 `dd-car-keyboard`，中/英自动切换）。`random` 打乱按键顺序防止偷窥输入；`overlay=false` 时不显示遮罩，方便用户边看输入框边输入。输入值由调用方自行拼接维护（监听 `change` / `backspace`）。

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

### 身份证键盘 / 车牌键盘

`mode="card"` 含 X 键；`mode="car"` 省份与字母切换输入。

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="showCard = true">身份证键盘</dd-button>
    <dd-button type="primary" @click="showCar = true">车牌键盘</dd-button>
    <dd-keyboard v-model:show="showCard" mode="card" :random="true" @change="onChange" @backspace="onBackspace" />
    <dd-keyboard v-model:show="showCar" mode="car" :auto-change="true" @change="onChange" @backspace="onBackspace" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showCard = ref(false)
const showCar = ref(false)
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
| mode | 键盘类型，`number` 数字 / `card` 身份证 / `car` 车牌 | `string` | `'number'` |
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
| autoChange | mode=car 时输入一个中文后是否自动切换到英文 | `boolean` | `false` |

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
- `dotDisabled` 仅在 `mode="number"` 下生效；`autoChange` 仅在 `mode="car"` 下生效。
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

> 车牌输入键盘（不含弹层）：省份简称与字母（含车牌专用序号）双布局切换，支持乱序与输入中文后自动切英文。

DdCarKeyboard 是 `dd-keyboard` 在 `mode="car"` 时内部使用的键盘主体，也可单独内嵌。默认显示省份简称布局，点击"中/英"或输入一个汉字后（`autoChange` 开启时）切换到字母布局；字母布局含"港澳学警"等车牌专用字。退格键支持长按连删。

### 代码演示

#### 基础用法（内嵌）

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-text :text="plate || '请输入车牌'" :size="20" align="center" />
    <dd-car-keyboard @change="onChange" @backspace="onBackspace" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const plate = ref('')
function onChange(val: string) {
  plate.value += val
}
function onBackspace() {
  plate.value = plate.value.slice(0, -1)
}
</script>
```

</DemoBlock>
:::

#### 自动切换 + 乱序

`autoChange` 输入一个中文后自动切到英文布局。

:::demo
<DemoBlock>

```vue
<template>
  <dd-car-keyboard :auto-change="true" :random="true" @change="onChange" @backspace="onBackspace" />
</template>

<script setup lang="ts">
function onChange(val: string) { console.log(val) }
function onBackspace() {}
</script>
```

</DemoBlock>
:::

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| random | 是否打乱键盘按键的顺序 | `boolean` | `false` |
| autoChange | 输入一个中文后是否自动切换到英文 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 按键被点击（省份简称或字母，不含退格键） | `val: string` |
| backspace | 退格键被点击（支持长按连删） | — |

### 设计规范

::: tip 最佳实践
- 代驾登记、会员车辆绑定等场景配合 `dd-keyboard mode="car"` 弹出使用。
- 开启 `autoChange` 减少用户手动切换中/英的操作成本。
:::

::: warning 注意事项
- 组件不拼接车牌值，新能源 8 位车牌长度校验需调用方自行处理。
- 键盘内置省份与字母两套布局，无法自定义按键内容。
:::
