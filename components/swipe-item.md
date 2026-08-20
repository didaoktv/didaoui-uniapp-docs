# 轮播项 DdSwipeItem

> 极简 swiper-item 包装，挂载时向父级 dd-swipe 自注册，100% 尺寸，纯插槽透传。

## 介绍

DdSwipeItem 是 `dd-swipe` 的子项组件，**必须作为 `dd-swipe` 的直接子项使用**。它在挂载时通过 `inject('ddSwipe')` 调用父级的 `register()` 自增计数，卸载时 `unregister()` 自减，从而让父级能正确统计轮播项数量并渲染指示点。本身只是原生 `swiper-item` 的薄包装，宽度高度填满父级，内容通过 default 插槽透传。

## 代码演示

### 基础用法

放在 `dd-swipe` 内，default 插槽放图片或内容。

:::demo
<DemoBlock>

```vue
<template>
  <dd-swipe :autoplay="3000" height="300rpx">
    <dd-swipe-item>
      <view style="height:100%;background:linear-gradient(135deg,#F5A623,#E0962D);display:flex;align-items:center;justify-content:center;color:#fff">活动一</view>
    </dd-swipe-item>
    <dd-swipe-item>
      <view style="height:100%;background:linear-gradient(135deg,#2D4BA0,#1E3578);display:flex;align-items:center;justify-content:center;color:#fff">活动二</view>
    </dd-swipe-item>
  </dd-swipe>
</template>
```

</DemoBlock>
:::

## API

### Props

无。

### Events

无。

### Slots

| 名称 | 说明 |
|------|------|
| default | 单项内容（图片、view 等） |

### 注入上下文

DdSwipeItem 通过 `inject('ddSwipe')` 消费父级 `dd-swipe` 提供的 `register()` / `unregister()`，在 onMounted/onUnmounted 时维护轮播项计数。

## 设计规范

::: tip 最佳实践
- 必须作为 `dd-swipe` 的直接子项使用。
- 内容填满整个轮播项以保证视觉一致。
- 图片或内容放在 default 插槽。
:::

::: warning 注意事项
- 不要脱离 `dd-swipe` 使用——inject 返回 null，注册被静默忽略。
- 不要加 margin/padding，可能导致轮播布局间隙。
- 小程序上 `dd-swipe-item` 必须是 `swiper` 的直接子项，中间嵌套其他组件可能失效。
:::
