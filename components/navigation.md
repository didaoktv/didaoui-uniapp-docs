# 底部导航 DdNavigation

> 底部固定标签栏，v-model index 选择，激活项显示金色渐变顶部指示条配发光与金色图标/标签。

## 介绍

DdNavigation 是底部固定的标签栏，用于应用主导航。每个标签项纵向堆叠图标与标签，激活项显示金色渐变顶部指示条并伴随发光，图标与标签同步变金。`fixed` 默认固定底部并适配安全区，`border` 默认显示顶部细线。`items` 配置图标与标签，通过 `v-model` 驱动选中索引。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-navigation v-model="active" :items="items" :fixed="false" />
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
const items = [
  { icon: '🏠', label: '首页' },
  { icon: '📊', label: '排行' },
  { icon: '🎤', label: '包房' },
  { icon: '👤', label: '我的' },
]
</script>
```

</DemoBlock>
:::

### 自定义图标槽

通过 `#icon` 槽自定义图标渲染，作用域参数含 `item`、`index`、`active`。

:::demo
<DemoBlock>

```vue
<template>
  <dd-navigation v-model="active" :items="items" :fixed="false">
    <template #icon="{ item, active }">
      <text :style="{ color: active ? '#F5A623' : '#9E9E9E' }">{{ item.icon }}</text>
    </template>
  </dd-navigation>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
const items = [
  { icon: '🏠', label: '首页' },
  { icon: '🎤', label: '包房' },
]
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 当前激活项索引 | `number` | `0` |
| items | 导航项数组 | `NavItem[]` | `[]` |
| fixed | 是否固定底部 | `boolean` | `true` |
| border | 是否显示顶部细线 | `boolean` | `true` |

> `NavItem = { icon: string; label: string; [key: string]: any }`

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 激活项变化时触发 | `val: number` |
| change | 激活项变化时触发 | `val: number` |

### Slots

| 名称 | 说明 | 作用域参数 |
|------|------|-----------|
| icon | 自定义图标内容 | `{ item: NavItem; index: number; active: boolean }` |

## 设计规范

::: tip 最佳实践
- 标签数量控制在 4-5 个以内。
- 标签文字简短（2-3 字）。
- 激活态使用金色（var(--didao-primary-400)）图标与标签。
- 通过 v-model（number 索引）驱动选择。
:::

::: warning 注意事项
- 标签不要超过 5 个。
- 不要混合「仅图标」与「图标+标签」两种模式。
- 不要覆盖激活态金色指示条。
:::
