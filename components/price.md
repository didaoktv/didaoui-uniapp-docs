# 价格 DdPrice

> 价格展示：整数大字号 + 货币符/小数小字号的金额排版，颜色跟随上下文（inherit）。

## 介绍

DdPrice 用于金额展示（房卡价、券面额、合计金额等场景）：`rate` 直接传元（**不除以 100**），整数部分大字号、货币符与小数部分小字号，`prefix` / `suffix` 渲染前后附加文案（如「起」「/小时」）。`decimalLength` 控制小数位（`rate` 为 number 时生效，`0` 隐藏小数）；`mark` 自定义小数点符号。颜色默认 `inherit` 跟随上下文（在 `dd-submit-bar` 内自动呈红色价格语义，也可外层自行控制）。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view class="demo-price-row">
    <dd-price :rate="3999" />
    <dd-price :rate="3999" class="demo-price-gold" />
    <dd-price :rate="12.5" suffix="起" />
  </view>
</template>
```

</DemoBlock>
:::

### 小数位数与前后缀

:::demo
<DemoBlock>

```vue
<template>
  <view class="demo-price-col">
    <dd-price :rate="199" :decimal-length="0" />
    <dd-price :rate="12.5" prefix="会员价" suffix="/小时" class="demo-price-gold" />
    <dd-price rate="88.8" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| rate | 金额（元，直接展示，不除以 100）；不传不渲染 | `number \| string` | — |
| decimalLength | 小数位数（`rate` 为 number 时生效，0 隐藏小数） | `string \| number` | `2` |
| currency | 货币符号 | `string` | `'¥'` |
| mark | 整数/小数分隔符 | `string` | `'.'` |
| prefix | 额外前缀文案（货币符之前） | `string` | `''` |
| suffix | 额外后缀文案（如「起」） | `string` | `''` |

::: warning 注意事项
- `rate` 语义为元：与 `dd-submit-bar` 的 `price`（分）不同，后者内部会除以 100 再交给本组件。
- `rate` 传 string 时按原样拆分展示（不做小数位补齐）。
- 组件颜色 `inherit`，需要语义色时在外层容器控制（如提交订单栏中的红色价格）。
:::
