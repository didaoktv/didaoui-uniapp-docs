# 头像组 DdAvatarGroup

> 头像组叠放容器：支持 maxCount 折叠、showMore「+N」、gap 遮挡比例、shape 形状、extraValue 额外数值与 showMore 事件。

## 介绍

DdAvatarGroup 用于展示一组头像，默认 `gap=0.5` 叠放。`maxCount` 限制最多展示数量，超出折叠为「+N」；`showMore=false` 不显示「+N」；`gap` 控制遮挡比例（0.4 表示遮挡 40%）；`extraValue` 显示额外数值（如群成员数）。

## 代码演示

### 基础叠放与数量折叠

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:24rpx">
    <dd-avatar-group :urls="urls" :size="48" />
    <dd-avatar-group :urls="many" :size="48" :maxCount="4" />
  </view>
</template>

<script setup>
const urls = [
  'https://picsum.photos/seed/dd-g1/100/100',
  'https://picsum.photos/seed/dd-g2/100/100',
  'https://picsum.photos/seed/dd-g3/100/100',
]
const many = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/dd-gn${i}/100/100`)
</script>
```

</DemoBlock>
:::

### 形状与额外数值

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:24rpx">
    <dd-avatar-group :urls="urls" :size="48" shape="square" :gap="0.2" />
    <dd-avatar-group :urls="urls" :size="48" :gap="1" :extraValue="128" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| urls | 头像图片地址数组 | `any[]` | `[]` |
| maxCount | 最多展示的头像数量 | `string \| number` | `5` |
| shape | 头像形状 | `'circle' \| 'square'` | `'circle'` |
| mode | 图片裁剪模式（同 uni image） | `string` | `'scaleToFill'` |
| showMore | 超出 maxCount 是否显示「+N」 | `boolean` | `true` |
| size | 头像大小 | `string \| number` | `40` |
| keyName | 数组对象元素中读取地址的字段名 | `string` | `''` |
| gap | 头像遮挡比例（0.5 表示遮挡 50%） | `string \| number` | `0.5` |
| extraValue | 需额外显示的值 | `string \| number` | `0` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| showMore | 点击「+N」时触发 | `-` |

## 设计规范

::: tip 最佳实践
- 3~5 个头像叠放视觉最佳，超出用 maxCount 折叠。
- 群聊/合奏等场景搭配 extraValue 展示总人数。
:::

::: warning 注意事项
- urls 元素支持字符串地址或对象（配合 keyName）。
- showMore 折叠数量为「总数 - 已展示数」。
:::
