# 顶部导航栏 DdTopNavbar

> 毛玻璃顶部栏（fixed/transparent/border 变体）配金色返回按钮、绝对居中标题、状态栏占位。

## 介绍

DdTopNavbar 是页面顶部导航栏，包含返回按钮、居中标题与右侧操作区。非透明态使用毛玻璃背景，返回按钮为金色 ‹ 字形并伴随发光。`fixed` 默认固定顶部并自动添加状态栏占位与同尺寸 placeholder 防止内容遮挡。`transparent` 用于沉浸式英雄页，`border` 控制底部分隔线。标题绝对居中并单行省略，右侧通过 slot 放置操作按钮。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-top-navbar title="包厢详情" :fixed="false" />
</template>
```

</DemoBlock>
:::

### 带返回文字与右侧操作

`back-text` 显示返回文字；`#right` 槽放置操作按钮。

:::demo
<DemoBlock>

```vue
<template>
  <dd-top-navbar title="订单管理" back-text="返回" :fixed="false">
    <template #right>
      <text style="color:#F5A623;font-size:28rpx">更多</text>
    </template>
  </dd-top-navbar>
</template>
```

</DemoBlock>
:::

### 透明沉浸式

`transparent` 用于英雄页，返回按钮与标题悬浮于内容之上。

:::demo
<DemoBlock>

```vue
<template>
  <dd-top-navbar title="活动详情" transparent :fixed="false" />
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 标题文字 | `string` | `''` |
| fixed | 是否固定顶部 | `boolean` | `true` |
| transparent | 是否透明背景（沉浸式） | `boolean` | `false` |
| border | 是否显示底部分隔线（transparent 时无效） | `boolean` | `true` |
| showBack | 是否显示返回按钮 | `boolean` | `true` |
| backText | 返回按钮文字（位于 ‹ 之后） | `string` | `''` |
| placeholder | fixed 时是否渲染占位元素 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| back | 点击返回按钮时触发（同时调用 uni.navigateBack） | — |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义标题内容（优先于 title prop） |
| left | 左侧区域额外内容（位于返回按钮之后） |
| right | 右侧操作区内容 |

## 设计规范

::: tip 最佳实践
- 使用毛玻璃背景实现沉浸式分层。
- 返回按钮使用金色保证清晰可见。
- 右侧操作按钮通过 slot 限制数量。
- 长标题居中并省略截断。
- 英雄页使用 transparent 变体。
:::

::: warning 注意事项
- 不要在毛玻璃层上放置低对比度文字。
- 不要混用大标题与标准标题模式。
- 透明变体在浅色背景上需处理对比度。
:::
