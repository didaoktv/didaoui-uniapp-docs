# 吸顶容器 DdSticky

> 基于 CSS position:sticky 的包装容器，配合 IntersectionObserver 检测吸顶/脱离状态；offsetTop 以 rpx 传入，最小化实现 —— 仅固定插槽内容。

## 介绍

DdSticky 用于让分类筛选栏、字母索引、标签栏等内容在滚动时吸顶固定。通过 `offsetTop` 设置距顶偏移（rpx），`zIndex` 控制层级。吸顶状态变化时触发 `change` 事件，便于联动样式。H5 使用原生 IntersectionObserver，小程序/App 使用 uni IntersectionObserver，`disabled` 可临时关闭吸顶。

## 代码演示

### 基础用法

包裹需要吸顶的内容，滚动到阈值即固定在顶部。

:::demo
<DemoBlock>

```vue
<template>
  <dd-sticky :offset-top="0">
    <view style="display:flex;gap:16rpx;padding:16rpx;background:#1f1f1f">
      <dd-tag variant="primary">全部</dd-tag>
      <dd-tag variant="default">大包</dd-tag>
      <dd-tag variant="default">中包</dd-tag>
      <dd-tag variant="default">小包</dd-tag>
    </view>
  </dd-sticky>
</template>
```

</DemoBlock>
:::

### 带导航栏偏移

`offset-top` 设为导航栏高度以避免遮挡；监听 `change` 联动样式。

:::demo
<DemoBlock>

```vue
<template>
  <dd-sticky :offset-top="88" @change="onSticky">
    <view :style="{ background: fixed ? '#2a2a2a' : '#1f1f1f', padding: '16rpx' }">
      <text style="color:#fff">歌曲字母索引 A B C D...</text>
    </view>
  </dd-sticky>
</template>

<script setup>
import { ref } from 'vue'
const fixed = ref(false)
function onSticky({ isFixed }) {
  fixed.value = isFixed
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| offsetTop | 距顶部偏移（rpx） | `number` | `0` |
| zIndex | 层级 | `number` | `99` |
| disabled | 是否禁用吸顶（变为 static） | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 吸顶状态变化时触发 | `{ isFixed: boolean, scrollTop: number }` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 需要吸顶的内容 |

组件还通过 `defineExpose` 暴露了 `isFixed` 响应式引用，可通过 ref 读取。

## 设计规范

::: tip 最佳实践
- 适用于分类筛选栏、标签栏、字母索引等需要滚动吸顶的内容。
- `offsetTop` 需考虑上方固定导航栏的高度。
- 使用 `disabled` 程序化关闭吸顶。
:::

::: warning 注意事项
- 不要在 `overflow:hidden` 容器内使用 —— sticky 会失效。
- CSS sticky 是瞬时切换，不要期望平滑动画。
- `zIndex` 不要设置过高 —— 可能与弹层（2000+）冲突。
:::
