# 标签 DdTag

> 三类型（filled/outlined/dot）× 7 变体 × 2 尺寸的标签体系；md 使用 radius-sm，sm 使用 radius-md，round 强制 radius-full；closable 追加 × 关闭按钮。

## 介绍

DdTag 用于状态标记、分类标签与可关闭筛选 chip。三种类型覆盖不同强调层级：filled（渐变/实色背景 + 反色字）、outlined（透明背景 + 描边 + 语义色）、dot（elevated 背景 + 彩色点前缀）。七种语义变体（primary/accent/success/warning/error/info/default）驱动颜色，配合 sm/md 尺寸与 round 胶囊形态满足大多数标签场景。

## 代码演示

### 基础用法

filled 类型适合醒目的品牌/状态标签。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:12rpx;flex-wrap:wrap">
    <dd-tag variant="primary">热门</dd-tag>
    <dd-tag variant="success">已预订</dd-tag>
    <dd-tag variant="warning">待支付</dd-tag>
    <dd-tag variant="error">已取消</dd-tag>
  </view>
</template>
```

</DemoBlock>
:::

### 描边与点状

outlined 适合次要分类，dot 适合带前缀圆点的轻量状态。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:12rpx;flex-wrap:wrap">
    <dd-tag type="outlined" variant="default" size="sm">流行</dd-tag>
    <dd-tag type="outlined" variant="primary" size="sm">摇滚</dd-tag>
    <dd-tag type="dot" variant="primary">推荐</dd-tag>
    <dd-tag type="dot" variant="success">在线</dd-tag>
  </view>
</template>
```

</DemoBlock>
:::

### 可关闭筛选

`closable` 追加 × 按钮，配合 `round` 形成胶囊筛选 chip。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:12rpx;flex-wrap:wrap">
    <dd-tag round closable variant="primary" @close="onClose">大包</dd-tag>
    <dd-tag round closable variant="accent" @close="onClose">中包</dd-tag>
  </view>
</template>

<script setup>
function onClose(e) {
  console.log('关闭', e)
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 标签类型 | `'filled' \| 'outlined' \| 'dot'` | `'filled'` |
| variant | 语义变体 | `'primary' \| 'accent' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'primary'` |
| size | 尺寸 | `'sm' \| 'md'` | `'md'` |
| round | 是否胶囊圆角 | `boolean` | `false` |
| closable | 是否可关闭 | `boolean` | `false` |
| text | 标签文字（与默认插槽二选一） | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击标签时触发 | `event: Event` |
| close | 点击关闭按钮时触发 | `event: Event` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 标签文字内容（优先于 text prop） |

## 设计规范

::: tip 最佳实践
- 醒目的品牌/状态标签使用 filled 类型。
- 次要分类使用 outlined 类型。
- 轻量带前缀状态使用 dot 类型。
- 密集布局使用 sm 尺寸；筛选 chip 设置 `round`；可移除筛选设置 `closable`。
:::

::: warning 注意事项
- 单个元素上不要混用超过 3 种变体。
- 标签文字控制在 2-4 个字符，避免长文本。
:::
