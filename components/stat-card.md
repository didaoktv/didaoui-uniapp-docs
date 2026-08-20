# 状态统计卡 DdStatCard

> 六变体渐变统计卡（primary/accent/success/warning/error/neutral），大号数值 + 可选趋势（↑/↓%）+ 底部插槽，点击触发 click。

## 介绍

DdStatCard 用于 KPI 仪表盘与状态概览，以大号白色数字承载核心指标。六种渐变变体支持语义编码（primary=金色、accent=蓝色等），`trend` 配合 `trendValue` 展示涨跌趋势，`footer` 插槽提供对比上下文。点击有缩放反馈并触发事件。

## 代码演示

### 基础用法

`title` 为标签，`value` 为大号数值，`variant` 选择渐变。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:grid;grid-template-columns:repeat(2,1fr);gap:16rpx">
    <dd-stat-card title="今日营收" value="12,580" prefix="¥" variant="primary" trend="up" trend-value="5%" />
    <dd-stat-card title="新增会员" value="86" variant="accent" trend="up" trend-value="12%" />
  </view>
</template>
```

</DemoBlock>
:::

### 趋势与底部插槽

`trend="down"` 显示下行箭头；`footer` 插槽提供对比信息。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:grid;grid-template-columns:repeat(2,1fr);gap:16rpx">
    <dd-stat-card title="退房数" value="42" variant="neutral" trend="down" trend-value="3%">
      <template #footer>对比昨日 -3%</template>
    </dd-stat-card>
    <dd-stat-card title="开房率" value="78" prefix="%" variant="success" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 渐变变体 | `'primary' \| 'success' \| 'warning' \| 'error' \| 'accent' \| 'neutral'` | `'primary'` |
| trend | 趋势方向 | `'none' \| 'up' \| 'down'` | `'none'` |
| title | 标签文字 | `string` | `''` |
| value | 主数值 | `string \| number` | `''` |
| prefix | 数值前缀（如 ¥、%） | `string` | `''` |
| trendValue | 趋势数值文本（如 5%） | `string` | `''` |
| hoverable | 是否启用按压反馈 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击卡片时触发 | `event: Event` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 数值下方的附加内容 |
| footer | 底部内容（带顶部分割线） |

## 设计规范

::: tip 最佳实践
- 用于 KPI 仪表盘时配合横向滚动或换行布局。
- 大号数值搭配简短标签。
- 使用语义变体进行分类编码（primary=金色、accent=蓝色等）。
- 有数据时展示趋势百分比，通过 `footer` 插槽提供对比上下文。
:::

::: warning 注意事项
- 移动端单行不要超过 4 张。
- 不要无语义地混用变体颜色。
- 不要缺少明确的 value。
:::
