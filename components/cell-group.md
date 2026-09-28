# 单元格分组 DdCellGroup

> 单元格分组容器：title 分组标题、inset 圆角卡片内嵌、border 首尾发丝线开关，支持 title / default 插槽。

## 介绍

DdCellGroup 用于把多个 DdCell 组织成语义分组。默认通栏 + 首尾外框发丝线；`inset` 切换为圆角卡片内嵌；`border=false` 去掉外框；标题与内容均支持插槽自定义。

## 代码演示

### 基础分组与内嵌

:::demo
<DemoBlock>

```vue
<template>
  <dd-cell-group title="预订信息">
    <dd-cell title="包厢类型" value="VIP大包" />
    <dd-cell title="到场时间" value="今晚 20:00" />
  </dd-cell-group>
  <dd-cell-group title="账户安全" inset>
    <dd-cell title="手机号" value="138****8888" />
    <dd-cell title="登录密码" value="已设置" is-link />
  </dd-cell-group>
</template>
```

</DemoBlock>
:::

### title 插槽

:::demo
<DemoBlock>

```vue
<template>
  <dd-cell-group inset>
    <template #title>
      <text style="color: #F5A623">自定义分组标题</text>
    </template>
    <dd-cell title="标题" value="值" />
  </dd-cell-group>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 分组标题 | `string` | `''` |
| inset | 是否圆角卡片内嵌 | `boolean` | `false` |
| border | 是否显示首尾外框发丝线 | `boolean` | `true` |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义分组标题（优先于 title prop） |
| default | 分组内容（通常为若干 DdCell） |

## 设计规范

::: tip 最佳实践
- 信息密集的表单/设置页用 inset 分组，视觉更聚焦。
- 一个页面的分组数控制在 2~5 组，标题用动词短语。
:::

::: warning 注意事项
- 分组的默认插槽内容应保持同质（均为 DdCell）。
- 不要在一个分组里混入非 Cell 组件，避免发丝线断裂。
:::
