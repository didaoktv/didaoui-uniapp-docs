# 对话框 DdDialog

> 无 Teleport（小程序兼容）——页面级 fixed 居中，双 Transition 实现遮罩淡入 + 卡片缩放；round-button 主题用堆叠金色填充胶囊替代分隔线按钮。

## 介绍

DdDialog 是轻量确认对话框，通过 `v-model` 控制显隐，`title` / `message` 配置内容。提供 default（分隔线按钮）与 round-button（堆叠胶囊按钮）两种主题。为兼容小程序，未使用 Teleport，采用页面级 fixed 定位居中。默认仅显示确认按钮，可开启取消按钮形成双按钮组合。当不传 `message` 时，body 区域渲染 default 插槽，支持自定义内容。

## 代码演示

### 基础用法

默认 `theme="default"`，单确认按钮，`message` 配置文案。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">打开</dd-button>
  <dd-dialog
    v-model="show"
    title="预订成功"
    message="请提前 15 分钟到店确认房台"
  />
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

</DemoBlock>
:::

### 双按钮确认

开启 `showCancelButton`，配合 confirm/cancel 事件。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="danger" @click="show = true">取消预订</dd-button>
  <dd-dialog
    v-model="show"
    title="提示"
    message="确认取消该预订吗？"
    show-cancel-button
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

### 圆角按钮主题

`theme="round-button"` 将底部按钮切换为堆叠胶囊，确认按钮为金色填充，适合升级提示等强 CTA 场景。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">升级提示</dd-button>
  <dd-dialog
    v-model="show"
    title="升级包房"
    message="是否升级为 VIP 包房？"
    theme="round-button"
    show-cancel-button
    confirm-button-text="升级"
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
| title | 标题（为空时不显示头部） | `string` | `''` |
| message | 文案（为空时渲染 default 插槽） | `string` | `''` |
| theme | 主题：default 分隔线按钮 / round-button 胶囊按钮 | `'default' \| 'round-button'` | `'default'` |
| showConfirmButton | 是否显示确认按钮 | `boolean` | `true` |
| showCancelButton | 是否显示取消按钮 | `boolean` | `false` |
| confirmButtonText | 确认按钮文案 | `string` | `'确认'` |
| cancelButtonText | 取消按钮文案 | `string` | `'取消'` |
| confirmColor | 确认按钮颜色（default 主题为文字色，round-button 为背景色） | `string` | `''` |
| cancelColor | 取消按钮文字色（default 主题） | `string` | `''` |
| width | 卡片宽度（number 按 rpx 处理） | `string \| number` | `'640rpx'` |
| closeOnClickOverlay | 点击遮罩是否关闭（触发 cancel） | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 显隐变化时触发 | `val: boolean` |
| confirm | 点击确认按钮时触发（触发后自动关闭） | 无 |
| cancel | 点击取消按钮 / 点击遮罩关闭时触发 | 无 |
| close | 关闭时触发 | 无 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义 body 内容（message 为空时渲染） |

## 设计规范

::: tip 最佳实践
- 强 CTA 场景（如升级提示）使用 round-button 主题。
- 必须确认的场景设置 `closeOnClickOverlay=false`。
- 不传 message 时用 default 插槽自定义内容。
:::

::: warning 注意事项
- 不要使用 Teleport（与小程序不兼容，组件已用页面级 fixed 定位替代）。
- 不要期待 Esc 关闭（未实现键盘交互）。
:::
