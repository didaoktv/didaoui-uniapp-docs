# 卡片 DdCard

> 通用容器卡片，支持 vertical/horizontal/compact 三种变体与 header+body+footer 插槽；选中态使用 2px 金色描边 + 发光，compact 将圆角收窄为 var(--radius-md)。

## 介绍

DdCard 是通用的内容承载容器，覆盖列表项、特色内容、可选项等多种场景。通过 `variant` 切换纵向/横向/紧凑布局，配合 `header`、`body`、`footer`、`extra` 四个插槽实现结构化内容编排。`active` 态叠加金色描边与发光，`hover`/`hoverable` 提供上浮与按压反馈。

## 代码演示

### 基础用法

纵向卡片配合 header / body / footer 插槽展示结构化内容。

:::demo
<DemoBlock>

```vue
<template>
  <dd-card>
    <template #header>限时优惠</template>
    <view>黄金时段 19:00-22:00 大包立减 100 元</view>
    <template #footer>
      <dd-button type="primary" size="sm">立即预订</dd-button>
    </template>
  </dd-card>
</template>
```

</DemoBlock>
:::

### 横向卡片

`variant="horizontal"` 适合歌曲/房台列表，内容横向排布。

:::demo
<DemoBlock>

```vue
<template>
  <dd-card variant="horizontal">
    <template #header>
      <dd-image src="/static/room.png" width="160rpx" height="160rpx" radius="8rpx" />
    </template>
    <view>
      <view style="font-weight:600">豪华大包 A08</view>
      <view style="color:#999;font-size:24rpx">容纳 8-12 人</view>
    </view>
    <template #footer>
      <dd-tag variant="primary">热门</dd-tag>
    </template>
  </dd-card>
</template>
```

</DemoBlock>
:::

### 选中态

`active` 叠加金色描边与发光，适合可选项高亮。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:16rpx">
    <dd-card variant="compact">未选中</dd-card>
    <dd-card variant="compact" active>已选中</dd-card>
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 布局变体 | `'vertical' \| 'horizontal' \| 'compact'` | `'vertical'` |
| border | 是否显示边框 | `boolean` | `true` |
| active | 是否选中态（金色描边 + 发光） | `boolean` | `false` |
| hover | 是否悬停上浮态 | `boolean` | `false` |
| hoverable | 是否启用按压反馈（hover-class） | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击卡片时触发 | `event: Event` |

### Slots

| 名称 | 说明 |
|------|------|
| header | 头部内容（与 extra 同行） |
| extra | 头部右侧附加内容 |
| default | 主体内容 |
| footer | 底部内容 |

## 设计规范

::: tip 最佳实践
- 列表场景使用 horizontal 变体，特色内容使用 vertical 变体，密集可选网格使用 compact 变体。
- 选中态叠加 `active` 以金色描边 + 发光强调。
- 通过 header / footer / extra 插槽组织结构化内容。
:::

::: warning 注意事项
- 不要在卡片内嵌套卡片。
- 同一列表内不要混用不同 variant。
:::
