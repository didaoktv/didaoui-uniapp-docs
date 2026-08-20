# 折叠面板 DdCollapse

> 无状态控制器容器 — 通过 provide 向子项注入 isExpanded/toggle 上下文，内部将数组与单值 modelValue 归一化以兼容手风琴模式。

## 介绍

DdCollapse 是折叠面板的容器组件，本身不渲染视觉样式，仅负责展开/收起状态的管理与分发。通过 `modelValue` 实现 `v-model` 双向绑定，支持多展开与手风琴（`accordion`）两种模式。子项 `dd-collapse-item` 通过 inject 消费上下文完成 UI 表现。

## 代码演示

### 基础用法

通过 `v-model` 绑定当前展开项的 `name` 数组，点击标题即可切换展开状态。

:::demo
<DemoBlock>

```vue
<template>
  <dd-collapse v-model="active">
    <dd-collapse-item name="1" title="包房类型">
      大包 / 中包 / 小包 / 迷你包
    </dd-collapse-item>
    <dd-collapse-item name="2" title="会员权益">
      尊享会员享 8 折优惠及免费果盘
    </dd-collapse-item>
  </dd-collapse>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(['1'])
</script>
```

</DemoBlock>
:::

### 手风琴模式

设置 `accordion` 后同一时间仅保留一个展开项，`modelValue` 为单值。

:::demo
<DemoBlock>

```vue
<template>
  <dd-collapse v-model="active" accordion>
    <dd-collapse-item name="notice" title="预订须知">
      请提前 15 分钟到店确认房台
    </dd-collapse-item>
    <dd-collapse-item name="refund" title="退订规则">
      开唱前 30 分钟可免费取消
    </dd-collapse-item>
  </dd-collapse>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('notice')
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 当前展开项的 name，手风琴模式为单值，多展开模式为数组 | `string \| number \| (string \| number)[]` | `[]` |
| accordion | 是否手风琴模式（同一时间仅展开一项） | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 展开状态变化时触发 | `val: string \| number \| (string \| number)[]` |
| change | 展开状态变化时触发 | `val: string \| number \| (string \| number)[]` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 折叠面板内容，通常放置 `dd-collapse-item` |

## 设计规范

::: tip 最佳实践
- 同一时刻只允许展开一个面板时设置 `accordion=true`。
- 通过 `modelValue` 进行 `v-model` 双向绑定以外部控制展开状态。
:::

::: warning 注意事项
- 不要期望 Collapse 本身提供视觉样式 —— 它仅提供状态上下文，样式由 `dd-collapse-item` 承担。
:::
