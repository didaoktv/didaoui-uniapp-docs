# 传送门 DdPortal

> 弹层传送适配器：无 Props、纯 slot 传送，H5 传送到 body、小程序传送到 root-portal，其余平台原位渲染。

## 介绍

DdPortal 把插槽内容提升到页面根节点，规避 `transform` / `filter` / `backdrop-filter` 祖先对 `position:fixed` 的包含块劫持。库内弹层组件（Dialog / Popup / Modal / Alert / ActionSheet / Drawer / Toast / Loading / Overlay / Picker / DatePicker / DropdownMenu 等）均经此传送。

## 代码演示

### 基础传送

:::demo
<DemoBlock>

```vue
<template>
  <dd-portal>
    <view class="badge">Portal 内容（已传送到页面根节点）</view>
  </dd-portal>
</template>
```

</DemoBlock>
:::

## API

### Props

DdPortal 无 Props。

### Slots

| 名称 | 说明 |
|------|------|
| default | 需要传送到页面根节点的内容 |

## 设计规范

::: tip 最佳实践
- 自定义弹层组件应内置 DdPortal，避免 fixed 定位被祖先 transform 劫持。
- H5 传送到 body、小程序传送到 root-portal，跨端行为一致。
:::

::: warning 注意事项
- App / 抖音等无等价传送能力的平台会原位渲染，弹层勿嵌在 transform 祖先内。
- 传送内容不受页面样式作用域限制，需自带完整样式。
:::
