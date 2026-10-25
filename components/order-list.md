# 订单列表 DdOrderList

> 外卖平台式订单卡片列表：卡片最左侧为垂直居中的多选圈；内容区三行——第一行「订单号 + 收款状态」、第二行「商品卡横向滚动 + 右侧总价与件数（渐变蒙版）」、第三行「账单信息」与「时间」同排左右分列。点卡片切换选中。

## 介绍

DdOrderList 用于收银/结算页的待处理订单列表（对标美团/饿了么订单卡）：每笔订单一张卡片，选择器独立放在卡片最左侧并垂直居中（`checkable` 打开时点卡片即切换选中并通过 `update:selected` 回传 id 数组，选中态为主色描边 + 实心圈），右侧内容列三行——① 订单号 + 收款状态；② 商品区用 DdGoodsCard（`layout="vertical"` + `size="xs"`）渲染可横向滚动的缩略图行（单行不换行），最右侧固定一块与商品卡等高的总价区（dd-price 渲染，单位**分** + 「共 N 件」），其左侧为渐变蒙版，卡片可从蒙版下方滑过；③ 账单信息（`remark` 承载账单号/备注等文案）与时间（`timeText`，纯展示）同排左右分列。适合「多选订单合并收款」场景。

::: warning 注意事项
- `selected` 为受控数组（v-model:selected）：组件不内部持有状态，全选/清空由消费方操作数组。
- 金额单位为分（`priceFen: 1980` 渲染为 `¥19.80`），与全库一致；单行价格在商品卡内展示（价格在左、数量在右，价格用 dd-price 最小档）。
- `orders.length === 0` 时渲染 `empty` 插槽（可放 DdEmptyState），组件自身不渲染空态样式。
- `timeText` 是纯展示文案，时间格式由消费方决定。
- 总价区为绝对定位蒙版，横向滑动不被拦截；商品卡数量少于一行时不会出现滚动。
:::

## 代码演示

### 基础用法（多选）

:::demo
<DemoBlock>

```vue
<template>
  <dd-order-list v-model:selected="selected" :orders="orders" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DdOrderItem } from '@didaoktv/didaoui-uniapp'

const orders: DdOrderItem[] = [
  {
    id: '1001',
    title: '点单 #1001',
    statusText: '待收款',
    timeText: '2026-10-24 23:24',
    totalFen: 7780,
    lines: [
      { id: 1, name: '科罗娜啤酒', qty: 2, priceFen: 3960, thumb: 'https://dummyimage.com/200x200/f5a623/0a0a0a&text=啤酒' },
      { id: 2, name: '果盘拼盘', qty: 1, priceFen: 5800, thumb: 'https://dummyimage.com/200x200/4caf50/ffffff&text=果盘' },
      { id: 3, name: '香辣鸡腿堡', qty: 1, priceFen: 2300, thumb: 'https://dummyimage.com/200x200/e53935/ffffff&text=鸡腿堡' },
      { id: 4, name: '黄金薯条', qty: 2, priceFen: 1600, thumb: 'https://dummyimage.com/200x200/ff9800/ffffff&text=薯条' },
    ],
    remark: '账单 #B20261024001 · 少冰',
  },
  {
    id: '1002',
    title: '点单 #1002',
    statusText: '待收款',
    timeText: '2026-10-24 23:58',
    totalFen: 3600,
    lines: [{ id: 3, name: '美味时刻独享3件套', qty: 1, priceFen: 3600 }],
  },
]
const selected = ref<(string | number)[]>(orders.map((o) => o.id))
</script>
```

</DemoBlock>
:::

### 关闭多选（纯展示）

:::demo
<DemoBlock>

```vue
<template>
  <dd-order-list :orders="orders" :checkable="false" @item-click="onClick" />
</template>

<script setup lang="ts">
import type { DdOrderItem } from '@didaoktv/didaoui-uniapp'

const orders: DdOrderItem[] = [
  {
    id: '2001',
    title: '点单 #2001',
    statusText: '已收款',
    timeText: '2026-10-24 21:10',
    totalFen: 5800,
    lines: [{ id: 1, name: '果盘拼盘', qty: 1, priceFen: 5800 }],
  },
]
function onClick(item: DdOrderItem) {
  console.log('item-click', item.id)
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| orders | 订单列表（受控数据） | `DdOrderItem[]` | — |
| v-model:selected / selected | 已选订单 id 集合（`checkable` 时生效） | `(string \| number)[]` | `[]` |
| checkable | 是否显示多选（点卡片切换选中） | `boolean` | `true` |
| customStyle | 自定义样式 | `string \| object` | `''` |
| customClass | 自定义类名 | `string` | `''` |

### DdOrderItem

| 字段 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| id | 唯一标识 | `string \| number` | — |
| title | 订单号文案（第一行左侧） | `string` | — |
| statusText | 收款状态文案（第一行右侧，如「待收款」，不传不渲染） | `string` | `''` |
| lines | 商品行（第二行渲染为一行四列缩略图） | `DdOrderLine[]` | — |
| totalFen | 合计，单位：分 | `number` | — |
| timeText | 时间文案（第四行，纯展示） | `string` | `''` |
| remark | 账单信息文案（第三行，如「账单 #B001 · 少冰」，不传不渲染） | `string` | `''` |

### DdOrderLine

| 字段 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| id | 唯一标识 | `string \| number` | — |
| name | 品项名（商品卡标题） | `string` | — |
| qty | 数量（>1 时商品卡标「×N」，合计件数据此累加） | `number` | — |
| priceFen | 商品卡价格，单位：分（数量在左、价格在右展示） | `number` | — |
| thumb | 商品图（不传则商品卡渲染主题底色 + 名称前 2 字占位） | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:selected | 选中集合变化（点卡片切换后回传新数组） | `(string \| number)[]` |
| item-click | 点击订单卡片（checkable 关闭时也可监听跳转） | `DdOrderItem` |

### Slots

| 名称 | 说明 |
|------|------|
| empty | 订单为空时的自定义内容（通常放 DdEmptyState） |
