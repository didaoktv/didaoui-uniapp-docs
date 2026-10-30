# 价格 DdPrice

> 价格展示：整数大字号 + 货币符/小数小字号的金额排版，颜色跟随上下文（inherit）。

## 介绍

DdPrice 用于金额展示（房卡价、券面额、合计金额等场景）：`rate` 直接传元（**不除以 100**），整数部分大字号、货币符与小数部分小字号，`prefix` / `suffix` 渲染前后附加文案（如「起」「/小时」）。`decimalLength` 控制小数位（`rate` 为 number 时生效，`0` 隐藏小数）；`mark` 自定义小数点符号。颜色默认 `inherit` 跟随上下文（在 `dd-submit-bar` 内自动呈红色价格语义，也可外层自行控制）；需要直接指定主色时传 `color`（如 `var(--dd-primary)`、`var(--dd-error)`），整数、货币符、小数会统一取该色。`size` 提供五档字号：`xxs`（紧凑行，如房态卡片 22rpx 正文旁）、`xs`（超小号商品卡/一行四列）、`sm`（购物车行/小号商品卡）、`md`（默认，常规列表）、`lg`（结算条/合计）。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <view class="demo-price-row">
    <dd-price :rate="3999" />
    <dd-price :rate="3999" class="demo-price-gold" />
    <dd-price :rate="3999" color="var(--dd-primary)" />
    <dd-price :rate="3999" size="sm" color="var(--dd-error)" />
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

### 尺寸

`size` 五档：`xxs`（整数 22rpx，紧凑行/房态卡片正文旁）、`xs`（整数 24rpx，超小号商品卡/一行四列）、`sm`（整数 30rpx，购物车行/小号商品卡）、`md` 默认（36rpx，常规列表）、`lg`（44rpx，结算条/合计）。

:::demo
<DemoBlock>

```vue
<template>
  <view class="demo-price-row">
    <dd-price :rate="88" size="xxs" suffix="/时" />
    <dd-price :rate="88" size="sm" />
    <dd-price :rate="88" />
    <dd-price :rate="88" size="lg" />
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
| prefixColor | 前缀颜色；不传跟随 `color`（`color` 也不传时保持次级灰） | `string` | `''` |
| suffixColor | 后缀颜色；不传跟随 `color`（`color` 也不传时保持次级灰） | `string` | `''` |
| size | 尺寸：xxs 紧凑行最小号（22rpx 正文旁）/ xs 最小号（一行四列小卡）/ sm 小号（购物车行/小卡）/ md 常规 / lg 大号（结算条/合计） | `'xxs' \| 'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| color | 主色（CSS 颜色/变量）：整数、货币符、小数、前后缀统一起色；不传则 `inherit`，货币符/小数/前后缀保持次级灰 | `string` | `''` |

::: warning 注意事项
- `rate` 语义为元：与 `dd-submit-bar` 的 `price`（分）不同，后者内部会除以 100 再交给本组件。
- `rate` 传 string 时按原样拆分展示（不做小数位补齐）。
- 组件颜色默认 `inherit`；要语义色优先传 `color`（如 `var(--dd-primary)`），也可在外层容器控制颜色。
:::
