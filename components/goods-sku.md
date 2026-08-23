# 商品规格选择 DdGoodsSku

> 商品规格（SKU）选择面板：底部弹层展示商品图、价格、库存、规格树与购买数量，自动禁用无效规格组合，确认时回调完整 SKU 信息。

## 介绍

DdGoodsSku 用于商城下单前的规格选择（酒水套餐、果盘规格等）。`goodsInfo` 提供商品基础信息（image/picture、price/price_fee、stock/quantity）；`skuTree` 定义规格维度（如"规格/数量"），`skuList` 为每个有效组合的记录（含各维度取值 + price + stock）。组件按已选维度实时计算无效组合并置灰；头部价格/库存随选择联动；数量步进器上限取库存与 `maxBuy` 的较小值。选满全部维度后确认按钮才可用。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="open">选规格购买</dd-button>
    <dd-goods-sku
      ref="skuRef"
      :goods-info="goodsInfo"
      :sku-tree="skuTree"
      :sku-list="skuList"
      @confirm="onConfirm"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const skuRef = ref()

const goodsInfo = { image: 'https://img.didaoktv.com/goods/beer.jpg', price: 128, stock: 30 }
const skuTree = [
  { name: 'capacity', label: '容量', children: [{ id: 'S', name: '小扎' }, { id: 'L', name: '大扎' }] },
  { name: 'temp', label: '冰度', children: [{ id: 'ICE', name: '冰镇' }, { id: 'NORMAL', name: '常温' }] },
]
const skuList = [
  { capacity: 'S', temp: 'ICE', price: 128, stock: 10 },
  { capacity: 'L', temp: 'ICE', price: 168, stock: 8 },
  { capacity: 'S', temp: 'NORMAL', price: 118, stock: 12 },
]

function open() {
  skuRef.value.open()
}
function onConfirm({ sku, goodsInfo, num, selectedText }: any) {
  console.log(sku, num, selectedText)
}
</script>
```

</DemoBlock>
:::

### 自定义触发区与头部

`trigger` 插槽点击即打开弹窗；`header` 插槽完全自定义头部。

:::demo
<DemoBlock>

```vue
<template>
  <dd-goods-sku :goods-info="goodsInfo" :sku-tree="skuTree" :sku-list="skuList" :max-buy="5" @confirm="onConfirm">
    <template #trigger>
      <dd-cell title="选择规格" value="小扎 / 冰镇" isLink />
    </template>
  </dd-goods-sku>
</template>

<script setup lang="ts">
const goodsInfo = { image: 'https://img.didaoktv.com/goods/fruit.jpg', price: 58, stock: 20 }
const skuTree = [
  { name: 'size', label: '份量', children: [{ id: 'HALF', name: '半份' }, { id: 'FULL', name: '全份' }] },
]
const skuList = [
  { size: 'HALF', price: 38, stock: 15 },
  { size: 'FULL', price: 58, stock: 20 },
]
function onConfirm(payload: any) {
  console.log(payload)
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| goodsInfo | 商品信息（image/picture、price/price_fee、stock/quantity） | `Record<string, any>` | `{}` |
| skuTree | SKU 规格树：`[{ name, label, children: [{ id, name }] }]` | `SkuTreeItem[]` | `[]` |
| skuList | SKU 组合列表，每项含各维度字段值 + price + stock | `Record<string, any>[]` | `[]` |
| maxBuy | 最大购买数量 | `number` | `999` |
| confirmText | 确认按钮文字 | `string` | `'确定'` |
| closeable | 是否显示关闭弹窗按钮 | `boolean` | `true` |
| pageInline | 页面内联模式（隐藏关闭按钮并去掉内边距，仍以弹窗呈现） | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| open | 弹窗打开时触发 | — |
| confirm | 选满规格并点击确认时触发 | `{ sku, goodsInfo, num, selectedText }` |
| close | 弹窗关闭时触发 | — |

### Slots

| 插槽名 | 说明 |
|--------|------|
| trigger | 触发打开弹窗的点击区域 |
| header | 自定义弹窗头部（默认为商品图 + 价格 + 库存 + 已选规格） |

### Methods

通过 `ref` 调用：

| 方法名 | 说明 |
|--------|------|
| open | 打开规格弹窗 |
| close | 关闭规格弹窗 |
| reset | 清空已选规格并重置数量为 1 |

## 设计规范

::: tip 最佳实践
- `skuTree` 的 `name` 需与 `skuList` 中对应维度字段名一致，组件据此匹配组合。
- 库存紧张的规格组合会被自动置灰，无需调用方预处理。
- 下单后调用 `reset()` 清空选择，避免下次打开残留旧规格。
:::

::: warning 注意事项
- 确认回调中的 `sku` 为 `skuList` 中匹配到的完整记录；未选满维度时按钮禁用、不会回调。
- `maxBuy` 与实时库存取较小值作为步进器上限。
- 商品图请传可访问的绝对路径。
:::
