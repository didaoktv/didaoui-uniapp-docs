# 购物车栏 DdCartBar

> 外卖式购物车提交栏：底部固定「入口圆钮 + 数量角标 + 合计价 + 结算按钮」，点入口弹出已选商品弹层。

## 介绍

DdCartBar 用于点单/点餐页底部（对标美团/饿了么购物车交互）：左上角购物车圆钮带数量角标（数量变化时角标弹跳），中间合计价（内部按 `items` 汇总，单位**分**自动转元），右侧结算按钮。点击圆钮弹出已选商品弹层（复用 DdPopup）：标题 + 清空（默认 `uni.showModal` 二次确认）+ 商品列表（图/名称/规格/单价/数量步进器）+ 提示条。数量减到 1 再减即移除该商品；弹层开着时底栏抬升到弹层之上仍可直接结算；减空/清空后弹层自动收起。

::: warning 注意事项
- `items` 为受控数据：组件不内部持有状态，数量增减/清空通过 `change` 事件回传**新数组**（count 减到 0 的项已剔除），由消费方替换 `items`。
- 空车时入口圆钮置灰且不可撑开弹层，结算按钮自动禁用（叠加 `disabled`）。
- `price` 单位为分（如 `990` 渲染为 `¥9.90`），合计 = Σ price × count。
- 清空确认默认开启（`clearConfirm`），关闭后点清空直接回传空数组并触发 `clear`。
- 弹层显隐走 `v-model`（`modelValue` / `update:modelValue`）；`open` / `close` 事件由内部 DdPopup 透传。
:::

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-cart-bar
    v-model="showCart"
    :items="items"
    :placeholder="true"
    @change="items = $event"
    @submit="onSubmit"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DdCartItem } from '@didaoktv/didaoui-uniapp'

const showCart = ref(false)
const items = ref<DdCartItem[]>([
  { id: 1, name: '科罗娜啤酒', image: '', price: 990, count: 2, specs: '冰镇' },
  { id: 2, name: '果盘拼盘', price: 5800, count: 1 },
])
function onSubmit() {
  console.log('submit', items.value)
}
</script>
```

</DemoBlock>
:::

### 凑单提示与优惠文案

:::demo
<DemoBlock>

```vue
<template>
  <dd-cart-bar
    v-model="showCart"
    :items="items"
    :placeholder="true"
    suffix-label="共减¥19"
    tips="温馨提示，请适量点餐"
    button-text="去结算"
    @change="items = $event"
    @submit="onSubmit"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DdCartItem } from '@didaoktv/didaoui-uniapp'

const showCart = ref(false)
const items = ref<DdCartItem[]>([
  { id: 1, name: '美味时刻独享3件套', image: '', price: 3600, count: 1, specs: '黑椒鸡块(默认)x1、中可乐(默认)x1' },
])
function onSubmit() {
  console.log('submit')
}
</script>
```

</DemoBlock>
:::

### 关闭清空二次确认 / 自定义按钮

:::demo
<DemoBlock>

```vue
<template>
  <dd-cart-bar
    v-model="showCart"
    :items="items"
    :placeholder="true"
    :clear-confirm="false"
    button-type="danger"
    button-text="立即下单"
    @change="items = $event"
    @clear="onClear"
  >
    <template #button>
      <dd-button round type="danger" @click="onSubmit">立即下单</dd-button>
    </template>
  </dd-cart-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DdCartItem } from '@didaoktv/didaoui-uniapp'

const showCart = ref(false)
const items = ref<DdCartItem[]>([
  { id: 1, name: '小食拼盘', price: 4600, count: 3 },
])
function onClear() {
  console.log('cleared')
}
function onSubmit() {
  console.log('submit')
}
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| items | 购物车条目（受控），增减/清空经 `change` 回传新数组 | `DdCartItem[]` | — |
| v-model / modelValue | 购物车弹层显隐 | `boolean` | `false` |
| label | 合计左侧文案 | `string` | `'合计：'` |
| suffixLabel | 合计右侧附加文案（如「共减¥19」） | `string` | `''` |
| tips | 弹层顶部提示条文案 | `string` | `''` |
| title | 弹层标题 | `string` | `'已选商品'` |
| clearText | 清空按钮文案 | `string` | `'清空购物车'` |
| clearConfirm | 清空前是否二次确认（uni.showModal） | `boolean` | `true` |
| currency | 货币符号 | `string` | `'¥'` |
| buttonText | 结算按钮文案 | `string` | `'结算'` |
| buttonType | 结算按钮类型（dd-button type） | `string` | `'primary'` |
| buttonColor | 结算按钮自定义背景色 | `string` | `''` |
| loading | 结算按钮加载态 | `boolean` | `false` |
| disabled | 禁用结算（不影响数量增减；空车自动禁用） | `boolean` | `false` |
| maxListHeight | 弹层商品列表最大高 | `string` | `'50vh'` |
| placeholder | 固定在底部时是否生成占位视图 | `boolean` | `false` |
| safeAreaInsetBottom | 是否预留底部安全区 | `boolean` | `true` |
| customStyle | 自定义样式 | `string \| object` | `''` |
| customClass | 自定义类名 | `string` | `''` |

### DdCartItem

| 字段 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| id | 唯一标识 | `string \| number` | — |
| name | 商品名 | `string` | — |
| image | 商品图（不传渲染占位图标） | `string` | `''` |
| price | 单价，单位：分 | `number` | — |
| count | 数量（减到 1 再减 = 移除该项） | `number` | — |
| specs | 已选规格/备注文案 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 弹层显隐变化 | `boolean` |
| open | 弹层打开 | — |
| close | 弹层关闭 | — |
| change | 数量增减/清空后的最新条目（减到 0 的项已剔除） | `DdCartItem[]` |
| clear | 清空（确认后）触发 | — |
| submit | 点击结算按钮（空车/disabled/loading 时不触发） | — |
| item-click | 点击弹层内商品行 | `DdCartItem` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 合计区左侧自定义内容 |
| button | 自定义结算按钮（整体替换默认 dd-button） |
