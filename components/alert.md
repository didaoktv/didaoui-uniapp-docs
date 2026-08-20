# 对话框 DdAlert

> 560rpx 居中实心卡片，112rpx 语义渐变图标圆，胶囊按钮（圆角 var(--radius-full)），点击遮罩默认不关闭，5 种语义类型。

## 介绍

DdAlert 是带语义图标的确认对话框，用于重要操作确认或状态提示。提供 info / success / warning / error / confirm 五种类型，每种对应一个渐变色图标圆与图标字形（i / ✓ / ! / ✕ / ?）。通过 `v-model` 控制显隐，`showCancel` 切换单/双按钮。为防止误操作，默认点击遮罩不关闭。卡片使用实心 elevated 背景（非毛玻璃），按钮为胶囊形态。

## 代码演示

### 确认对话框

`type="confirm"` 配合双按钮（默认显示取消），用于重要操作确认。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="danger" @click="show = true">删除</dd-button>
  <dd-alert
    v-model="show"
    type="confirm"
    title="确认删除？"
    message="删除后不可恢复，请谨慎操作"
    confirm-text="删除"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
function onConfirm() { console.log('确认') }
function onCancel() { console.log('取消') }
</script>
```

</DemoBlock>
:::

### 状态提示

`type="success"` 等状态类型，配合 `showCancel=false` 显示单按钮，用于结果提示。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">提交</dd-button>
  <dd-alert
    v-model="show"
    type="success"
    title="预订成功"
    message="请提前 15 分钟到店确认房台"
    :show-cancel="false"
    confirm-text="知道了"
  />
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
| modelValue | 是否显示（支持 v-model） | `boolean` | `false` |
| type | 语义类型 | `'info' \| 'success' \| 'warning' \| 'error' \| 'confirm'` | `'info'` |
| title | 标题 | `string` | `''` |
| message | 描述文案 | `string` | `''` |
| showCancel | 是否显示取消按钮 | `boolean` | `true` |
| confirmText | 确认按钮文案 | `string` | `'确定'` |
| cancelText | 取消按钮文案 | `string` | `'取消'` |
| closeOnClickModal | 点击遮罩是否关闭 | `boolean` | `false` |

type 对应图标：

| type | 图标 | 图标色 |
|------|------|------|
| info | i | accent 蓝 |
| success | ✓ | success 绿 |
| warning | ! | warning 黄 |
| error | ✕ | error 红 |
| confirm | ? | primary 金 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 显隐变化时触发 | `val: boolean` |
| confirm | 点击确认按钮时触发（触发后自动关闭） | 无 |
| cancel | 点击取消按钮时触发（触发后自动关闭） | 无 |

### Slots

无。

## 设计规范

::: tip 最佳实践
- 用于重要确认和提示。
- 标题保持简短。
- 仅提示信息用单按钮（showCancel=false）。
- 确认/取消用双按钮。
- 默认 confirmText '确定'，cancelText '取消'。
:::

::: warning 注意事项
- 不要堆叠多个 alert。
- 不要放复杂表单。
- 操作按钮不超过 2 个。
- 不要期待点击遮罩关闭（默认关闭，防误操作）。
:::
