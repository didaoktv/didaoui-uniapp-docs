# 分类选择 DdTreeSelect

> 分类选择：左侧分类导航 + 右侧子选项同屏联动，单选/多选开箱即用。

## 介绍

DdTreeSelect 适用于「两级结构一次选完」的场景：左侧为分类导航（`items[].text`），右侧为当前分类下的子选项（`items[].children`，字段 `id` / `text` / `disabled`）。点击导航切换分类（`v-model:main-active-index`），点击子选项选中（`v-model:active-id`）：`activeId` 传数字/字符串为单选，传数组开启多选并可配 `max` 限制上限。导航项支持 `disabled` / `dot` 红点 / `badge` 徽标；子项选中时右侧显示 `selectedIcon` 图标（默认 `success`）。`height` 控制整体高度，`content` 插槽可整体替换右侧区域。

## 代码演示

### 基础用法（单选）

:::demo
<DemoBlock>

```vue
<template>
  <dd-tree-select
    :items="items"
    v-model:main-active-index="mainActiveIndex"
    v-model:active-id="activeId"
    @click-item="onItemClick"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const mainActiveIndex = ref(0)
const activeId = ref(0)
const items = [
  { text: '洋酒', children: [{ id: 1, text: '威士忌' }, { id: 2, text: '白兰地' }, { id: 12, text: '龙舌兰' }] },
  { text: '小食', children: [{ id: 3, text: '果盘' }, { id: 4, text: '坚果' }] },
  { text: '软饮', children: [{ id: 5, text: '可乐' }, { id: 6, text: '苏打水' }] },
]
function onItemClick(item: { id: number; text: string }) {
  console.log('选中', item)
}
</script>
```

</DemoBlock>
:::

### 多选 + 数量上限

`activeId` 传数组开启多选，`max` 限制最多可选数量；再点一次已选项取消勾选。

:::demo
<DemoBlock>

```vue
<template>
  <dd-tree-select
    :items="items"
    :max="3"
    v-model:main-active-index="mainActiveIndex"
    v-model:active-id="activeIds"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const mainActiveIndex = ref(0)
const activeIds = ref<number[]>([])
const items = [
  { text: '果盘', children: [{ id: 1, text: '水果拼盘' }, { id: 2, text: '坚果拼盘' }, { id: 3, text: '卤味拼盘' }] },
  { text: '酒水', children: [{ id: 4, text: '威士忌' }, { id: 5, text: '香槟' }] },
]
</script>
```

</DemoBlock>
:::

### 禁用 / 红点 / 徽标 / 高度

导航项支持 `disabled`（整类禁用与单个子项禁用）、`dot` 红点、`badge` 数字徽标；`height` 传数字按 px，传字符串原样输出（支持 rpx）。

:::demo
<DemoBlock>

```vue
<template>
  <dd-tree-select :items="items" height="500rpx" v-model:active-id="activeId" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeId = ref(2)
const items = [
  { text: '洋酒', dot: true, children: [{ id: 1, text: '威士忌' }, { id: 2, text: '白兰地', disabled: true }] },
  { text: '小食', badge: 6, children: [{ id: 3, text: '果盘' }, { id: 4, text: '坚果' }] },
  { text: '已售罄', disabled: true, children: [{ id: 5, text: '香槟' }] },
]
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| items | 分类数据（左侧导航 + 右侧子项） | `TreeSelectItem[]` | `[]` |
| mainActiveIndex | 左侧导航选中索引（支持 `v-model:main-active-index`） | `number` | `0` |
| activeId | 右侧选中项 id，传数组开启多选（支持 `v-model:active-id`） | `string \| number \| Array<string \| number>` | `0` |
| max | 多选时最多可选数量（`activeId` 为数组时生效） | `number` | `Infinity` |
| height | 组件高度，数字按 px，字符串原样输出（支持 rpx） | `string \| number` | `300` |
| selectedIcon | 选中项右侧图标名（dd-icon name） | `string` | `'success'` |

> `TreeSelectItem = { text?: string; disabled?: boolean; dot?: boolean; badge?: string \| number; className?: string; children?: TreeSelectChild[] }`
>
> `TreeSelectChild = { id: string \| number; text: string; disabled?: boolean }`

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:main-active-index | 导航选中索引变化 | `index: number` |
| update:active-id | 选中项变化（多选时返回数组） | `id: string \| number \| Array<string \| number>` |
| click-nav | 点击导航项时触发（禁用项不触发） | `index: number` |
| click-item | 点击子选项时触发（禁用项不触发） | `item: TreeSelectChild` |

### Slots

| 名称 | 说明 |
|------|------|
| content | 自定义右侧内容区（整体替换默认子项列表，无作用域） |
| nav-text | 自定义导航项文案，作用域 `{ item }` |

::: warning 注意事项
- 多选达到 `max` 上限后，继续点击其他子项不再新增（需先取消已选项）。
- `activeId` 传数组即视为多选模式，单选/多选由传入类型决定，运行时不切换。
- `content` 插槽替换右侧区域后，选中态与 `click-item` 逻辑需自行实现。
:::
