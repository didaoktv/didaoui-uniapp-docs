# 轻提示 DdToast

> 毛玻璃胶囊（圆角 var(--radius-full)）+ 语义色图标，loading 类型不自动关闭，pointer-events none，默认居中，默认时长 2000ms。

## 介绍

DdToast 是**命令式调用**的轻提示组件，用于操作结果的短暂反馈。组件本身不接收 props，而是通过模块级响应式状态驱动：在页面中放置 `<dd-toast />` 后，调用 `showToast` / `showSuccess` / `showError` / `showLoading` / `hideToast` 即可控制显示。支持 text / success / error / warning / loading 五种类型与 top / center / bottom 三种位置。loading 类型不会自动关闭，需手动调用 `hideToast()`。

## 代码演示

### 基础用法

先在页面放置 `<dd-toast />`，再通过命令式 API 调用。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:16rpx;flex-wrap:wrap">
    <dd-button type="primary" @click="showToast('这是一条提示')">文字提示</dd-button>
    <dd-button type="success" @click="showSuccess('操作成功')">成功</dd-button>
    <dd-button type="danger" @click="showError('操作失败')">失败</dd-button>
  </view>
  <dd-toast />
</template>

<script setup>
import { showToast, showSuccess, showError } from '@didaoktv/didaoui-uniapp'
</script>
```

</DemoBlock>
:::

### Loading 提示

`showLoading` 显示带 spinner 的加载提示，**不会自动关闭**，需手动调用 `hideToast()`。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="onLoad">加载数据</dd-button>
  <dd-toast />
</template>

<script setup>
import { showLoading, hideToast } from '@didaoktv/didaoui-uniapp'

function onLoad() {
  showLoading('加载中')
  setTimeout(() => {
    hideToast()
  }, 2000)
}
</script>
```

</DemoBlock>
:::

### 自定义位置与时长

通过 `showToast` 传入完整 options 控制位置、时长、图标。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="secondary" @click="showToast({ message: '顶部提示', position: 'top', duration: 1500 })">
    顶部提示
  </dd-button>
  <dd-toast />
</template>

<script setup>
import { showToast } from '@didaoktv/didaoui-uniapp'
</script>
```

</DemoBlock>
:::

## API

DdToast 为命令式组件，`<dd-toast />` 不接收 props，通过以下函数控制：

### 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| showToast | 显示提示（字符串或完整 options） | `options: string \| ToastOptions` |
| showSuccess | 显示成功提示 | `message: string` |
| showError | 显示错误提示 | `message: string` |
| showLoading | 显示加载提示（不自动关闭） | `message?: string`（默认 '加载中'） |
| hideToast | 隐藏提示 | 无 |

### ToastOptions

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| message | 提示文案 | `string` | `''` |
| type | 类型 | `'text' \| 'success' \| 'error' \| 'warning' \| 'loading'` | `'text'` |
| position | 位置 | `'top' \| 'center' \| 'bottom'` | `'center'` |
| duration | 显示时长（ms，loading 类型忽略） | `number` | `2000` |
| icon | 是否显示图标（text 类型强制隐藏） | `boolean` | `true` |

### 图标对应

| type | 图标 | 颜色 |
|------|------|------|
| success | ✓ | success-400 |
| error | ✕ | error-400 |
| warning | ! | warning-400 |
| loading | spinner | primary-400 |
| text | 无 | — |

## 设计规范

::: tip 最佳实践
- 用于操作结果的简短反馈。
- 默认时长 2000ms。
- loading 类型需手动关闭（不自动消失）。
- 默认位置为 center。
- icon 默认 true（text 类型强制隐藏）。
:::

::: warning 注意事项
- 不要同时堆叠多个 toast。
- 不要用于需要确认的操作。
- 不要在 toast 内放交互元素（pointer-events none）。
- 不要期待 loading toast 自动关闭。
:::
