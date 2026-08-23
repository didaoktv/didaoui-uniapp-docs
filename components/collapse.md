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

## 折叠面板项 DdCollapseItem

> 通过 uni.createSelectorQuery 测量真实内容高度驱动 max-height 过渡；可脱离父级独立使用（本地回退），也可由 dd-collapse 上下文控制。

DdCollapseItem 是折叠面板的内容项，由标题区（title + value + 箭头）与内容区（max-height 过渡）组成。展开时箭头旋转 180°，内容高度通过节点查询动态测量以保证过渡自然。未注入父级 `dd-collapse` 时也可作为独立的单个披露行使用。

### 代码演示

#### 基础用法

需放置在 `dd-collapse` 内，并通过 `name` 标识自身以参与 `v-model` 联动。

:::demo
<DemoBlock>

```vue
<template>
  <dd-collapse v-model="active">
    <dd-collapse-item name="1" title="包房类型" value="大包">
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

#### 禁用与无分割线

`disabled` 会降低透明度并阻止切换；`border` 控制底部分割线。

:::demo
<DemoBlock>

```vue
<template>
  <dd-collapse-item title="已停用套餐" disabled>
    该套餐暂不可用
  </dd-collapse-item>
  <dd-collapse-item title="无分割线项" :border="false">
    去除底部分割线
  </dd-collapse-item>
</template>
```

</DemoBlock>
:::

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 项的唯一标识，用于父级 v-model 跟踪 | `string \| number` | `''` |
| title | 标题文字 | `string` | `''` |
| value | 标题右侧的辅助文字 | `string` | `''` |
| disabled | 是否禁用（降低透明度并阻止切换） | `boolean` | `false` |
| border | 是否显示底部分割线 | `boolean` | `true` |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题内容（优先于 title prop） |
| default | 折叠展开后的主体内容 |

### 设计规范

::: tip 最佳实践
- 在 `dd-collapse` 内为每一项提供唯一的 `name`，以便 v-model 准确跟踪展开状态。
- 脱离父级时可作为单个自包含的披露行独立使用。
:::

::: warning 注意事项
- 内容在展开后若发生变化，不会自动重新测量高度 —— 需重新触发一次切换以更新 max-height。
:::
