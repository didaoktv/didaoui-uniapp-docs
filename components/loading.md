# 加载 DdLoading

> 三种动画类型（spinner/dots/pulse）× 三种尺寸（sm/md/lg），统一金色 primary-400 配 glow。全屏变体的遮罩模糊为 #ifdef H5 条件编译（小程序为纯 rgba 遮罩）。

## 介绍

DdLoading 用于展示加载状态，提供 spinner（旋转环）、dots（跳动三点）、pulse（脉冲光环）三种动画类型，每种支持 sm / md / lg 三档尺寸。默认为内联展示；设置 `fullscreen` 后切换为全屏遮罩加载（带 mask 与可选文案），适合页面级加载。所有类型默认金色 primary-400，可通过 `color` prop 覆盖。

## 代码演示

### 内联加载

默认 `type="spinner"` 内联展示，适合按钮内或局部区域。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:32rpx;align-items:center">
    <dd-loading type="spinner" />
    <dd-loading type="dots" />
    <dd-loading type="pulse" />
  </view>
</template>
```

</DemoBlock>
:::

### 尺寸与文案

`size` 控制尺寸，`text` 添加加载文案。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:32rpx;align-items:center">
    <dd-loading type="spinner" size="sm" text="加载中" />
    <dd-loading type="spinner" size="md" text="加载中" />
    <dd-loading type="spinner" size="lg" text="加载中" />
  </view>
</template>
```

</DemoBlock>
:::

### 全屏加载

`fullscreen` 切换为全屏遮罩加载，配合 `text` 显示文案，适合页面级数据拉取。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">全屏加载</dd-button>
  <dd-loading v-if="show" fullscreen type="spinner" size="lg" text="加载中..." />
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 动画类型 | `'spinner' \| 'dots' \| 'pulse'` | `'spinner'` |
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| fullscreen | 是否全屏遮罩展示 | `boolean` | `false` |
| text | 加载文案 | `string` | `''` |
| color | 颜色（覆盖默认 primary-400） | `string` | `''` |

尺寸对应（spinner/pulse 容器）：

| size | 尺寸 |
|------|------|
| sm | 40rpx |
| md | 64rpx |
| lg | 96rpx |

### Events

无。

### Slots

无。

## 设计规范

::: tip 最佳实践
- spinner 用于大多数内联加载场景。
- dots 用于纵向空间充足的内容区。
- pulse 用于轻量初始加载。
- 全屏加载用于页面级（含 text + mask）。
- color prop 覆盖默认 primary-400。
:::

::: warning 注意事项
- 不要在同一区域放多个 loading。
- 不要为琐碎操作使用全屏加载。
- 不要期待非 H5 平台有遮罩模糊（#ifdef H5 条件编译，小程序为纯 rgba 遮罩）。
:::
