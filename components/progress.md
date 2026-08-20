# 进度条 DdProgress

> 三类型（linear/circular/steps），circular 使用 conic-gradient + bg-surface 遮罩（无 SVG，小程序兼容）；金色渐变 + shimmer + 发光，steps 默认 5 步，color/trackColor 可覆盖。

## 介绍

DdProgress 用于加载进度、多步流程与完成度展示。linear 为带 shimmer 流光与发光的横向进度条；circular 通过 conic-gradient + 内圈遮罩实现圆环进度（无 SVG，兼容小程序）；steps 为步骤点 + 连接线，适合 KTV 预订流程。`color`/`trackColor` 可覆盖默认金色/中性色，`indeterminate` 提供不确定态动画。

## 代码演示

### 线性进度条

`type="linear"`（默认），`percentage` 控制百分比，`show-text` 显示数值。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:24rpx">
    <dd-progress :percentage="40" />
    <dd-progress :percentage="75" :show-text="true" />
    <dd-progress :percentage="100" />
  </view>
</template>
```

</DemoBlock>
:::

### 圆环进度

`type="circular"` 居中展示百分比，`size` 控制直径，`stroke-width` 控制描边。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:32rpx;justify-content:center">
    <dd-progress type="circular" :percentage="60" :size="200" :stroke-width="8" />
    <dd-progress type="circular" :percentage="85" :size="160" :stroke-width="10" />
  </view>
</template>
```

</DemoBlock>
:::

### 步骤进度

`type="steps"` 配合 `steps` 设置步数，适合预订流程：选房 → 选时 → 确认 → 支付。

:::demo
<DemoBlock>

```vue
<template>
  <dd-progress type="steps" :percentage="50" :steps="4" />
</template>
```

</DemoBlock>
:::

### 不确定态与自定义颜色

`indeterminate` 显示循环滑动动画；`color`/`track-color` 覆盖默认配色。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:24rpx">
    <dd-progress indeterminate />
    <dd-progress :percentage="60" color="linear-gradient(90deg,#2D4BA0,#1A2F6B)" track-color="#1a1a1a" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 类型 | `'linear' \| 'circular' \| 'steps'` | `'linear'` |
| percentage | 百分比（0-100） | `number` | `0` |
| showText | 是否显示百分比文字 | `boolean` | `true` |
| steps | steps 类型的步数 | `number` | `5` |
| color | 填充色（linear/circular），默认金色渐变 | `string` | `''` |
| trackColor | 轨道色 | `string` | `''` |
| strokeWidth | circular 描边宽度（rpx） | `number` | `8` |
| size | circular 直径（rpx） | `number` | `200` |
| indeterminate | 是否不确定态（linear 循环滑动） | `boolean` | `false` |

### Events

无事件。

### Slots

无插槽 —— 内容由 props 驱动渲染。

## 设计规范

::: tip 最佳实践
- 列表项的上传/下载进度使用 linear。
- 居中加载态与大数字展示使用 circular。
- 多步流程使用 steps（默认 5 步，通过 `steps` 覆盖）。
- 通过 `color`/`trackColor` 覆盖默认金色/中性色。
- `showText` 控制百分比标签显隐。
:::

::: warning 注意事项
- 同一指标不要混用 circular 与 linear。
- circular 圆环基于 conic-gradient + 遮罩实现，非 SVG。
- steps 步数不要超过约 7 步。
- 不确定态（indeterminate）下不要显示百分比文字。
:::
