# 返回顶部 DdBacktop

> 跨端返回顶部使用 uni.pageScrollTo 而非 window 滚动监听，阈值驱动的圆形浮动按钮。

## 介绍

DdBacktop 是页面滚动超过阈值后出现的圆形浮动按钮，点击后通过 `uni.pageScrollTo` 平滑回到顶部。`scrollTop` 由页面 `onPageScroll` 注入，超过 `visibilityHeight` 时按钮以 opacity + scale 渐显。隐藏时 opacity 0、scale 0 并禁止交互。`right` / `bottom` 控制定位偏移，`duration` 控制回顶动画时长。

## 代码演示

### 基础用法

通过 `onPageScroll` 将 scrollTop 同步给组件。

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <!-- 长列表内容 -->
    <dd-backtop :scroll-top="scrollTop" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const scrollTop = ref(0)
// uni-app 页面需在 onPageScroll 中更新
// onPageScroll((e) => { scrollTop.value = e.scrollTop })
</script>
```

</DemoBlock>
:::

### 自定义阈值与位置

`visibility-height` 控制出现阈值；`right` / `bottom` 控制定位。

:::demo
<DemoBlock>

```vue
<template>
  <dd-backtop
    :scroll-top="scrollTop"
    :visibility-height="200"
    :right="40"
    :bottom="120"
  />
</template>

<script setup>
import { ref } from 'vue'
const scrollTop = ref(500)
</script>
```

</DemoBlock>
:::

### 自定义图标与点击

`#icon` 槽自定义图标；`@click` 监听点击。

:::demo
<DemoBlock>

```vue
<template>
  <dd-backtop :scroll-top="scrollTop" @click="onClick">
    <template #icon>
      <text style="font-size:32rpx;color:#F5A623">顶</text>
    </template>
  </dd-backtop>
</template>

<script setup>
import { ref } from 'vue'
const scrollTop = ref(500)
function onClick() { console.log('返回顶部') }
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| scrollTop | 当前页面滚动高度（由 onPageScroll 注入） | `number` | `0` |
| visibilityHeight | 出现阈值（scrollTop 超过此值时显示） | `number` | `400` |
| right | 距右边缘距离（rpx） | `number` | `40` |
| bottom | 距底部距离（rpx） | `number` | `40` |
| duration | 回顶动画时长（ms） | `number` | `300` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击按钮时触发（同时调用 uni.pageScrollTo） | — |

### Slots

| 名称 | 说明 |
|------|------|
| icon | 自定义图标内容（优先于默认 ↑ 字形） |

## 设计规范

::: tip 最佳实践
- 通过页面 `onPageScroll` 注入 scrollTop 实现跨端滚动检测。
- 设置合理的 visibilityHeight 避免短页面出现按钮。
:::

::: warning 注意事项
- 不要依赖 `window.scrollY` 监听——请使用 `uni.pageScrollTo` 跨端方案。
- 隐藏状态除 CSS 屏蔽外，可见逻辑应保留在 computed 中。
:::
