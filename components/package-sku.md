# 套餐可选组选择 DdPackageSku

> 套餐内容选择弹层：底部弹层按分组展示子项 chip，支持「N 选 M」多选、加价标注与售罄置灰，未选满时拦截确认，确认回调返回选项、加价合计与摘要文案。

## 介绍

DdPackageSku 用于欢唱套餐等「含可选组」商品的下单前选择（如「饮料 3 选 1」「小食最多选 2 项」）。`groups` 为通用分组形状（不绑定业务 DTO）：`groupType='FIXED'` 的固定组只读展示、不参与校验；`OPTIONAL` 组按 `minSel`/`maxSel` 约束多选，单选组（`maxSel=1`）点击未选中项直接替换已选项，标题区自动生成「3选1 / 选1~2项 / 最多选2项」提示。子项 `priceFen` 为加价（分），选中后以「+¥X」标注；`enabled=false` 或 `qty<=0` 自动置灰并显示「已售罄」角标。任一必选组未选满时确认按钮禁用并在底部红字提示差额；确认后弹层不自动关闭，由调用方通过 `ref.close()` 关闭。

传 `goodsInfo` 时头部展示套餐图、价格（底价 + 已选加价实时联动）、库存与已选项摘要；图块必有，缺图时以主题随机底色块 + 套餐名前 2 字占位。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view>
    <dd-button type="primary" @click="open">选择套餐内容</dd-button>
    <dd-package-sku ref="skuRef" :groups="groups" :goods-info="goodsInfo" @confirm="onConfirm" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const skuRef = ref()

// 缺图时头部以主题随机底色 + 名称前 2 字占位
const goodsInfo = { name: '欢唱酒水套餐', price: 299, stock: 12 }

const groups = [
  {
    id: 'g1',
    name: '欢唱时段（3 选 1）',
    minSel: 1,
    maxSel: 1,
    items: [
      { id: 's1', name: '中包 3 小时' },
      { id: 's2', name: '大包 2 小时', priceFen: 3000 },
      { id: 's3', name: '迷你包 4 小时' },
    ],
  },
  {
    id: 'g2',
    name: '小食加选（选 1~2 项）',
    minSel: 1,
    maxSel: 2,
    items: [
      { id: 's4', name: '果盘' },
      { id: 's5', name: '爆米花', priceFen: 1000 },
      { id: 's6', name: '卤味拼盘' },
    ],
  },
]

function open() {
  skuRef.value.open()
}
function onConfirm({ options, surchargeFen, selectedText }: any) {
  console.log(options, surchargeFen, selectedText)
  skuRef.value.close()
}
</script>
```

</DemoBlock>
:::

### 固定组只读

`groupType: 'FIXED'` 的分组仅展示套餐固定包含内容，chip 不可点、不计入选择校验；与可选组混排。

:::demo
<DemoBlock>

```vue
<template>
  <dd-package-sku :groups="groups" title="套餐内容确认" confirm-text="加入购物车" @confirm="onConfirm">
    <template #trigger>
      <dd-cell title="欢唱酒水套餐" value="点击查看包含内容" is-link />
    </template>
  </dd-package-sku>
</template>

<script setup lang="ts">
const groups = [
  {
    id: 'f1',
    name: '固定包含',
    groupType: 'FIXED',
    items: [{ id: 's7', name: '啤酒 12 瓶' }, { id: 's8', name: '果盘 1 份' }],
  },
  {
    id: 'g3',
    name: '饮料任选（最多 3 项）',
    maxSel: 3,
    items: [
      { id: 's9', name: '可乐' },
      { id: 's10', name: '雪碧' },
      { id: 's11', name: '苏打水' },
      { id: 's12', name: '鲜榨橙汁', priceFen: 1500 },
    ],
  },
]

function onConfirm({ options, surchargeFen }: any) {
  uni.showToast({ title: `已选 ${options.length} 项，加价 ${surchargeFen / 100} 元`, icon: 'none' })
}
</script>
```

</DemoBlock>
:::

### 售罄置灰

子项 `enabled: false` 或 `qty: 0`（台账余量）时自动置灰并显示「已售罄」角标，不可选择但不隐藏，便于感知品类。

:::demo
<DemoBlock>

```vue
<template>
  <dd-package-sku :groups="groups" @confirm="onConfirm">
    <template #trigger>
      <dd-button>含售罄项的套餐</dd-button>
    </template>
  </dd-package-sku>
</template>

<script setup lang="ts">
const groups = [
  {
    id: 'g4',
    name: '小吃（3 选 1）',
    minSel: 1,
    maxSel: 1,
    items: [
      { id: 's13', name: '薯条' },
      { id: 's14', name: '鸡米花', qty: 0 },
      { id: 's15', name: '洋葱圈', enabled: false },
    ],
  },
]

function onConfirm({ selectedText }: any) {
  uni.showToast({ title: `已选：${selectedText}`, icon: 'none' })
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| groups | 分组列表 `[{ id, name, minSel?, maxSel?, groupType?, items: [{ id, name, priceFen?, qty?, enabled? }] }]` | `PackageSkuGroup[]` | `[]` |
| goodsInfo | 头部展示信息：`image`/`picture` 主图、`name` 名称（缺图占位文字来源）、`price` 底价（元，随已选加价联动）、`stock`/`quantity` 库存；图块必有，缺图时以主题随机底色 + 名称前 2 字占位 | `Record<string, any>` | `{}` |
| title | 弹层标题 | `string` | `'选择套餐内容'` |
| confirmText | 确认按钮文字 | `string` | `'确定'` |
| closeable | 是否显示关闭弹窗按钮 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| open | 弹层打开时触发 | — |
| confirm | 选满必选组并点击确认时触发（弹层不自动关闭） | `{ options, surchargeFen, selectedText }` |
| close | 弹层关闭时触发 | — |

### Slots

| 插槽名 | 说明 |
|--------|------|
| trigger | 触发打开弹层的点击区域 |

### Methods

通过 `ref` 调用：

| 方法名 | 说明 |
|--------|------|
| open | 打开选择弹层 |
| close | 关闭选择弹层 |
| reset | 清空已选项 |

## 设计规范

::: tip 最佳实践
- `priceFen` 传「加价」（分），不是子项原价；确认回调的 `surchargeFen` 为已选子项加价合计，可直接并入行单价。
- `selectedText` 为已选子项名的顿号拼接，适合直接做购物车行/订单摘要展示。
- 下单成功后调用 `reset()`，避免下次打开残留旧选择。
:::

::: warning 注意事项
- 组内 `maxSel` 缺省取子项数、`minSel` 缺省 0；`FIXED` 组不传 `minSel/maxSel` 也不影响校验。
- 多选组达到 `maxSel` 后继续点击其他子项会 toast「最多选择 X 项」；单选组（`maxSel=1`）点击未选中项直接替换已选项，无需先取消。
- 确认仅在前端做「选满」拦截；服务端仍应以自身校验（如 min/max 范围 400）为权威。
:::
