# 评分 DdRate

> 星级评分使用 void + fill 叠层技术配合百分比裁剪，半星通过分裂热区实现，设计上不支持拖动选星。

## 介绍

DdRate 用于服务/歌曲评分场景。每颗星由两层构成：底层 void 星（边框灰）与上层 fill 叠层（金色，按百分比裁剪宽度）。`allowHalf` 开启半星，热区左右各 50% 分别选择 i-0.5 与 i。`readonly` 用于展示已有评分，`disabled` 半透明并禁止交互。星形使用 serif 字体的 ★ 字符。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-rate v-model="score" />
</template>

<script setup>
import { ref } from 'vue'
const score = ref(3)
</script>
```

</DemoBlock>
:::

### 半星与只读

`allow-half` 启用半星精度；`readonly` 仅展示不可交互。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:24rpx">
    <dd-rate v-model="score" allow-half />
    <dd-rate :model-value="4" readonly />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const score = ref(3.5)
</script>
```

</DemoBlock>
:::

### 自定义数量、尺寸与颜色

`count` 控制星星数量；`size` 控制尺寸；`color` / `void-color` 自定义颜色。

:::demo
<DemoBlock>

```vue
<template>
  <dd-rate
    v-model="score"
    :count="10"
    :size="16"
    color="#F5A623"
    void-color="#2A2A2A"
  />
</template>

<script setup>
import { ref } from 'vue'
const score = ref(7)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 当前评分 | `number` | `0` |
| count | 星星总数 | `number` | `5` |
| size | 单颗星尺寸（px） | `number` | `20` |
| allowHalf | 是否允许半星 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| color | 选中星颜色 | `string` | `'#F5A623'` |
| voidColor | 未选中星颜色 | `string` | `'#2A2A2A'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 评分变化时触发 | `val: number` |
| change | 评分变化时触发 | `val: number` |

## 设计规范

::: tip 最佳实践
- 用于 KTV 场景下的服务/歌曲评分。
- 需要精细评分时启用 allowHalf。
- 展示已有评分使用 readonly。
- 突出展示时增大 size。
:::

::: warning 注意事项
- 永久性评分展示请用 readonly 而非 disabled。
- 不支持拖动选星——仅点击热区生效。
- 覆盖 voidColor 时需确保在背景下可见。
:::
