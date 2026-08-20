# 可滑动标签页 DdSwipeableTab

> 底部金色渐变指示条（占激活项 60% 宽或 lineWidth prop）配 cubic-bezier 滑动；scrollable 居中激活项，fixed 等分 flex。

## 介绍

DdSwipeableTab 用于顶部内容切换的标签栏。`mode="fixed"` 等分宽度，适合 2-4 个选项（如设置页基本/音效/隐私/关于）；`mode="scrollable"` 横向可滚动并自动将激活项居中，适合 5+ 分类（如推荐/热门/新歌/经典/榜单）。激活项为金色加粗并伴随发光，底部金色渐变指示条通过 createSelectorQuery 测量后以 cubic-bezier 平滑滑动。

## 代码演示

### 固定等分

:::demo
<DemoBlock>

```vue
<template>
  <dd-swipeable-tab
    v-model="active"
    :options="['基本', '音效', '隐私', '关于']"
    mode="fixed"
  />
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>
```

</DemoBlock>
:::

### 可滚动

`mode="scrollable"` 用于 5+ 分类，激活项自动居中。

:::demo
<DemoBlock>

```vue
<template>
  <dd-swipeable-tab
    v-model="active"
    :options="['推荐', '热门', '新歌', '经典', '榜单', '歌手', '曲风', '主题']"
    mode="scrollable"
  />
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>
```

</DemoBlock>
:::

### 自定义指示条宽度

`line-width`（rpx）覆盖默认 60% 宽度。

:::demo
<DemoBlock>

```vue
<template>
  <dd-swipeable-tab
    v-model="active"
    :options="['点歌', '已点', '搜索']"
    mode="fixed"
    :line-width="48"
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
| mode | 模式，fixed 等分 / scrollable 可滚动 | `'fixed' \| 'scrollable'` | `'fixed'` |
| lineWidth | 指示条宽度（rpx），0 为占激活项 60% | `number` | `0` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 选中变化时触发 | `val: number` |
| change | 选中变化时触发 | `val: number` |

## 设计规范

::: tip 最佳实践
- 5+ 分类的主页使用 scrollable。
- 2-4 个设置页选项使用 fixed。
- 指示条默认占激活项 60% 宽，可用 lineWidth（rpx）覆盖。
- 指示条动画使用 0.3s cubic-bezier(0.4,0,0.2,1)。
- 通过 v-model（number 索引）驱动选择。
:::

::: warning 注意事项
- fixed 模式不要超过 4 个标签。
- 不要在同一层级混用 scrollable 与 fixed。
- 标签文字保持简短（2-4 字最佳）。
:::
