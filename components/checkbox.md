# 复选框 DdCheckbox

> 方形方框配 var(--radius-sm)（2px）圆角与 3rpx 边框；选中填充金色渐变 + ✓ 字形 + 金色发光；indeterminate 用金色淡背景 + 60% 宽金色横线；同时支持 boolean 与 array modelValue（通过 value prop 实现组多选）；disabled 降至 opacity 0.4。

## 介绍

DdCheckbox 用于多选场景，如歌曲批量选择、筛选项、协议同意等。`modelValue` 既可以是 boolean（单选切换），也可以是数组（配合 `value` 实现组多选，自动增删数组项）。`indeterminate` 用于父级勾选框的半选状态，显示为金色横线。选中态以金色渐变填充并伴随发光与 ✓ 字形。

## 代码演示

### 基础用法（布尔模式）

:::demo
<DemoBlock>

```vue
<template>
  <dd-checkbox v-model="checked" label="接受服务条款" />
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(false)
</script>
```

</DemoBlock>
:::

### 组多选（数组模式）

`modelValue` 为数组时，通过 `value` 标识每个选项。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-checkbox v-model="picked" :value="'华语'" label="华语" />
    <dd-checkbox v-model="picked" :value="'粤语'" label="粤语" />
    <dd-checkbox v-model="picked" :value="'英语'" label="英语" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const picked = ref(['华语'])
</script>
```

</DemoBlock>
:::

### 半选与禁用

`indeterminate` 表示部分子项被选；`disabled` 禁用交互。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:32rpx;align-items:center">
    <dd-checkbox :model-value="true" indeterminate label="全选歌曲" />
    <dd-checkbox :model-value="true" disabled label="禁用" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 选中状态，boolean 单选或 array 多选 | `boolean \| any[]` | `false` |
| value | 数组多选模式下该项的标识值 | `any` | `null` |
| indeterminate | 是否半选状态（显示横线） | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 尺寸 | `'md' \| 'sm'` | `'md'` |
| label | 标签文字 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 状态变化时触发 | `val: boolean \| any[]` |
| change | 状态变化时触发 | `val: boolean \| any[]` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义标签内容（优先于 label prop） |

## 设计规范

::: tip 最佳实践
- 多选场景使用数组 modelValue + value prop。
- 父级勾选框使用 indeterminate 表示部分子项已选。
- 搭配描述动作的文字标签。
- md 用于主要表单，sm 用于密集列表与筛选。
:::

::: warning 注意事项
- 单选场景请用 Radio。
- 即时生效的开关请用 Switch。
- 水平排列时缺乏清晰分组会增加误操作。
:::
