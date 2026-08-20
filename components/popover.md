# 气泡菜单 DdPopover

> CSS 锚定的气泡菜单，4 个方位（top/bottom/left/right）+ light/dark 主题，通过 provide/inject 将子项点击中继回宿主。

## 介绍

DdPopover 是锚定在触发元素旁的气泡菜单，点击触发元素切换显隐。提供 top / bottom / left / right 四个弹出方位与 light / dark 两种主题，面板带小箭头指向触发元素。**需配合 `dd-popover-item` 子组件使用**：子项通过 inject 消费上下文，点击后中继 select 事件给宿主并按配置自动关闭。注意：采用纯 CSS 定位，无动态视口夹紧，靠近屏幕边缘可能溢出。

## 代码演示

### 基础用法

default 插槽放触发元素，actions 插槽放 `dd-popover-item` 列表。

:::demo
<DemoBlock>

```vue
<template>
  <dd-popover v-model="show" placement="bottom" @select="onSelect">
    <dd-button type="secondary" size="sm">更多操作</dd-button>
    <template #actions>
      <dd-popover-item value="share" label="分享" />
      <dd-popover-item value="edit" label="编辑" />
      <dd-popover-item value="delete" label="删除" />
    </template>
  </dd-popover>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
function onSelect(value) {
  console.log('选中', value)
}
</script>
```

</DemoBlock>
:::

### 暗色主题与方位

`theme="dark"` 适配深色背景，`placement` 根据触发元素位置选择避免溢出。

:::demo
<DemoBlock>

```vue
<template>
  <dd-popover v-model="show" placement="top" theme="dark" @select="onSelect">
    <dd-button type="ghost" size="sm">···</dd-button>
    <template #actions>
      <dd-popover-item value="report" label="举报" />
      <dd-popover-item value="block" label="拉黑" />
    </template>
  </dd-popover>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
function onSelect(value) { console.log(value) }
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 是否显示（支持 v-model） | `boolean` | `false` |
| placement | 弹出方位 | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` |
| theme | 主题 | `'light' \| 'dark'` | `'light'` |
| closeOnClickAction | 点击操作项是否自动关闭 | `boolean` | `true` |
| closeOnClickOverlay | 点击遮罩是否关闭 | `boolean` | `true` |
| offset | 与触发元素的间距（rpx） | `number` | `16` |
| zIndex | 层级（遮罩为 zIndex-1） | `number` | `2000` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 显隐变化时触发 | `val: boolean` |
| select | 选择某项时触发（由 dd-popover-item 中继） | `value: any` |
| open | 打开时触发 | 无 |
| close | 关闭时触发 | 无 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 触发元素 |
| actions | 操作项列表，放置 `dd-popover-item` |

## 设计规范

::: tip 最佳实践
- 用于锚定在按钮/图标上的紧凑操作菜单。
- 根据触发元素位置选择 placement 避免视口溢出。
- 深色背景用 dark 主题保证对比度。
- 单选菜单设置 `closeOnClickAction=true`。
:::

::: warning 注意事项
- 不要用于复杂表单——改用 popup。
- 不要期待视口动态夹紧——纯 CSS 定位，边缘可能溢出。
- 不要在 popover 内嵌套 popover。
- 无打开/关闭过渡动画，瞬切显示。
:::
