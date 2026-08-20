# 下拉菜单项 DdDropdownItem

> 自测量的触发器+面板组合，依赖注入的菜单上下文完成开关协调；箭头三角与内容 translateY 实现滑动动画，无需 JS 计算高度。

## 介绍

DdDropdownItem 是下拉菜单的子项，在菜单栏中渲染触发器（标题 + 箭头），展开后渲染选项面板。通过 inject 获取父级 `dd-dropdown-menu` 上下文，完成注册、开关与单开协调。选中项会高亮并触发 `v-model` 更新。

## 代码演示

### 基础用法

必须放置在 `dd-dropdown-menu` 内，通过 `options` 提供选项，`v-model` 绑定选中值。

:::demo
<DemoBlock>

```vue
<template>
  <dd-dropdown-menu>
    <dd-dropdown-item
      v-model="roomType"
      title="包房类型"
      :options="options"
    />
  </dd-dropdown-menu>
</template>

<script setup>
import { ref } from 'vue'
const roomType = ref('mid')
const options = [
  { text: '大包', value: 'big' },
  { text: '中包', value: 'mid' },
  { text: '小包', value: 'small' },
]
</script>
```

</DemoBlock>
:::

### 带图标的选项

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

## API

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

### Slots

无插槽 —— 选项由 `options` 驱动渲染。

## 设计规范

::: tip 最佳实践
- 必须放置在 `dd-dropdown-menu` 内使用，由其提供开关上下文。
- 通过 `options` 提供 text + value 以驱动 v-model 选中。
:::

::: warning 注意事项
- 不要脱离 `dd-dropdown-menu` 单独使用 —— 上下文注入会返回 null，toggle 不生效。
:::
