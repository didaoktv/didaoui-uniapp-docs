# 账单明细 DdBillDetail

> 账单明细组件，按「商品项 / 小计 / 合计」结构呈现订单明细，带支付状态标签与操作按钮插槽，供 C 端 `order/bill` 与店员端 `room-bill` 复用。

## 介绍

DdBillDetail 提供账单/订单的明细化展示：头部（标题/header 插槽）、商品清单（名称 / 单价 / 数量 / 金额）、小计与合计（可选含服务费），并内置支付状态标签（待支付 / 已支付 / 退款中 / 已退款 / 已取消）。操作区通过 `actions` 插槽自由放置「去支付」「开票」「打印」等按钮。

## 代码演示

### 基础账单

:::demo
<DemoBlock>

```vue
<template>
  <dd-bill-detail
    header="金卡包厢 · ¥288/时"
    :items="items"
    subtotal="¥288.00"
    :total="total"
    status="unpaid"
  >
    <template #actions>
      <dd-button type="primary" size="small">去支付</dd-button>
    </template>
  </dd-bill-detail>
</template>

<script setup lang="ts">
const items = [
  { name: '豪华大包（2小时）', price: '¥144', count: 2, amount: '¥288.00' },
  { name: '果盘', price: '¥88', count: 1, amount: '¥88.00' },
  { name: '饮料（雪碧）', price: '¥15', count: 4, amount: '¥60.00' },
]
</script>
```

</DemoBlock>
:::

> 完整可交互演示：运行 `npm run dev:h5`（端口 5274）后访问账单明细页。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| items | 商品清单（必填，可空数组） | `BillItem[]` | `[]` |
| total | 合计金额（如 `'¥436.00'`） | `string` | `''` |
| subtotal | 小计金额 | `string` | `''` |
| deliveryFee | 服务费/附加费 | `string` | `''` |
| status | 支付状态 | `'unpaid' \| 'paid' \| 'refunding' \| 'refunded' \| 'cancelled'` | 无 |
| header | 头部标题（不传则用 `header` 插槽） | `string` | `''` |

`BillItem` 结构：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | `string` | 是 | 商品名称 |
| price | `string` | 否 | 单价（显示为 `¥xx`） |
| count | `number` | 否 | 数量（显示为 ×N） |
| amount | `string` | 是 | 行金额 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击某商品行时触发 | `{ item: BillItem, index: number }` |

### Slots

| 名称 | 说明 |
|------|------|
| header | 自定义头部内容（优先于 `header` prop） |
| actions | 底部操作按钮区（如去支付/开票/打印） |

## 设计规范

::: tip 最佳实践
- C 端 `order/bill` 与店员端 `room-bill` 同用本组件，保证账单口径跨端一致。
- `status` 使用内置语义状态，勿自定义颜色标签。
- 操作按钮放 `actions` 插槽，避免散落在页面其它位置。
:::

::: warning 注意事项
- 金额一律以字符串 `'¥xx.xx'` 传入并保留两位小数，展示层不做计算，避免浮点误差。
- 无数据时传入空数组即可展示空清单，勿渲染隐藏的占位元素。
:::