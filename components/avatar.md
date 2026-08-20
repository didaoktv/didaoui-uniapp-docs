# 头像 DdAvatar

> 5 尺寸（xs/sm/md/lg/xl）× 2 形状（circle/square）头像，金色→蓝色渐变文本回退；VIP 叠加金色描边环 + 发光，右下角绿色在线圆点。

## 介绍

DdAvatar 用于用户头像、房台/分类占位图等场景。提供五档尺寸与圆形/方形两种形状，图片加载失败时回退为金色→蓝色渐变背景 + 首字母大写文本。`vip` 叠加金色渐变环与发光，`online` 在右下角显示带发光的绿色在线圆点。

## 代码演示

### 基础用法

`src` 提供图片地址，加载失败自动回退到 `text` 首字母。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:16rpx;align-items:center">
    <dd-avatar src="/static/user1.png" text="张" size="md" />
    <dd-avatar text="李" size="md" />
    <dd-avatar text="王" size="sm" shape="square" />
  </view>
</template>
```

</DemoBlock>
:::

### VIP 与在线状态

`vip` 叠加金色描边环与发光；`online` 显示右下角绿色圆点。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:24rpx;align-items:center">
    <dd-avatar text="赵" size="lg" vip />
    <dd-avatar src="/static/user2.png" text="钱" size="md" online />
    <dd-avatar text="孙" size="lg" vip online />
  </view>
</template>
```

</DemoBlock>
:::

### 尺寸梯度

xs/sm/md/lg/xl 适配不同场景。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:16rpx;align-items:center">
    <dd-avatar text="A" size="xs" />
    <dd-avatar text="B" size="sm" />
    <dd-avatar text="C" size="md" />
    <dd-avatar text="D" size="lg" />
    <dd-avatar text="E" size="xl" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| src | 图片地址 | `string` | `''` |
| text | 文本回退（取首字母大写） | `string` | `''` |
| size | 尺寸 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| shape | 形状 | `'circle' \| 'square'` | `'circle'` |
| vip | 是否 VIP（金色描边环 + 发光） | `boolean` | `false` |
| online | 是否在线（右下角绿色圆点） | `boolean` | `false` |

### Events

无事件。

### Slots

无插槽 —— 内容由 props 驱动渲染。

## 设计规范

::: tip 最佳实践
- 图片加载失败时通过 `text` 回退显示首字母大写。
- VIP 头像使用金色渐变环 + 发光区分。
- 在线状态点位于右下角，带绿色发光。
- 房台/分类占位使用 square 形状。
- 按场景选尺寸：列表 sm、头部 md、个人资料 lg/xl。
:::

::: warning 注意事项
- 同一列表内无特殊原因不要混用形状。
- 群组头像不要超过 4 个（请使用独立群组组件）。
- 在线圆点位置固定为右下角，不要置于左上角。
:::
