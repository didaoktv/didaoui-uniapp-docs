# 复制 DdCopy

> 点击复制组件，点击任意包裹内容将 `content` 复制到剪贴板，支持 toast / modal 两种成功提示。

## 介绍

DdCopy 组件包裹一块可点击区域（默认插槽，缺省显示"复制"字样），点击后调用 `uni.setClipboardData` 复制 `content`；成功后按 `alertStyle` 弹 toast 或 modal，失败弹"复制失败"提示。`content` 为空时提示"无内容"。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-copy content="KTV-01|订单号 20260822001" />
</template>
```

</DemoBlock>
:::

### 自定义触发内容与提示方式

用插槽自定义触发区域；`alertStyle="modal"` 用对话框提示。

:::demo
<DemoBlock>

```vue
<template>
  <dd-copy content="13812345678" alertStyle="modal" notice="客服电话已复制">
    <dd-cell title="联系客服" value="138-1234-5678" isLink />
  </dd-copy>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| content | 要复制的内容 | `string` | `''` |
| alertStyle | 复制成功的提示方式，可选值 `toast` / `modal` | `string` | `'toast'` |
| notice | 复制成功的提示文字 | `string` | `'复制成功'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| success | 复制成功时触发 | — |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 触发复制的点击区域，缺省显示"复制"文字 |

## 设计规范

::: tip 最佳实践
- 用于订单号、房台码、会员码等需要复制给他人/客服的内容。
- 与 `dd-cell` 组合时把 cell 放进插槽，整行可点击复制。
:::

::: warning 注意事项
- `content` 为空时不执行复制，仅提示"无内容"。
- `notice` 在 `alertStyle="toast"` 时受微信 toast 字数限制，控制在 7 个汉字内。
:::
