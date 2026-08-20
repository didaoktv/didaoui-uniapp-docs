# 功能入口网格 DdFeatureGrid

> 可配置列数的图标网格（默认 4 列），支持 circle/squircle 变体；图标默认金色渐变背景，可按项通过 color 覆盖，点击触发 item-click。

## 介绍

DdFeatureGrid 用于首页功能入口与个人中心快捷操作的网格布局。通过 `columns` 控制列数，`variant` 切换圆形/圆角方形图标容器。每项由图标与下方文字标签组成，支持通过 `labelKey`/`iconKey`/`colorKey`/`itemKey` 自定义数据字段映射，点击触发 `item-click` 事件。

## 代码演示

### 基础用法

默认 4 列圆形图标，每项提供 `label` 与 `icon` 字段。

:::demo
<DemoBlock>

```vue
<template>
  <dd-feature-grid :items="items" :columns="4" @item-click="onClick" />
</template>

<script setup>
const items = [
  { label: '门店管理', icon: '店' },
  { label: '每日执行', icon: '执' },
  { label: '督查', icon: '督' },
  { label: '反馈', icon: '反' },
  { label: '工程维修', icon: '修' },
  { label: '数据分析', icon: '析' },
  { label: '预警', icon: '警' },
  { label: '考勤打卡', icon: '勤' },
]
function onClick({ item, index }) {
  console.log(item, index)
}
</script>
```

</DemoBlock>
:::

### 圆角方形与自定义颜色

`variant="squircle"` 切换圆角方形图标，每项可通过 `color` 覆盖默认金色渐变背景。

:::demo
<DemoBlock>

```vue
<template>
  <dd-feature-grid :items="items" :columns="3" variant="squircle" />
</template>

<script setup>
const items = [
  { label: '待办通知', icon: '办', color: 'linear-gradient(135deg,#2D4BA0,#1A2F6B)' },
  { label: '我的客户', icon: '客' },
  { label: '我的业绩', icon: '绩' },
]
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| items | 网格项数据数组 | `FeatureItem[]` | `[]` |
| columns | 列数 | `number` | `4` |
| variant | 图标形状变体 | `'circle' \| 'squircle'` | `'circle'` |
| labelKey | 标签字段名 | `string` | `'label'` |
| iconKey | 图标字段名 | `string` | `'icon'` |
| colorKey | 背景色字段名 | `string` | `'color'` |
| itemKey | 唯一标识字段名（用于 key） | `string` | `''` |

其中 `FeatureItem` 为 `{ [key: string]: any; label?; icon?; color? }`。

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| item-click | 点击网格项时触发 | `{ item: FeatureItem, index: number }` |

### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| icon | 自定义图标内容（优先于 iconKey） | `{ item, index }` |

## 设计规范

::: tip 最佳实践
- 移动端主导航使用 3-4 列。
- 首页功能入口使用 circle 变体，个人中心/设置使用 squircle 变体。
- 标签控制在 2-4 个字符。
- 通过 `item.color` 按项覆盖图标背景色。
:::

::: warning 注意事项
- 移动端列数不要超过 5 列。
- 同一网格内不要混用 circle 与 squircle。
- 不要使用会换行成 3 行以上的长标签。
:::
