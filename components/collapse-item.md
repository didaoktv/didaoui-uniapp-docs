# 折叠面板项 DdCollapseItem

> 通过 uni.createSelectorQuery 测量真实内容高度驱动 max-height 过渡；可脱离父级独立使用（本地回退），也可由 dd-collapse 上下文控制。

## 介绍

DdCollapseItem 是折叠面板的内容项，由标题区（title + value + 箭头）与内容区（max-height 过渡）组成。展开时箭头旋转 180°，内容高度通过节点查询动态测量以保证过渡自然。未注入父级 `dd-collapse` 时也可作为独立的单个披露行使用。

## 代码演示

### 基础用法

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

### 禁用与无分割线

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

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| name | 项的唯一标识，用于父级 v-model 跟踪 | `string \| number` | `''` |
| title | 标题文字 | `string` | `''` |
| value | 标题右侧的辅助文字 | `string` | `''` |
| disabled | 是否禁用（降低透明度并阻止切换） | `boolean` | `false` |
| border | 是否显示底部分割线 | `boolean` | `true` |

### Events

无独立事件 —— 切换逻辑由父级 `dd-collapse` 上下文统一处理；独立使用时仅维护内部状态。

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题内容（优先于 title prop） |
| default | 折叠展开后的主体内容 |

## 设计规范

::: tip 最佳实践
- 在 `dd-collapse` 内为每一项提供唯一的 `name`，以便 v-model 准确跟踪展开状态。
- 脱离父级时可作为单个自包含的披露行独立使用。
:::

::: warning 注意事项
- 内容在展开后若发生变化，不会自动重新测量高度 —— 需重新触发一次切换以更新 max-height。
:::
