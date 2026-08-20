# 弹出层 DdPopup

> 多用途 5 位置弹出层（top/bottom/left/right/center），过渡时长由 CSS 变量驱动，可选遮罩与关闭按钮，圆角方向随位置自适应。

## 介绍

DdPopup 是通用的弹出层容器，支持 top / bottom / left / right / center 五个弹出位置，覆盖底部面板、侧边抽屉、居中对话框等场景。通过 `v-model` 控制显隐，`position` 切换弹出方向，`round` 开启方向自适应圆角。可配置遮罩、关闭按钮（4 个角位）、安全区适配。提供 open/opened/close/closed 四个时机事件，opened/closed 在过渡完成后触发。

## 代码演示

### 底部弹出

`position="bottom"`（默认）配合 `round` 圆角，是最常用的底部面板形态。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">底部弹出</dd-button>
  <dd-popup v-model="show" position="bottom" round>
    <view style="padding:32rpx;color:var(--dd-text-primary)">底部面板内容</view>
  </dd-popup>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

</DemoBlock>
:::

### 居中弹出

`position="center"` 使用淡入 + 缩放动画，配合 `round` 适合对话框形态。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">居中弹出</dd-button>
  <dd-popup v-model="show" position="center" round>
    <view style="padding:48rpx;width:560rpx;color:var(--dd-text-primary)">居中内容</view>
  </dd-popup>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

</DemoBlock>
:::

### 侧边弹出与关闭按钮

`position="right"` 配合 `closeable` 显示关闭按钮，`closeIconPosition` 控制角位，适合侧边筛选面板。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">右侧弹出</dd-button>
  <dd-popup
    v-model="show"
    position="right"
    :duration="0.3"
    closeable
    close-icon-position="top-left"
    width="80%"
  >
    <view style="padding:32rpx;color:var(--dd-text-primary)">侧边面板内容</view>
  </dd-popup>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 是否显示（支持 v-model） | `boolean` | `false` |
| position | 弹出位置 | `'top' \| 'bottom' \| 'left' \| 'right' \| 'center'` | `'bottom'` |
| round | 是否圆角（方向随位置自适应） | `boolean` | `false` |
| overlay | 是否显示遮罩 | `boolean` | `true` |
| closeable | 是否显示关闭按钮 | `boolean` | `false` |
| closeIconPosition | 关闭按钮位置 | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top-right'` |
| safeAreaInsetBottom | 是否适配底部安全区（bottom 位置） | `boolean` | `true` |
| duration | 过渡时长（秒） | `number` | `0.3` |
| width | 面板宽度（left/right 位置生效） | `string` | `''` |
| height | 面板高度（top/bottom 位置生效） | `string` | `''` |
| closeOnClickOverlay | 点击遮罩是否关闭 | `boolean` | `true` |
| zIndex | 层级（遮罩为 zIndex，面板为 zIndex+1） | `number` | `2000` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 显隐变化时触发 | `val: boolean` |
| open | 打开时立即触发 | 无 |
| opened | 打开过渡完成后触发 | 无 |
| close | 关闭时立即触发 | 无 |
| closed | 关闭过渡完成后触发 | 无 |
| click-overlay | 点击遮罩时触发 | 无 |
| click-close-icon | 点击关闭按钮时触发 | 无 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 弹出层内容 |

## 设计规范

::: tip 最佳实践
- bottom + round 用于底部面板。
- center 用于对话框/模态。
- bottom 弹出开启 safeAreaInsetBottom。
- 侧边面板配合 closeable 与合适的 closeIconPosition。
- 内联浮动面板设置 `overlay=false`。
:::

::: warning 注意事项
- 不要在相同 zIndex 堆叠多个 popup。
- 不要忘记处理 update:modelValue 关闭。
- opened/closed 基于 setTimeout(duration*1000)，可能有轻微漂移。
:::
