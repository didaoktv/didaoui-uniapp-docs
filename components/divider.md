# 分割线 DdDivider

> 三段式 flex 分割线，contentPosition 折叠一侧线条让内容获得更多空间；dashed 非 hairline 时归一化回 1px，避免粗虚线显得笨重。

## 介绍

DdDivider 用于内容分节与带文字的分割线。由左右两段线条与可选的内容插槽组成，`contentPosition` 控制内容居左/居中/居右（对应折叠一侧线条）。`dashed` 切换虚线样式，`hairline` 控制线条为 1px 细线或 4rpx 粗线。

## 代码演示

### 基础用法

无内容时为全宽分割线。

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <view style="padding:16rpx;color:#fff">上方内容</view>
    <dd-divider />
    <view style="padding:16rpx;color:#fff">下方内容</view>
  </view>
</template>
```

</DemoBlock>
:::

### 带文字分割线

默认插槽提供文字内容，`content-position` 控制对齐。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-divider content-position="center">今日推荐</dd-divider>
    <dd-divider content-position="left">热门活动</dd-divider>
    <dd-divider content-position="right">更多 ›</dd-divider>
  </view>
</template>
```

</DemoBlock>
:::

### 虚线样式

`dashed` 切换为虚线，适合较随意的视觉分隔。

:::demo
<DemoBlock>

```vue
<template>
  <dd-divider dashed>历史记录</dd-divider>
</template>
```

</DemoBlock>
:::

### 自定义最小高度

默认最小高度 24px；`minHeight` 按 rpx 传入自有间距，传 `0` 则完全交给父容器控制。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:24rpx">
    <dd-divider :min-height="0">贴紧（交给父容器）</dd-divider>
    <dd-divider :min-height="64">64rpx 更宽松</dd-divider>
    <dd-divider :min-height="0" :dashed="true" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| contentPosition | 内容位置 | `'left' \| 'center' \| 'right'` | `'center'` |
| dashed | 是否虚线 | `boolean` | `false` |
| hairline | 是否 1px 细线（false 为 4rpx；dashed 自动归一化为 1px） | `boolean` | `true` |
| minHeight | 最小高度（rpx，运行时转 px）；不传走 SCSS token 24px，内容更高时仍随内容撑开 | `number` | `24px（$dd-space-5）` |

### Events

无事件。

### Slots

| 名称 | 说明 |
|------|------|
| default | 分割线中间的内容（文字标签等） |

## 设计规范

::: tip 最佳实践
- 使用内容插槽放置分节标签，如「今日推荐」。
- 较随意的视觉分隔使用 `dashed`。
:::

::: warning 注意事项
- 不要通过 prop 覆盖线条颜色 —— 当前未暴露颜色 prop，需通过 token 主题统一管理以避免破坏主题。
:::
