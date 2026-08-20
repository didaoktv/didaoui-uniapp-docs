# 步骤项 DdStep

> 基于 inject 的步骤节点，自动从父级 dd-steps 的 active 索引推导自身状态（wait/process/finish），支持 horizontal/vertical 布局，激活态为金色圆圈 + 连接线高亮。

## 介绍

DdStep 是步骤条的子项组件，**必须配合 `dd-steps` 父组件使用**。它通过 `inject('ddSteps')` 获取父级提供的 active 索引、方向、颜色等上下文，自动计算自身是已完成（finish）、当前（process）还是未开始（wait）状态，无需手动传入 status。脱离父组件使用时会降级为单个 wait 状态的水平步骤。状态由父级 `active` 控制，不要在子项上手动设置。

## 代码演示

### 基础用法（配合 dd-steps）

父级 `active` 控制当前步骤索引（0-indexed），子项自动推导状态。

:::demo
<DemoBlock>

```vue
<template>
  <dd-steps :active="active">
    <dd-step title="选择包房" />
    <dd-step title="确认订单" />
    <dd-step title="完成支付" />
  </dd-steps>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(1)
</script>
```

</DemoBlock>
:::

### 垂直步骤

父级设置 `direction="vertical"`，子项自动切换为纵向时间线布局，适合步骤较多或需要描述的场景。

:::demo
<DemoBlock>

```vue
<template>
  <dd-steps :active="2" direction="vertical">
    <dd-step title="下单成功" description="2024-01-01 10:00" />
    <dd-step title="商家接单" description="预计 15 分钟后开始" />
    <dd-step title="正在配送" description="骑手已取餐" />
    <dd-step title="已送达" />
  </dd-steps>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 步骤标题 | `string` | `''` |
| description | 步骤描述（可选） | `string` | `''` |

### Events

无。

### Slots

无。

### 注入上下文

DdStep 通过 `inject('ddSteps')` 消费父级 `dd-steps` 提供的上下文，自动获取 index、direction、active、activeColor、inactiveColor，并据此推导 status。

## 设计规范

::: tip 最佳实践
- 必须作为 `dd-steps` 的子组件使用。
- 让父级 `dd-steps` 管理 active 索引，step 自动计算状态。
- 复杂多步流程使用 vertical 方向。
- 为关键步骤补充 description 提供上下文。
:::

::: warning 注意事项
- 不要脱离 `dd-steps` 单独使用——会降级为单个 wait 状态步骤。
- 不要手动设置 active——父级上下文按 index 比较决定状态。
- 不要期待点击交互——step 仅用于展示。
:::
