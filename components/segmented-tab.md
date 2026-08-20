# 分段选择器 DdSegmentedTab

> 两种变体——pill（凸起轨道上滑动的白色指示块）与 text（金色下划线）——均由 v-model 驱动，激活态使用品牌金或白底深字。

## 介绍

DdSegmentedTab 用于在少量互斥选项间切换。`variant="pill"` 为胶囊形分段控件，凸起轨道上白色滑块随选中项滑动，激活文字为深色加粗；`variant="text"` 为纯文字标签，激活项为金色加粗并带 60% 宽金色下划线。pill 适合 2-3 个选项（如本日/本周/本月），text 适合 4+ 排序/筛选选项。

## 代码演示

### 胶囊分段

:::demo
<DemoBlock>

```vue
<template>
  <dd-segmented-tab
    v-model="active"
    :options="['本日', '本周', '本月']"
    variant="pill"
  />
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>
```

</DemoBlock>
:::

### 文字下划线

`variant="text"` 用于 4+ 排序/筛选选项，激活项金色加粗配下划线。

:::demo
<DemoBlock>

```vue
<template>
  <dd-segmented-tab
    v-model="active"
    :options="['房态排序', '余时排序', '显示房型', '显示小图']"
    variant="text"
  />
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>
```

</DemoBlock>
:::

### 对象选项

`options` 也支持 `{ label }` 对象形式。

:::demo
<DemoBlock>

```vue
<template>
  <dd-segmented-tab
    v-model="active"
    :options="[{ label: '今日门店业绩' }, { label: '我的业绩' }]"
    variant="pill"
  />
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 当前选中索引 | `number` | `0` |
| options | 选项数组，字符串或 `{ label }` 对象 | `(string \| { label: string })[]` | `[]` |
| variant | 变体样式 | `'pill' \| 'text'` | `'pill'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 选中变化时触发 | `val: number` |
| change | 选中变化时触发 | `val: number` |

## 设计规范

::: tip 最佳实践
- 2-3 个时间筛选类选项使用 pill 变体。
- 4+ 排序/筛选选项使用 text 变体。
- 激活文字使用品牌金（var(--didao-primary-400)）。
- 标签保持简短（2-4 字）。
- 通过 v-model（number 索引）驱动选择。
:::

::: warning 注意事项
- pill 变体不要超过 4 个选项。
- 不要在同一控件内混用 pill 与 text。
- 不要缺少清晰的激活态。
:::
