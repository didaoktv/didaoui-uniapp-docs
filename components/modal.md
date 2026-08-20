# 模态框 DdModal

> 两种类型（dialog 居中 / bottom-sheet 底部），实心 elevated 背景无毛玻璃，dialog 内含金色关闭按钮，bottom-sheet 含拖拽把手 + 安全区适配。

## 介绍

DdModal 用于在屏幕中央或底部弹出内容层，覆盖在主内容之上。提供 `dialog`（居中对话框）和 `bottom-sheet`（底部上滑面板）两种类型，均使用实心 elevated 背景（非毛玻璃）。通过 `v-model` 控制显示，支持点击遮罩关闭、自定义 header/footer 插槽。bottom-sheet 自带拖拽把手与底部安全区适配，更适合移动端操作列表。

## 代码演示

### 基础用法（dialog）

`type="dialog"` 为默认类型，居中显示，`v-model` 控制显隐。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">打开对话框</dd-button>
  <dd-modal v-model="show" title="确认预订">
    <view>确定要预订该包房吗？</view>
    <template #footer>
      <view style="display:flex;gap:16rpx">
        <dd-button type="secondary" @click="show = false">取消</dd-button>
        <dd-button type="primary" @click="show = false">确定</dd-button>
      </view>
    </template>
  </dd-modal>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

</DemoBlock>
:::

### 底部面板（bottom-sheet）

`type="bottom-sheet"` 从底部上滑，自带拖拽把手与安全区适配，适合移动端操作列表。

:::demo
<DemoBlock>

```vue
<template>
  <dd-button type="primary" @click="show = true">打开底部面板</dd-button>
  <dd-modal v-model="show" type="bottom-sheet" title="选择支付方式">
    <view style="padding:24rpx 0">
      <dd-cell title="微信支付" value="推荐" />
      <dd-cell title="支付宝" />
      <dd-cell title="余额支付" value="¥ 128.00" />
    </view>
  </dd-modal>
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
| type | 类型：dialog 居中 / bottom-sheet 底部 | `'dialog' \| 'bottom-sheet'` | `'dialog'` |
| title | 标题（为空且无 header 插槽时不显示头部） | `string` | `''` |
| width | dialog 宽度（number 按 rpx 处理） | `string \| number` | `'600rpx'` |
| showClose | 是否显示关闭按钮（仅 dialog 类型） | `boolean` | `true` |
| closeOnClickModal | 点击遮罩是否关闭 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 显隐变化时触发 | `val: boolean` |
| close | 关闭时触发 | 无 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 主体内容 |
| header | 自定义头部（覆盖 title） |
| footer | 底部操作区 |

## 设计规范

::: tip 最佳实践
- 居中确认场景用 dialog。
- 移动端操作列表用 bottom-sheet。
- footer 插槽放置操作按钮。
- 通过 width 自定义 dialog 宽度（默认 600rpx）。
:::

::: warning 注意事项
- 不要用于复杂多步表单。
- 不要模态框上叠模态框。
- 不要期待毛玻璃效果——modal 使用实心 elevated 背景。
:::
