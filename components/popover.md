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

## 气泡菜单项 DdPopoverItem

> 轻量气泡菜单项，通过 inject 将点击中继给父级 dd-popover，继承主题色，支持 disabled 与自定义 color。

DdPopoverItem 是 `dd-popover` 的子项组件，**必须放在 popover 的 actions 插槽内使用**。它通过 `inject('ddPopover')` 获取父级中继函数，点击后把 `value` 传给父级并按配置自动关闭。脱离父级使用时 inject 返回 null，点击会被静默忽略。文本单行省略，项间用 hairline 分隔，color 继承 popover 主题色，可通过 `color` prop 覆盖。

### 代码演示

#### 图标与自定义颜色

放在 `dd-popover` 的 `#actions` 插槽内，`value` 用于中继回选中的值；`color` 覆盖主题色（如删除项红色）。

:::demo
<DemoBlock>

```vue
<template>
  <dd-popover v-model="show" @select="onSelect">
    <dd-button type="secondary" size="sm">更多</dd-button>
    <template #actions>
      <dd-popover-item value="share" text="分享" icon="↗" />
      <dd-popover-item value="edit" text="编辑" icon="✎" />
      <dd-popover-item value="delete" text="删除" color="#E53935" />
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

#### 禁用项

`disabled` 禁用某项，视觉变暗且不可点击。

:::demo
<DemoBlock>

```vue
<template>
  <dd-popover v-model="show">
    <dd-button type="secondary" size="sm">操作</dd-button>
    <template #actions>
      <dd-popover-item value="add" text="添加到歌单" />
      <dd-popover-item value="added" text="已点歌曲" disabled />
    </template>
  </dd-popover>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

</DemoBlock>
:::

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| text | 项文案 | `string` | `''` |
| icon | 图标文案 | `string` | `''` |
| value | 项的值（中继给父级 select） | `any` | `undefined` |
| disabled | 是否禁用 | `boolean` | `false` |
| color | 文字颜色（覆盖继承的主题色） | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击时触发（disabled 不触发） | `value: any` |

### 注入上下文

DdPopoverItem 通过 `inject('ddPopover')` 消费父级 `dd-popover` 提供的中继函数 `onSelect(value)`，点击后将 value 传给父级并按其 `closeOnClickAction` 配置关闭。

### 设计规范

::: tip 最佳实践
- 必须放在 `dd-popover` 的 actions 插槽内使用。
- 文案保持简短（单行省略）。
- 常用操作可加 icon。
- 不可用项用 disabled，视觉变暗明确。
:::

::: warning 注意事项
- 不要脱离 `dd-popover` 使用——inject 返回 null，点击被静默忽略。
- 项数不要超过 8 个，否则考虑其他模式。
- 覆盖 color 时确保与主题背景对比度足够。
:::
