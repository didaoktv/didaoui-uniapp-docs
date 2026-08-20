# 骨架屏 DdSkeleton

> 五种类型（text/card/list/avatar/image）共用 var(--dd-skeleton-bg) 底色 + shimmer 扫光，线条圆角 var(--radius-sm)、卡片/图片圆角 var(--radius-lg)，文本行宽度递减 [100,92,85,75,65]%，loading prop 切换骨架与真实内容。

## 介绍

DdSkeleton 用于在数据加载完成前展示内容占位，降低用户感知等待时间。提供 text、card、list、avatar、image 五种类型，分别对应段落文本、卡片、列表项、头像、图片的占位形态。通过 `loading` prop 可在骨架与真实内容之间切换——`loading=true` 显示骨架，`loading=false` 渲染 default 插槽内容，无需在模板里写 `v-if` 切换。

## 代码演示

### 基础用法

`type="text"` 为默认类型，`rows` 控制行数，行宽按 [100,92,85,75,65]% 循环递减模拟段落文本。

:::demo
<DemoBlock>

```vue
<template>
  <dd-skeleton type="text" :rows="3" />
</template>
```

</DemoBlock>
:::

### 卡片与列表

`type="card"` 渲染 16:9 图片占位 + 标题行 + 两行正文；`type="list"` 渲染列表项，配合 `avatar` 显示圆形头像占位。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:24rpx">
    <dd-skeleton type="card" />
    <dd-skeleton type="list" :rows="2" avatar />
  </view>
</template>
```

</DemoBlock>
:::

### 头像与图片

`type="avatar"` 渲染 128rpx 圆形占位；`type="image"` 渲染 1:1 方形占位（宽度跟随父容器）。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:24rpx;align-items:center">
    <dd-skeleton type="avatar" />
    <view style="width:200rpx">
      <dd-skeleton type="image" />
    </view>
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 骨架类型 | `'text' \| 'card' \| 'list' \| 'avatar' \| 'image'` | `'text'` |
| rows | 行数（text / list 类型生效） | `number` | `3` |
| avatar | 是否显示头像占位（list 类型生效） | `boolean` | `false` |
| loading | 是否显示骨架；为 false 时渲染 default 插槽内容 | `boolean` | `true` |

### Events

无。

### Slots

| 名称 | 说明 |
|------|------|
| default | `loading=false` 时渲染的真实内容 |

## 设计规范

::: tip 最佳实践
- 骨架类型要与真实内容形态对应（text/card/list/avatar/image）。
- 用 `rows` 设置 text/list 的行数（默认 3）。
- list 类型配合 `avatar` 显示头像占位。
- 通过 `loading` prop 切换骨架与真实内容（false 时渲染插槽）。
- 圆角保持一致：线条 var(--radius-sm)，卡片/图片 var(--radius-lg)。
:::

::: warning 注意事项
- 不要让骨架结构与真实内容差异过大。
- 不要用等宽线条模拟文本（已内置递减宽度）。
- 加载时间低于 300ms 时不要显示骨架，避免闪烁。
- 不要使用品牌色，仅用 neutral 底色 + 白色扫光。
:::
