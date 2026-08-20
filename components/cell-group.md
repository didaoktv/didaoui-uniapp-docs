# 单元格组 DdCellGroup

> 最小化的分组单元格容器，裁剪为 radius-lg 圆角并去除最后一个子元素的底边框，保证圆角处干净无溢出。

## 介绍

DdCellGroup 用于将多个 `dd-cell` 或 `dd-list-cell` 组织为带圆角的分组区块。可选的 `title` 作为分节标题，body 区域裁剪溢出并自动隐藏最后一项的底部分割线，避免在圆角处出现多余边线。

## 代码演示

### 基础用法

将 `dd-cell` 作为默认插槽子项，`title` 作为分节标题。

:::demo
<DemoBlock>

```vue
<template>
  <dd-cell-group title="预订信息">
    <dd-cell title="包房类型" value="大包" is-link />
    <dd-cell title="预订时间" value="19:00-21:00" is-link />
    <dd-cell title="联系人" value="张先生" is-link />
  </dd-cell-group>
</template>
```

</DemoBlock>
:::

### 多分组

多个 cell-group 上下排列，配合 list-cell 混合使用。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-cell-group title="账户">
      <dd-list-cell title="会员等级" value="黄金" is-link />
      <dd-list-cell title="账户余额" value="¥128.00" is-link />
    </dd-cell-group>
    <dd-cell-group title="其它">
      <dd-list-cell title="消息通知" is-link />
      <dd-list-cell title="帮助中心" is-link />
    </dd-cell-group>
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 分组标题 | `string` | `''` |

### Events

无事件。

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题内容（优先于 title prop） |
| default | 分组内容，通常放置 `dd-cell` 或 `dd-list-cell` |

## 设计规范

::: tip 最佳实践
- 将 `dd-cell` 组件作为默认插槽子项放置。
- 使用 `title` 为分组设置节标题。
:::

::: warning 注意事项
- 不要混入非 cell 子元素 —— 容器仅负责清理最后一个 cell 的底边框。
:::
