# 下拉菜单 DdDropdownMenu

> 通过响应式 provide 上下文协调多个子项的单开行为；遮罩位置在展开时测量一次（不随滚动更新）以保持简单。

## 介绍

DdDropdownMenu 是下拉菜单的容器，渲染一条横向菜单栏并管理子项 `dd-dropdown-item` 的展开状态，保证同一时间仅打开一个面板。支持向下/向上展开方向、遮罩遮罩及点击外部关闭等行为。H5 端通过 document click 监听实现外部点击关闭，小程序端依赖遮罩覆盖。

## 代码演示

### 基础用法

将 `dd-dropdown-item` 作为默认插槽子项，每个 item 通过 `v-model` 管理自身选中值。

:::demo
<DemoBlock>

```vue
<template>
  <dd-dropdown-menu>
    <dd-dropdown-item
      v-model="roomType"
      title="包房类型"
      :options="roomOptions"
    />
    <dd-dropdown-item
      v-model="sort"
      title="价格排序"
      :options="sortOptions"
    />
  </dd-dropdown-menu>
</template>

<script setup>
import { ref } from 'vue'
const roomType = ref('mid')
const sort = ref('asc')
const roomOptions = [
  { text: '大包', value: 'big' },
  { text: '中包', value: 'mid' },
  { text: '小包', value: 'small' },
]
const sortOptions = [
  { text: '价格从低到高', value: 'asc' },
  { text: '价格从高到低', value: 'desc' },
]
</script>
```

</DemoBlock>
:::

### 向上展开

当菜单栏位于屏幕底部时，设置 `direction="up"` 使面板向上展开。

:::demo
<DemoBlock>

```vue
<template>
  <dd-dropdown-menu direction="up" :close-on-click-overlay="true">
    <dd-dropdown-item
      v-model="value"
      title="筛选"
      :options="options"
    />
  </dd-dropdown-menu>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('a')
const options = [
  { text: '全部', value: 'a' },
  { text: '使用中', value: 'b' },
  { text: '空闲', value: 'c' },
]
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| activeColor | 选中态高亮色 | `string` | `'#F5A623'` |
| direction | 展开方向 | `'down' \| 'up'` | `'down'` |
| overlay | 是否显示遮罩 | `boolean` | `true` |
| closeOnClickOverlay | 点击遮罩是否关闭 | `boolean` | `true` |
| closeOnClickOutside | 点击外部是否关闭（H5） | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 当前展开的 item id 变化时触发 | `id: number` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 菜单栏内容，通常放置 `dd-dropdown-item` |

## 设计规范

::: tip 最佳实践
- 将 `dd-dropdown-item` 作为默认插槽子项放置在菜单栏中。
- 菜单栏位于屏幕底部时设置 `direction="up"`。
:::

::: warning 注意事项
- 展开后遮罩位置在打开时测量一次（fixed 定位），不会随页面滚动更新。
:::

## 下拉菜单项 DdDropdownItem

> 自测量的触发器+面板组合，依赖注入的菜单上下文完成开关协调；箭头三角与内容 translateY 实现滑动动画，无需 JS 计算高度。

DdDropdownItem 是下拉菜单的子项，在菜单栏中渲染触发器（标题 + 箭头），展开后渲染选项面板。通过 inject 获取父级 `dd-dropdown-menu` 上下文，完成注册、开关与单开协调。选中项会高亮并触发 `v-model` 更新。

### 代码演示

#### 带图标的选项

每个选项可配置 `icon` 显示左侧图标；未指定 `title` 时，触发器显示当前选中项文本。

:::demo
<DemoBlock>

```vue
<template>
  <dd-dropdown-menu>
    <dd-dropdown-item
      v-model="value"
      :options="options"
    />
  </dd-dropdown-menu>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(1)
const options = [
  { text: '微信支付', value: 1, icon: '/static/wx.png' },
  { text: '支付宝', value: 2, icon: '/static/alipay.png' },
  { text: '余额支付', value: 3, icon: '/static/balance.png' },
]
</script>
```

</DemoBlock>
:::

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 触发器标题（未设置时显示选中项文本） | `string` | `''` |
| options | 选项列表 | `DropdownOption[]` | `[]` |
| modelValue | 当前选中值（v-model） | `any` | `null` |
| disabled | 是否禁用 | `boolean` | `false` |

其中 `DropdownOption` 结构为：

| 字段 | 说明 | 类型 |
|------|------|------|
| text | 选项文本 | `string` |
| value | 选项值 | `any` |
| icon | 选项图标地址（可选） | `string` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 选中项变化时触发 | `val: any` |
| change | 选中项变化时触发 | `val: any` |

### 设计规范

::: tip 最佳实践
- 必须放置在 `dd-dropdown-menu` 内使用，由其提供开关上下文。
- 通过 `options` 提供 text + value 以驱动 v-model 选中。
:::

::: warning 注意事项
- 不要脱离 `dd-dropdown-menu` 单独使用 —— 上下文注入会返回 null，toggle 不生效。
:::
