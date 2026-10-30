# 步骤条 DdSteps

> 最小化上下文提供者容器——仅做 flex 布局 + provide/inject 注册子项，所有视觉逻辑下放给 dd-step。

## 介绍

DdSteps 是步骤条容器组件，本身只负责布局（水平 flex 行 / 垂直 flex 列）与状态上下文分发。通过 `provide('ddSteps')` 向子项 `dd-step` 注入当前 `active` 索引、方向、激活/未激活颜色，子项据此自动推导自身状态。**必须与 `dd-step` 子组件配合使用**，单独使用没有意义。

## 代码演示

### 基础用法

通过 `active` 控制当前激活步骤（0-indexed），随用户推进流程递增。

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

### 垂直时间线

`direction="vertical"` 切换为纵向布局，适合步骤较多或带描述的详细流程。

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

### 自定义颜色

`activeColor` / `inactiveColor` 覆盖默认的品牌金（`--dd-primary`）与未激活灰（`--dd-step-inactive-color`）。

:::demo
<DemoBlock>

```vue
<template>
  <dd-steps :active="1" active-color="#FFD700" inactive-color="#666">
    <dd-step title="第一步" />
    <dd-step title="第二步" />
    <dd-step title="第三步" />
  </dd-steps>
</template>
```

</DemoBlock>
:::

### 圆点图标

通过 `icon` 传入 `dd-icon` 图标名，替代默认序号/完成对勾。

:::demo
<DemoBlock>

```vue
<template>
  <dd-steps :active="2">
    <dd-step title="下单" description="待支付" icon="orders-o" />
    <dd-step title="发货" description="运输中" icon="logistics" />
    <dd-step title="收货" description="已签收" icon="tosend" />
    <dd-step title="完成" icon="success" />
  </dd-steps>
</template>
```

</DemoBlock>
:::

### 尺寸

`size` 控制圆点直径与标题/描述字号。

:::demo
<DemoBlock>

```vue
<template>
  <dd-steps :active="1" size="sm">
    <dd-step title="步骤一" />
    <dd-step title="步骤二" />
    <dd-step title="步骤三" />
  </dd-steps>
  <dd-steps :active="1" size="lg">
    <dd-step title="步骤一" description="已完成" />
    <dd-step title="步骤二" description="进行中" />
    <dd-step title="步骤三" description="待执行" />
  </dd-steps>
</template>
```

</DemoBlock>
:::

### 自定义内容

`dd-step` 提供默认插槽：传入内容即整体接管标题/描述区（可放 tag、右对齐时间等富文本行），不传时回退 `title` / `description`。

:::demo
<DemoBlock>

```vue
<template>
  <dd-steps :active="1" direction="vertical">
    <dd-step>
      <view class="step-row">
        <text class="step-row__title">房态 · 开房</text>
        <text class="step-row__time">10-29 11:18</text>
      </view>
      <text class="step-row__desc">黄志强（门店经理）· 房态 空闲 → 使用中</text>
    </dd-step>
    <dd-step>
      <view class="step-row">
        <text class="step-row__title">房态 · 续时</text>
        <text class="step-row__time">10-29 16:55</text>
      </view>
      <text class="step-row__desc">黄志强（门店经理）· 续时 2 小时</text>
    </dd-step>
  </dd-steps>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| active | 当前激活步骤索引（0-indexed） | `number` | `0` |
| direction | 布局方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| activeColor | 激活态颜色（为空取主题 token `--dd-primary`） | `string` | `''` |
| inactiveColor | 未激活态颜色（为空取主题 token `--dd-step-inactive-color`） | `string` | `''` |
| size | 尺寸档位（圆点直径 16/20/24px，字号 10/12/14px） | `'sm' \| 'md' \| 'lg'` | `'md'` |

### Events

无。

### Slots

| 名称 | 说明 |
|------|------|
| default | 步骤内容，放置 `dd-step` 子组件 |

## 设计规范

::: tip 最佳实践
- 用于预订、结账等多步流程展示进度。
- 用户推进时递增 `active`。
- 长流程或带描述的场景使用 vertical。
- 通过 activeColor 保持品牌色一致。
:::

::: warning 注意事项
- 不要在同一容器内混用 horizontal 和 vertical。
- 移动端水平方向步骤不宜超过约 6 个。
- `active` 是 0-indexed，首项为 0。
:::

## 步骤项 DdStep

> 基于 inject 的步骤节点，自动从父级 dd-steps 的 active 索引推导自身状态（wait/process/finish），支持 horizontal/vertical 布局，激活态为金色圆圈 + 连接线高亮。

DdStep 是步骤条的子项组件，**必须配合 `dd-steps` 父组件使用**。它通过 `inject('ddSteps')` 获取父级提供的 active 索引、方向、颜色等上下文，自动计算自身是已完成（finish）、当前（process）还是未开始（wait）状态，无需手动传入 status。脱离父组件使用时会降级为单个 wait 状态的水平步骤。状态由父级 `active` 控制，不要在子项上手动设置。

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 步骤标题 | `string` | `''` |
| description | 步骤描述（可选） | `string` | `''` |
| icon | 圆点内图标（`dd-icon` 名称），传入后替代序号/完成对勾 | `string` | `''` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 步骤内容区；传入即整体接管标题/描述，未传时渲染 `title` / `description` 兜底 |

### 注入上下文

DdStep 通过 `inject('ddSteps')` 消费父级 `dd-steps` 提供的上下文，自动获取 index、direction、active、activeColor、inactiveColor，并据此推导 status。

### 设计规范

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
