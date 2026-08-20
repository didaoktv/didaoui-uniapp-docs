# 单元格 DdCell

> Vant 风格列表单元格，支持 sm/md 尺寸、可选必填星号，isLink 控制箭头并门控 click 触发。

## 介绍

DdCell 是结构化的列表行，由左侧图标、中部标题 + 描述（label）、右侧数值 + 箭头组成。支持 `sm`/`md` 两档尺寸，`required` 显示红色星号，`isLink` 渲染箭头并仅在开启时向外抛 click。`arrowDirection` 控制箭头朝向，`center` 控制垂直对齐，`borderless` 去除底部分割线。

## 代码演示

### 基础用法

`isLink` 显示右向箭头，点击触发 click（仅 isLink 时触发）。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#1f1f1f">
    <dd-cell title="会员等级" value="黄金会员" is-link />
    <dd-cell title="我的钱包" value="¥128.00" is-link />
    <dd-cell title="收货地址" is-link />
  </view>
</template>
```

</DemoBlock>
:::

### 带描述与必填

`label` 在标题下方补充说明；`required` 显示红色星号，适合表单展示行。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#1f1f1f">
    <dd-cell title="包房 A01" label="当前空闲" size="sm" />
    <dd-cell title="预订人" value="张先生" required />
  </view>
</template>
```

</DemoBlock>
:::

### 箭头方向

`arrow-direction` 控制箭头朝向，配合自定义右侧内容。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#1f1f1f">
    <dd-cell title="展开详情" is-link arrow-direction="down" />
    <dd-cell title="返回上级" is-link arrow-direction="left" />
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
| label | 标题下方的描述文字 | `string` | `''` |
| value | 右侧数值文字 | `string` | `''` |
| icon | 左侧图标字符 | `string` | `''` |
| size | 尺寸 | `'sm' \| 'md'` | `'md'` |
| isLink | 是否为导航行（渲染箭头，开启 click） | `boolean` | `false` |
| arrowDirection | 箭头方向 | `'left' \| 'right' \| 'up' \| 'down'` | `'right'` |
| required | 是否必填（显示红色星号） | `boolean` | `false` |
| center | 是否垂直居中 | `boolean` | `false` |
| borderless | 是否去除底部分割线 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击单元格时触发（仅 `isLink=true` 时触发） | `event: Event` |

### Slots

| 名称 | 说明 |
|------|------|
| icon | 自定义左侧图标（优先于 icon prop） |
| label | 自定义描述内容（优先于 label prop） |
| value | 自定义右侧数值内容（优先于 value prop） |
| right-icon | 右侧图标区，位于数值与箭头之间 |

## 设计规范

::: tip 最佳实践
- 配合 `dd-cell-group` 进行分组展示。
- 导航行设置 `isLink` 以渲染箭头。
- 使用 `label` 在标题下补充次级描述。
:::

::: warning 注意事项
- 未设置 `isLink` 时 click 不会触发（handleClick 仅在 isLink 时 emit）。
- 嵌入交互控件时注意关闭 `isLink` 箭头以免误触。
:::
