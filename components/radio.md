# 单选框 DdRadio

> 圆形（var(--radius-full)）区别于方形 checkbox；3rpx 边框；选中态外圈填充金色渐变 + 金色发光，白色内点通过 scale(0→1) + opacity(0→1) 弹性动画（cubic-bezier 0.34,1.56,0.64,1）弹出；通过 modelValue===value 比较；重复点击已选中项无效。

## 介绍

DdRadio 用于互斥单选场景，如包厢类型、套餐选项、支付方式等。选中时外圈填充金色渐变并伴随发光，内点通过弹性动画弹出。点击已选中项为空操作。`modelValue === value` 判定选中状态，组内多个 Radio 共享同一个 `modelValue` 即可实现单选。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-radio v-model="room" :value="'standard'" label="标准包厢（4-6人）" />
    <dd-radio v-model="room" :value="'mini'" label="小包厢（2-4人）" />
    <dd-radio v-model="room" :value="'vip'" label="VIP 包厢（8-10人）" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const room = ref('standard')
</script>
```

</DemoBlock>
:::

### 尺寸与禁用

`size="sm"` 用于紧凑列表；`disabled` 禁用交互。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:32rpx;align-items:center">
    <dd-radio v-model="v" value="a" size="sm" label="小尺寸" />
    <dd-radio v-model="v" value="b" disabled label="禁用" />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const v = ref('a')
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 当前选中值 | `any` | `null` |
| value | 该项的标识值 | `any` | `null` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 尺寸 | `'md' \| 'sm'` | `'md'` |
| label | 标签文字 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 选中变化时触发 | `val: any` |
| change | 选中变化时触发 | `val: any` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义标签内容（优先于 label prop） |

## 设计规范

::: tip 最佳实践
- 一组中只能选一项时使用。
- 相关选项视觉上分组并保持清晰间距。
- 必须搭配文字标签以提升可访问性。
- md 用于主要表单，sm 用于紧凑列表与筛选。
:::

::: warning 注意事项
- 多选场景请用 Checkbox。
- 开关式切换请用 Switch。
- 不要使用单个 Radio——至少提供两个选项。
:::
