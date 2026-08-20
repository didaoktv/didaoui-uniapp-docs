# 滑块 DdSlider

> 单滑块滑块（无 range/双滑块，无离散刻度）；3px 胶囊轨道基于 var(--bg-inset) 配金色渐变填充 + 发光；20px 白色滑块带 2px 金边 + 金色发光，激活时缩放 1.1；玻璃气泡提示（showTooltip）仅在拖动时出现；跨端 touch + H5 mouse 拖拽并缓存轨道尺寸；activeColor/trackColor 支持单实例主题。

## 介绍

DdSlider 用于连续或步进的数值调节，如音量、亮度、混响等级等。3px 胶囊轨道配金色渐变填充与发光，20px 白色滑块带金边并伴随发光，拖动时缩放反馈。`showTooltip` 开启后拖动期间显示玻璃气泡数值提示。`step>1` 时启用吸附，`step<=1` 视为连续。跨端通过 touch 事件与 H5 mouse 事件实现拖拽，拖拽期间缓存轨道尺寸以提升性能。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-slider v-model="volume" />
</template>

<script setup>
import { ref } from 'vue'
const volume = ref(30)
</script>
```

</DemoBlock>
:::

### 步进与气泡提示

`step` 控制吸附粒度；`show-tooltip` 拖动时显示数值气泡。

:::demo
<DemoBlock>

```vue
<template>
  <dd-slider v-model="level" :min="0" :max="10" :step="1" show-tooltip />
</template>

<script setup>
import { ref } from 'vue'
const level = ref(5)
</script>
```

</DemoBlock>
:::

### 自定义颜色与禁用

`active-color` / `track-color` 单实例覆盖主题色；`disabled` 禁用交互。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:32rpx">
    <dd-slider v-model="brightness" active-color="#FFD700" />
    <dd-slider v-model="v" disabled />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const brightness = ref(60)
const v = ref(50)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 当前值 | `number` | `0` |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| step | 步长，<=1 视为连续不吸附 | `number` | `1` |
| disabled | 是否禁用 | `boolean` | `false` |
| showTooltip | 拖动时是否显示数值气泡 | `boolean` | `false` |
| activeColor | 自定义填充与滑块边框颜色 | `string` | `''` |
| trackColor | 自定义轨道背景色 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化时触发 | `val: number` |
| change | 值变化时触发 | `val: number` |
| drag-start | 开始拖动时触发 | — |
| drag-end | 结束拖动时触发 | — |

## 设计规范

::: tip 最佳实践
- 音量、亮度等平滑调节使用 step=1。
- 等级/档位偏好使用 step>1 吸附。
- 拖动时开启 showTooltip 提供精确反馈。
- 滑块保持 20px 触摸目标尺寸。
- 不可交互时用 opacity 0.4 + pointer-events none 禁用。
:::

::: warning 注意事项
- 滑块不要小于 20px——移动端难以点击。
- 本组件仅支持单滑块，不支持双滑块 range。
- 不支持刻度标记，请使用 step 吸附替代。
:::
