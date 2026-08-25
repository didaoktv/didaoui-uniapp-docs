# 优惠券 DdCoupon

> 优惠券组件：券（两侧打孔）/ 红包 / 卡片三种形状，暗色券面 + error 红面额，左金额 + 中信息 + 右操作按钮布局，支持内置渐变主题与自定义配色。

## 介绍

DdCoupon 用于"我的卡券"、下单可用券列表等场景，默认为设计系统暗色 elevated 券面（`$dd-bg-elevated`），面额采用 error 红。`shape="coupon"` 两侧打孔模拟实体券；`shape="envelope"` 黑金红包造型（顶部帝王金条纹）；`shape="card"` 简洁卡片。`type` 提供四套内置渐变主题（primary 帝王金 / success / warning / error，均为设计系统 `$dd-gradient-*` token），文字自动取各主题 contrast 色；也可用 `bgColor` / `color` 完全自定义。金额区、信息区、操作区均提供作用域插槽覆盖。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-coupon
    amount="50"
    limit="满 200 可用"
    title="包厢立减券"
    desc="周一至周日全时段可用"
    time="2026-09-30 前有效"
  />
</template>
```

</DemoBlock>
:::

### 红包与卡片形状 / 内置主题

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:24rpx">
    <dd-coupon shape="envelope" amount="88" unit="￥" title="开房红包" action-text="领取" />
    <dd-coupon shape="card" type="primary" amount="9.5" unit="折" title="会员折扣券" action-text="去使用" />
    <dd-coupon amount="20" title="已过期券" disabled />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| amount | 金额 | `string \| number` | `''` |
| unit | 金额单位 | `string` | `'￥'` |
| unitPosition | 单位位置，`left` / `right` | `'left' \| 'right'` | `'left'` |
| limit | 使用限制（如"满 200 可用"） | `string` | `''` |
| title | 标题 | `string` | `'优惠券'` |
| desc | 描述 | `string` | `''` |
| time | 有效期 | `string` | `''` |
| actionText | 操作按钮文字 | `string` | `'使用'` |
| shape | 形状，`coupon` 优惠券 / `envelope` 红包 / `card` 卡片 | `'coupon' \| 'envelope' \| 'card'` | `'coupon'` |
| size | 尺寸，`small` / `medium` / `large`（面额字号随档缩放） | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用（半透明且点击无效） | `boolean` | `false` |
| bgColor | 自定义背景色 | `string` | `''` |
| color | 自定义文字颜色 | `string` | `''` |
| type | 内置渐变主题，`primary` / `success` / `warning` / `error` | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击优惠券时触发（disabled 时不触发） | — |

### Slots

| 插槽名 | 说明 | 作用域参数 |
|--------|------|-----------|
| unit | 金额单位（按 unitPosition 只渲染一次） | `unit` / `unitPosition` |
| amount | 金额 | `amount` |
| limit | 使用限制 | `limit` |
| title | 标题 | `title` |
| desc | 描述 | `desc` |
| time | 有效期 | `time` |
| action | 操作按钮 | `actionText` |
| default | 额外追加内容 | — |

## 设计规范

::: tip 最佳实践
- 默认暗色券面适合券列表；主营销位用 `type` 渐变主题（primary 帝王金做 VIP 券、error 做抢购券）或 `shape="envelope"` 黑金红包。
- 面额醒目：金额大字号 + error 红，随 size 档位缩放；折扣券 `unit="折"` 放右侧（unitPosition="right"）。
- 已使用/已过期统一 `disabled` 置灰，保留布局避免列表跳动。
- 主题券文字自动取 contrast 色（primary/warning 深色字、success/error 白字），操作按钮随之切为对比色描边胶囊，无需手动配色。
:::

::: warning 注意事项
- `type` 主题与 `bgColor` 同时设置时，`bgColor` 生效（覆盖渐变）。
- 打孔造型的孔色取页面背景色 `$dd-bg`，请将券放在 `$dd-bg` 底色的页面上使用（放入浅一层容器会使孔色与背景不一致）。
- 金额区有 `min-width`，同一列表中不同面额的券分隔线保持对齐。
:::
