# 列表单元格 DdListCell

> 扁平列表单元格，可选图标/标题/副标题/数值/箭头；数值文字为金色，带底部分割线；isLink 或 arrow 显示箭头并启用按压态。

## 介绍

DdListCell 是个人中心、设置页、订单列表等场景的通用列表行。左侧可选图标，中部标题 + 可选副标题，右侧可放数值、自定义图标与箭头。`isLink` 或 `arrow` 控制箭头显示与按压反馈，`borderless` 去除底部分割线。多个插槽支持自定义各区域内容。

## 代码演示

### 基础用法

`isLink` 显示右侧箭头并启用按压态，适合导航行。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#1f1f1f">
    <dd-list-cell title="我的订单" icon="单" is-link />
    <dd-list-cell title="优惠券" icon="券" is-link />
    <dd-list-cell title="消息通知" icon="信" is-link />
  </view>
</template>
```

</DemoBlock>
:::

### 带副标题与数值

`subtitle` 提供次级说明，`value` 显示右侧金色数值。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#1f1f1f">
    <dd-list-cell title="消费记录" subtitle="近 30 天" icon="费" is-link />
    <dd-list-cell title="账户余额" value="¥128.00" icon="余" is-link />
  </view>
</template>
```

</DemoBlock>
:::

### 自定义右侧内容

通过 `value` 与 `right-icon` 插槽自定义右侧区域。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#1f1f1f">
    <dd-list-cell title="消息通知" icon="信">
      <template #value>
        <dd-badge type="dot" variant="error">
          <text>新</text>
        </dd-badge>
      </template>
      <template #right-icon>
        <dd-switch :model-value="true" />
      </template>
    </dd-list-cell>
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 标题文字 | `string` | `''` |
| subtitle | 副标题文字 | `string` | `''` |
| value | 右侧数值文字（金色） | `string` | `''` |
| icon | 左侧图标字符 | `string` | `''` |
| arrow | 是否显示右侧箭头 | `boolean` | `false` |
| isLink | 是否为导航行（显示箭头 + 按压态） | `boolean` | `false` |
| borderless | 是否去除底部分割线 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击单元格时触发 | `event: Event` |

### Slots

| 名称 | 说明 |
|------|------|
| icon | 自定义左侧图标（优先于 icon prop） |
| subtitle | 自定义副标题（优先于 subtitle prop） |
| value | 自定义右侧数值内容（优先于 value prop） |
| right-icon | 右侧图标区，位于数值与箭头之间 |

## 设计规范

::: tip 最佳实践
- 配合分组标题在分组列表中使用。
- 副标题用于补充次级上下文。
- 金额/状态数值使用 `value`（金色）。
- 可导航行设置 `isLink=true`（显示箭头 + 按压态）。
- 通过插槽自定义图标/副标题/数值/右侧图标。
:::

::: warning 注意事项
- 单个单元格右侧不要混用多种附件（数值 + 徽标 + 开关）。
- 分组最后一项去除分割线需有明确意图，否则保留。
- 无导航意图时不要单独开启 `arrow`。
:::
