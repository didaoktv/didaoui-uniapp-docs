# 图片 DdImage

> 将 CSS object-fit 映射到 uni `<image>` 的 mode（scale-down 降级为 aspectFit，因无原生等价 mode）；通过状态驱动的遮罩展示 loading 旋转圈与 error 占位图标。

## 介绍

DdImage 是原生 `<image>` 的封装，提供 `fit` 适配模式、`width`/`height`/`radius`/`round` 尺寸形状控制，以及加载中/加载失败的状态遮罩。加载中显示品牌色旋转圈，失败显示 ⊘ 占位图标，均可通过插槽自定义。`src` 变化时状态自动重置。

## 代码演示

### 基础用法

`fit="cover"`（默认）适合房台/宣传图缩略图。

:::demo
<DemoBlock>

```vue
<template>
  <dd-image src="/static/room.png" width="300rpx" height="200rpx" radius="12rpx" />
</template>
```

</DemoBlock>
:::

### 圆形与适配模式

`round` 用于头像；`fit` 控制填充方式（fill/contain/cover/none/scale-down）。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:16rpx;align-items:center">
    <dd-image src="/static/avatar.png" width="120rpx" height="120rpx" round />
    <dd-image src="/static/poster.png" width="160rpx" height="200rpx" fit="contain" radius="8rpx" />
  </view>
</template>
```

</DemoBlock>
:::

### 自定义占位

`loading` 与 `error` 插槽可自定义加载与失败态内容。

:::demo
<DemoBlock>

```vue
<template>
  <dd-image src="/static/missing.png" width="200rpx" height="200rpx" radius="8rpx">
    <template #loading>
      <text style="color:#999;font-size:24rpx">加载中...</text>
    </template>
    <template #error>
      <text style="color:#666;font-size:24rpx">暂无图片</text>
    </template>
  </dd-image>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| src | 图片地址 | `string` | `''` |
| fit | 适配模式（scale-down 降级为 aspectFit） | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'cover'` |
| width | 宽度（number 为 rpx，string 原样） | `string \| number` | `'100%'` |
| height | 高度（number 为 rpx，string 原样） | `string \| number` | `'100%'` |
| radius | 圆角（number 为 rpx，string 原样） | `string \| number` | `0` |
| round | 是否圆形（50%） | `boolean` | `false` |
| lazyLoad | 是否懒加载 | `boolean` | `false` |
| showMenuByLongpress | 长按是否显示菜单 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| load | 图片加载完成时触发 | `event: any` |
| error | 图片加载失败时触发 | `event: any` |
| click | 点击图片时触发 | `event: any` |

### Slots

| 名称 | 说明 |
|------|------|
| loading | 自定义加载中遮罩内容 |
| error | 自定义加载失败遮罩内容 |

## 设计规范

::: tip 最佳实践
- 房台/宣传缩略图使用 `fit="cover"`。
- 头像使用 `round=true`。
- 通过 `loading`/`error` 插槽提供自定义占位。
:::

::: warning 注意事项
- `scale-down` 不保证像素级精确 —— 已降级为 `aspectFit`（uni `<image>` 无原生等价 mode）。
:::
