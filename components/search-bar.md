# 搜索栏 DdSearchBar

> 胶囊形（var(--radius-full)，round 默认 true）44px 搜索栏基于 var(--neutral-800)；🔍 文本字形（小程序免 SVG）聚焦时变金 + 金色发光；默认占位「搜索歌曲、歌手」；尾部 × 清空 + 可选「取消」金色文字；confirm-type=search 统一小程序 @confirm 与 H5 回车。

## 介绍

DdSearchBar 是歌曲库、房态、订单等列表的统一搜索入口。胶囊形外观配合 🔍 文本字形，聚焦时边框转金并伴随发光、图标同步变金。输入内容后尾部出现 × 清空按钮，清空后自动重新聚焦。`showCancel` 用于独立搜索页提供取消返回。键盘确认键统一为 search。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-search-bar v-model="kw" @search="onSearch" />
</template>

<script setup>
import { ref } from 'vue'
const kw = ref('')
function onSearch(v) {
  console.log('搜索：', v)
}
</script>
```

</DemoBlock>
:::

### 带取消按钮与自动聚焦

`show-cancel` 用于独立搜索页；`autofocus` 进入即聚焦。

:::demo
<DemoBlock>

```vue
<template>
  <dd-search-bar
    v-model="kw"
    show-cancel
    autofocus
    @cancel="onCancel"
    @search="onSearch"
  />
</template>

<script setup>
import { ref } from 'vue'
const kw = ref('')
function onCancel() { console.log('取消') }
function onSearch(v) { console.log('搜索：', v) }
</script>
```

</DemoBlock>
:::

### 方角变体

`round=false` 切换为 var(--radius-md) 方角形态。

:::demo
<DemoBlock>

```vue
<template>
  <dd-search-bar v-model="kw" :round="false" placeholder="筛选包房" />
</template>

<script setup>
import { ref } from 'vue'
const kw = ref('')
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 输入值 | `string` | `''` |
| placeholder | 占位提示文字 | `string` | `'搜索歌曲、歌手'` |
| round | 是否胶囊圆角 | `boolean` | `true` |
| showCancel | 是否显示取消按钮 | `boolean` | `false` |
| autofocus | 是否自动聚焦 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 值变化时触发 | `val: string` |
| focus | 聚焦时触发 | `event: Event` |
| blur | 失焦时触发 | `event: Event` |
| clear | 点击清空按钮时触发 | — |
| search | 点击键盘搜索键时触发 | `val: string` |
| cancel | 点击取消按钮时触发 | — |

## 设计规范

::: tip 最佳实践
- 使用胶囊形态（var(--radius-full)），round 默认为 true。
- 聚焦时应用金色边框 + 发光。
- 聚焦时 🔍 图标同步变金。
- 输入有值时显示 × 清空按钮。
- 独立搜索页使用 showCancel。
- 使用 confirm-type=search 让键盘显示「搜索」键。
:::

::: warning 注意事项
- 不要使用方角或小圆角搜索框形态。
- 不要省略聚焦金色发光——会降低交互可见性。
- 不要在 disabled 状态显示清空按钮。
- 取消按钮文字必须使用金色。
:::
