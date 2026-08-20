# 轮播 DdSwipe

> 原生 swiper 包装，通过 provide/inject 统计子项数量，可配置 autoplay/loop/vertical，金色激活指示点，支持自定义指示器插槽。

## 介绍

DdSwipe 是基于原生 `swiper` 的轮播组件，**需配合 `dd-swipe-item` 子组件使用**。支持自动播放、循环、纵向滑动等原生能力，并提供指示点（水平底部居中 / 纵向右侧居中）。子项通过 provide/inject 自注册以统计数量。可通过 `indicator` 作用域插槽自定义指示器，或通过 ref 调用 `jumpTo` 跳转。

## 代码演示

### 基础用法

default 插槽放 `dd-swipe-item`，`autoplay` 大于 0 时自动轮播。

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
    <dd-swipe-item>
      <view style="height:100%;background:linear-gradient(135deg,#4CAF50,#357A38);display:flex;align-items:center;justify-content:center;color:#fff">活动三</view>
    </dd-swipe-item>
  </dd-swipe>
</template>
```

</DemoBlock>
:::

### 纵向轮播

`vertical` 切换为纵向滑动，指示点自动移到右侧居中。

:::demo
<DemoBlock>

```vue
<template>
  <dd-swipe vertical height="400rpx">
    <dd-swipe-item>
      <view style="height:100%;background:#1a1a1a;display:flex;align-items:center;justify-content:center;color:#F5A623">新歌 1</view>
    </dd-swipe-item>
    <dd-swipe-item>
      <view style="height:100%;background:#1a1a1a;display:flex;align-items:center;justify-content:center;color:#F5A623">新歌 2</view>
    </dd-swipe-item>
  </dd-swipe>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| width | 宽度 | `string` | `'100%'` |
| height | 高度 | `string` | `'300rpx'` |
| autoplay | 自动播放间隔（ms，0 为关闭） | `number` | `0` |
| loop | 是否循环 | `boolean` | `true` |
| vertical | 是否纵向滑动 | `boolean` | `false` |
| duration | 切换动画时长（ms） | `number` | `500` |
| touchable | 是否可手势滑动 | `boolean` | `true` |
| showIndicators | 是否显示指示点 | `boolean` | `true` |
| indicatorColor | 激活指示点颜色（默认 primary 金） | `string` | `''` |
| initial | 初始索引 | `number` | `0` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 切换时触发 | `index: number` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 轮播项，放置 `dd-swipe-item` |
| indicator | 自定义指示器（作用域：`active: number`, `count: number`） |

### 方法

通过 ref 调用：

| 方法名 | 说明 |
|--------|------|
| jumpTo | 跳转到指定索引 |
| current | 当前索引（ref） |

## 设计规范

::: tip 最佳实践
- 用于 banner 轮播、推荐位、活动位。
- autoplay > 0 开启自动轮播。
- 用 width/height 控制固定尺寸。
- 用 indicator 插槽自定义指示器。
:::

::: warning 注意事项
- `dd-swipe-item` 必须作为 `swiper` 的直接子项，小程序上非直接子项可能失效。
- autoplay 不宜低于 2000ms，避免切换过快。
- 不开启 loop 时轮播项不宜超过 8 个，影响性能。
- 原生 swiper 行为在各小程序平台可能有差异。
:::
