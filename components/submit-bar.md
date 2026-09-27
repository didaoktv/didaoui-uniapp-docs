# 提交订单栏 DdSubmitBar

> 提交订单栏：底部固定的「合计价格 + 提交按钮」横条，支持提示区、插槽扩展，API 对齐 Vant SubmitBar。

## 介绍

DdSubmitBar 用于订单/结算页底部：左侧合计价格（`price` 单位**分**，自动按 `decimalLength` 渲染 `¥整数.小数`），右侧提交按钮（`buttonText` / `buttonType` / `buttonColor`，内置 `loading` / `disabled`，禁用或加载中不触发 `submit`）。`tip` / `tipIcon` / `tip` 插槽渲染价格上方的提示条；`top` / `default` / `button` 插槽可进一步定制。默认固定在视口底部并预留安全区，`placeholder` 开启时生成等高占位视图防止内容被遮挡。

::: warning 注意事项
- `price` 单位为分（如 `12500` 渲染为 `¥125.00`）；不传（undefined）则不渲染价格区。
- `decimalLength` 设为 `0` 可隐藏小数。
- `buttonColor` 通过样式透传覆盖按钮背景；按钮类型走 `buttonType`（默认 `danger`）。
- `button` 插槽整体替换默认按钮，此时 `buttonText` / `loading` / `disabled` 不再生效。
:::

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
</template>

<script setup lang="ts">
function onSubmit() {
  console.log('submit')
}
</script>
```

</DemoBlock>
:::

### 禁用 / 加载 / 自定义金额格式

:::demo
<DemoBlock>

```vue
<template>
  <view class="wrap">
    <dd-submit-bar
      :price="12500"
      :decimal-length="0"
      label="应付："
      suffix-label="含服务费"
      button-text="去结算"
      :loading="loading"
      :disabled="disabled"
      @submit="onSubmit"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(false)
const disabled = ref(false)
function onSubmit() {
  loading.value = true
  setTimeout(() => (loading.value = false), 1500)
}
</script>
```

</DemoBlock>
:::

### 提示信息与自定义按钮

:::demo
<DemoBlock>

```vue
<template>
  <view class="wrap">
    <dd-submit-bar
      :price="19800"
      tip="你的收货地址不支持同城送，我们已为你推荐快递配送"
      tip-icon="info-o"
      button-text="提交订单"
      button-color="var(--dd-primary)"
      @submit="onSubmit"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
function onSubmit() {
  console.log('submit')
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| price | 价格（单位：分），不传则不渲染价格区 | `number` | — |
| label | 价格左侧文案 | `string` | `'合计：'` |
| currency | 货币符号 | `string` | `'¥'` |
| decimalLength | 价格小数位数 | `string \| number` | `2` |
| suffixLabel | 价格右侧附加文案 | `string` | `''` |
| textAlign | 价格区对齐方式 | `string` | `''` |
| tip | 提示区文案 | `string` | `''` |
| tipIcon | 提示区图标名（dd-icon name） | `string` | `''` |
| buttonText | 按钮文案 | `string` | `''` |
| buttonType | 按钮类型（dd-button type） | `string` | `'danger'` |
| buttonColor | 按钮自定义背景色 | `string` | `''` |
| loading | 按钮加载态 | `boolean` | `false` |
| disabled | 按钮禁用态 | `boolean` | `false` |
| placeholder | 固定在底部时是否生成占位视图 | `boolean` | `false` |
| safeAreaInsetBottom | 是否预留底部安全区 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| submit | 点击按钮时触发（disabled / loading 时不触发） | — |

### Slots

| 名称 | 说明 |
|------|------|
| top | 价格区上方自定义内容（提示条之上） |
| tip | 提示条内容（替换 `tip` 文案） |
| default | 价格区左侧自定义内容 |
| button | 自定义按钮（整体替换默认 dd-button） |
