# 徽标 DdBadge

> 三类型（dot/number/text）× 四变体（primary/error/success/warning）徽标；number 在 max+ 封顶，默认插槽包裹目标元素；dot 始终显示，其余内容为空时隐藏。

## 介绍

DdBadge 用于在头像、图标、导航等元素右上角叠加状态标记。通过默认插槽包裹目标元素，徽标内容绝对定位于右上角并偏移 (25%, -25%)。三种类型覆盖不同语义：dot（圆点，始终显示）、number（数字胶囊，超出 max 显示 max+）、text（文字胶囊）。四色变体驱动背景与发光。

## 代码演示

### 数字徽标

`type="number"` 显示未读消息数，超出 `max` 显示 `max+`。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:24rpx;align-items:center">
    <dd-badge :content="9">
      <dd-icon name="message" />
    </dd-badge>
    <dd-badge :content="120" :max="99">
      <dd-icon name="bell" />
    </dd-badge>
    <dd-badge :content="0">
      <dd-icon name="cart" />
    </dd-badge>
  </view>
</template>
```

</DemoBlock>
:::

### 圆点徽标

`type="dot"` 始终显示一个圆点，适合轻量提示。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:24rpx;align-items:center">
    <dd-badge type="dot" variant="error">
      <dd-avatar text="张" size="md" />
    </dd-badge>
    <dd-badge type="dot" variant="primary">
      <dd-icon name="setting" />
    </dd-badge>
  </view>
</template>
```

</DemoBlock>
:::

### 文字徽标

`type="text"` 显示 VIP / HOT / NEW 等状态标签。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:24rpx;align-items:center">
    <dd-badge type="text" variant="primary" content="VIP">
      <dd-avatar text="王" size="md" />
    </dd-badge>
    <dd-badge type="text" variant="error" content="HOT">
      <text>限时活动</text>
    </dd-badge>
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 徽标类型 | `'dot' \| 'number' \| 'text'` | `'number'` |
| variant | 语义变体 | `'primary' \| 'error' \| 'success' \| 'warning'` | `'error'` |
| content | 徽标内容（number 为数字，text 为文字） | `string \| number` | `''` |
| max | number 类型封顶值（超出显示 `max+`） | `number` | `99` |
| showZero | number 类型为 0 时是否显示 | `boolean` | `false` |

### Events

无事件。

### Slots

| 名称 | 说明 |
|------|------|
| default | 被徽标包裹的目标元素 |
| default（text 模式） | text 模式下也可作为徽标文字内容 |

## 设计规范

::: tip 最佳实践
- 简单未读/新内容提示使用 dot（始终可见）。
- 消息计数使用 number，超出 `max` 封顶为 `max+`。
- VIP/HOT/NEW 状态标签使用 text。
- 徽标固定在右上角并偏移 25%。
- number 内容为空/0 时默认隐藏（除非 `showZero=true`）。
:::

::: warning 注意事项
- 同一元素上不要堆叠多个徽标。
- 不要将徽标置于左下角等其它位置。
- 0 不显示时不要遗漏 `showZero`。
- text 文字控制在 2-4 个字符。
:::
