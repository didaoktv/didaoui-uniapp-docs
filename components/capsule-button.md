# 胶囊按钮 DdCapsuleButton

> 微信小程序标准 87×32px（174×64rpx）毛玻璃胶囊，CSS 绘制返回箭头 + ⋯ 菜单字形（无 SVG，小程序兼容），3 种变体，default 变体内含 1px 分隔线。

::: danger 平台限制
本组件为**小程序专属组件**，依据微信小程序右上角胶囊按钮规范设计（87×32px 固定尺寸）。H5 端可降级渲染同样尺寸，但语义场景仍以小程序导航为主。
:::

## 介绍

DdCapsuleButton 是模仿微信小程序原生右上角胶囊按钮的组件，提供返回与菜单（更多）两个操作。采用毛玻璃背景与全圆角胶囊形态，固定 174×64rpx 尺寸。返回箭头通过 CSS border 绘制（无 SVG，保证小程序兼容），菜单用 ⋯ 字形。提供 default（返回+菜单+分隔线）、back-only（仅返回）、close-only（仅菜单/关闭）三种变体。

## 代码演示

### 基础用法（default）

`variant="default"` 同时显示返回与菜单按钮，中间有 1px 分隔线，适合小程序首页。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;justify-content:flex-end;background:#1a1a1a;padding:24rpx">
    <dd-capsule-button @back="onBack" @menu="onMenu" />
  </view>
</template>

<script setup>
function onBack() { console.log('返回') }
function onMenu() { console.log('菜单') }
</script>
```

</DemoBlock>
:::

### 仅返回 / 仅关闭

`back-only` 用于二级详情页，`close-only` 用于模态/弹窗页。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:24rpx;justify-content:flex-end;background:#1a1a1a;padding:24rpx">
    <dd-capsule-button variant="back-only" @back="onBack" />
    <dd-capsule-button variant="close-only" @menu="onClose" />
  </view>
</template>

<script setup>
function onBack() { console.log('返回') }
function onClose() { console.log('关闭') }
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 变体：default 返回+菜单 / back-only 仅返回 / close-only 仅菜单 | `'default' \| 'back-only' \| 'close-only'` | `'default'` |
| showBack | 是否显示返回按钮 | `boolean` | `true` |
| showMenu | 是否显示菜单按钮 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| back | 点击返回按钮时触发 | 无 |
| menu | 点击菜单按钮时触发 | 无 |

### Slots

无。

## 设计规范

::: tip 最佳实践
- 首页用 default 变体。
- 二级/详情页用 back-only。
- 模态/弹窗页用 close-only。
- 保持标准 87×32px（174×64rpx）尺寸。
- 固定在右上角并适配安全区。
:::

::: warning 注意事项
- 不要修改标准尺寸与比例。
- 不要在胶囊内加文字标签。
- 不要使用内联 SVG 图标（小程序不兼容）。
- 除右上角外不要放置在其他位置。
- 分隔线不要用高对比色。
:::
