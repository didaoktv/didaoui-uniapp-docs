# 气泡菜单项 DdPopoverItem

> 轻量气泡菜单项，通过 inject 将点击中继给父级 dd-popover，继承主题色，支持 disabled 与自定义 color。

## 介绍

DdPopoverItem 是 `dd-popover` 的子项组件，**必须放在 popover 的 actions 插槽内使用**。它通过 `inject('ddPopover')` 获取父级中继函数，点击后把 `value` 传给父级并按配置自动关闭。脱离父级使用时 inject 返回 null，点击会被静默忽略。文本单行省略，项间用 hairline 分隔，color 继承 popover 主题色，可通过 `color` prop 覆盖。

## 代码演示

### 基础用法

放在 `dd-popover` 的 `#actions` 插槽内，`value` 用于中继回选中的值。

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

### 禁用项

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

## API

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

### Slots

无。

### 注入上下文

DdPopoverItem 通过 `inject('ddPopover')` 消费父级 `dd-popover` 提供的中继函数 `onSelect(value)`，点击后将 value 传给父级并按其 `closeOnClickAction` 配置关闭。

## 设计规范

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
