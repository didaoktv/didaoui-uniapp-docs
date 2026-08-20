# 开关 DdSwitch

> 两档尺寸（md 48×28px / sm 38×22px）胶囊开关；关闭态轨道为 var(--bg-inset) 配玻璃边框 + 内阴影，开启态为金色渐变 + 金色发光；白色圆形滑块以 left 偏移滑动；disabled 降至 opacity 0.4。

## 介绍

DdSwitch 用于即时生效的二值开关，常见于麦克风效果、灯光模式、功能开关等设置项。开启时轨道呈金色渐变并伴随发光，滑块滑向右侧；关闭时为内凹中性轨道。点击轨道任意位置即可切换，disabled 状态整体半透明并禁止交互。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-switch v-model="checked" />
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>
```

</DemoBlock>
:::

### 尺寸与禁用

`size="sm"` 用于密集设置面板；`disabled` 禁用切换。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;gap:32rpx;align-items:center">
    <dd-switch v-model="a" size="md" />
    <dd-switch v-model="b" size="sm" />
    <dd-switch v-model="c" disabled />
  </view>
</template>

<script setup>
import { ref } from 'vue'
const a = ref(true)
const b = ref(false)
const c = ref(true)
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue (v-model) | 开关状态 | `boolean` | `false` |
| size | 尺寸 | `'md' \| 'sm'` | `'md'` |
| disabled | 是否禁用 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 状态变化时触发 | `val: boolean` |
| change | 状态变化时触发 | `val: boolean` |

## 设计规范

::: tip 最佳实践
- 用于即时生效的二值设置项。
- 搭配描述动作的文字标签使用。
- md 用于主要设置，sm 用于密集面板。
:::

::: warning 注意事项
- 表单提交类触发请用 Button。
- 需要用户确认的更改请用 Checkbox + 提交。
- 多个开关并列时保持间距。
:::
