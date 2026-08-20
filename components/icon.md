# 图标 DdIcon

> 基于 Vant 图标字体封装的跨平台图标组件。通过 `@font-face`（H5/APP）与 `uni.loadFontFace`（小程序）双端策略加载字体文件，支持尺寸、颜色、红点提示，并按 7 大类组织 80+ 常用图标。

## 介绍

DdIcon 是最轻量的图标组件，底层使用 Vant 图标字体（vant-icon.woff2），通过 class 切换 `:before` 的 `content` 值实现不同图标。字体加载按平台差异化处理：H5 / APP 端走 CSS `@font-face`，小程序端走 `uni.loadFontFace` API。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:32rpx;align-items:center">
    <dd-icon name="search" />
    <dd-icon name="success" />
    <dd-icon name="warning" />
    <dd-icon name="info" />
    <dd-icon name="cross" />
  </view>
</template>
```

</DemoBlock>
:::

### 尺寸与颜色

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:32rpx">
    <view style="display:flex;gap:32rpx;align-items:center">
      <dd-icon name="star-o" size="16" />
      <dd-icon name="star-o" size="24" />
      <dd-icon name="star-o" size="32" />
      <dd-icon name="star-o" size="48" />
    </view>
    <view style="display:flex;gap:32rpx;align-items:center">
      <dd-icon name="star" size="28" color="#F5A623" />
      <dd-icon name="star" size="28" color="#E60012" />
      <dd-icon name="star" size="28" color="#07C160" />
      <dd-icon name="star" size="28" color="#1989FA" />
    </view>
  </view>
</template>
```

</DemoBlock>
:::

### 红点提示

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:32rpx;align-items:center">
    <dd-icon name="friends" size="28" :dot="true" />
    <dd-icon name="manager" size="28" :dot="true" />
    <dd-icon name="gift" size="28" :dot="true" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 图标名称（必填） | `string` | — |
| size | 图标大小，支持 `'16'` 或 `16` | `string \| number` | `'inherit'` |
| color | 图标颜色 | `string` | `'inherit'` |
| dot | 是否显示右上角红点 | `boolean` | `false` |

### 事件

无事件。

## 图标列表

### 通用操作

`cross` · `success` · `plus` · `minus` · `left` · `right` · `arrow` · `arrow-left` · `arrow-down` · `arrow-up` · `cross-filled` · `success-filled` · `arrow-left-filled` · `arrow-down-filled` · `arrow-up-filled`

### 状态

`star` · `star-o` · `star-o-half` · `good-job` · `good-job-o` · `thumb-circle` · `thumb-circle-o` · `thumb` · `thumb-o` · `circle` · `circle-o` · `passed` · `passed-o` · `clock` · `clock-o` · `warning` · `warning-o` · `info` · `info-o`

### 社交

`wechat` · `weibo` · `alipay` · `wechat-o` · `alipay-o`

### 订单物流

`logistics` · `logistics-o` · `cluster` · `cluster-o` · `circle-down` · `underway` · `underway-o`

### 金融

`gold-coin` · `gold-coin-o` · `balance-pay` · `balance-pay-o` · `balance-list` · `balance-list-o` · `balance` · `balance-o` · `cash-o` · `points` · `points-o` · `red-envelope` · `red-envelope-o`

### 账户联系人

`contact` · `contact-filled` · `contact-o` · `friends` · `friends-o` · `friend` · `friend-o` · `manager` · `manager-o`

### 服务功能

`service` · `service-o` · `search` · `location` · `location-o` · `notes` · `notes-o` · `description` · `description-o` · `records` · `records-o` · `past-order` · `past-order-o` · `gift-card` · `gift-card-o` · `gift` · `gift-o` · `bag` · `bag-o`

## 设计规范

::: tip 最佳实践
- 使用语义化的 icon 名（`warning` 而非 `cross`），便于维护。
- 通过 `color` prop 传入品牌色，避免在外部覆盖样式。
- 红点提示用在未读消息、通知等场景，`dot` 固定为 12rpx 大小。
- 列表中使用 16~20px，导航中使用 20~24px，装饰性图标可用 32px+。
:::

::: warning 注意事项
- 字体依赖外网 CDN（fastly.jsdelivr.net），离线场景需自行托管 woff2 文件。
- 小程序端字体通过 `uni.loadFontFace` 异步加载，首屏可能出现文字闪烁。
- 新增图标需同步修改 `dd-icon.vue` 的 `:before` content 值与 CSS class。
:::