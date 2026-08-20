# 冠军排行卡 DdChampionCard

> 三变体（podium/horizontal/list）排行卡，使用字面量金银铜配色；podium 头像按排名缩放，rank1 带弹跳皇冠；排名徽标为渐变圆形。

## 介绍

DdChampionCard 用于业绩排行榜与销售冠军展示。podium 变体以居中列布局承载 TOP3，头像尺寸按排名递减（金/银/铜），rank1 附带弹跳皇冠动画；horizontal 与 list 变体适合第 4 名及之后的行式排名。排名徽标采用金/银/铜渐变圆形。

## 代码演示

### 领奖台 TOP3

`variant="podium"` 配合 `rank` 1/2/3 展示冠亚季军。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;align-items:flex-end;justify-content:center;gap:16rpx">
    <dd-champion-card variant="podium" :rank="2" name="李四" :score="8500" />
    <dd-champion-card variant="podium" :rank="1" name="张三" :score="9800" />
    <dd-champion-card variant="podium" :rank="3" name="王五" :score="7200" />
  </view>
</template>
```

</DemoBlock>
:::

### 横向排行卡

`variant="horizontal"` 适合第 4 名及之后的行式排名。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-champion-card variant="horizontal" :rank="4" name="赵六" :score="6500" />
    <dd-champion-card variant="horizontal" :rank="5" name="孙七" :score="5800" />
  </view>
</template>
```

</DemoBlock>
:::

### 列表排行

`variant="list"` 为无边框行，适合长榜单，分数右对齐。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column">
    <dd-champion-card variant="list" :rank="6" name="周八" :score="5200" />
    <dd-champion-card variant="list" :rank="7" name="吴九" :score="4900" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 布局变体 | `'podium' \| 'horizontal' \| 'list'` | `'podium'` |
| rank | 排名（1/2/3 触发金银铜配色） | `number` | `1` |
| name | 名称（无头像时取首字大写作为占位） | `string` | `''` |
| score | 分数 | `string \| number` | `''` |
| avatar | 头像地址（可选，优先于首字占位） | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击卡片时触发 | `{ rank: number }` |

### Slots

无插槽 —— 内容由 props 驱动渲染。

## 设计规范

::: tip 最佳实践
- TOP3 使用 podium 变体，配合金/银/铜（#FFD700/#C0C0C0/#CD7F32）配色。
- 仅 rank1 显示皇冠。
- 第 4 名及之后使用 horizontal 或 list 变体。
- 保持头像 + 名称 + 分数的一致呈现。
:::

::: warning 注意事项
- podium 变体不要用于超过 3 个排名。
- 同一区块内不要混用 podium 与 list。
- 不要缺少明确的排名指示。
:::
